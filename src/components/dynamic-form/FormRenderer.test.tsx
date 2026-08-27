import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import type { FieldRendererProps, FormConfig } from "./types";
import { FormRenderer } from "./FormRenderer";
import { volunteerFormConfig } from "../../config/volunteerFormConfig";

const fillRequiredIdentity = () => {
  fireEvent.change(screen.getByLabelText(/first name/i), {
    target: { value: "Jordan" },
  });
  fireEvent.change(screen.getByLabelText(/last name/i), {
    target: { value: "Avery" },
  });
  fireEvent.change(screen.getByLabelText(/email address/i), {
    target: { value: "jordan@example.com" },
  });
};

const submitButton = () =>
  screen.getByRole("button", { name: /submit application/i });

describe("FormRenderer", () => {
  test("starts untouched, hides conditional errors, and submits the visible non-volunteer values", async () => {
    const onSubmit = jest.fn().mockResolvedValue(undefined);
    render(<FormRenderer config={volunteerFormConfig} onSubmit={onSubmit} />);

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(screen.queryByText(/select a unit/i)).not.toBeInTheDocument();
    expect(submitButton()).toBeDisabled();

    fillRequiredIdentity();
    await waitFor(() => expect(submitButton()).toBeEnabled());
    fireEvent.click(submitButton());

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        firstName: "Jordan",
        lastName: "Avery",
        email: "jordan@example.com",
        wantsToVolunteer: false,
      })
    );
    expect(
      await screen.findByRole("heading", { name: /thank you for checking in/i })
    ).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  test.each([
    ["Protocol", {}, { unit: "protocol" }],
    ["Technical", { "Technical team": "camera" }, { unit: "technical", technicalRole: "camera" }],
    ["Music", { "Music team": "vocalist", "What part do you sing?": "alto" }, { unit: "music", musicRole: "vocalist", vocalRole: "alto" }],
    ["Music", { "Music team": "instrumentalist", "Primary instrument": "drummer" }, { unit: "music", musicRole: "instrumentalist", instrument: "drummer" }],
  ])(
    "submits the %s branch with only its visible values",
    async (unitLabel, selects, branchValues) => {
      const onSubmit = jest.fn().mockResolvedValue(undefined);
      render(<FormRenderer config={volunteerFormConfig} onSubmit={onSubmit} />);
      fillRequiredIdentity();
      fireEvent.click(screen.getByLabelText(/i want to volunteer/i));
      fireEvent.click(await screen.findByLabelText(unitLabel));

      for (const [label, value] of Object.entries(selects)) {
        fireEvent.change(
          await screen.findByLabelText(new RegExp(label, "i")),
          { target: { value } }
        );
      }

      await waitFor(() => expect(submitButton()).toBeEnabled());
      fireEvent.click(submitButton());

      await waitFor(() =>
        expect(onSubmit).toHaveBeenCalledWith({
          firstName: "Jordan",
          lastName: "Avery",
          email: "jordan@example.com",
          wantsToVolunteer: true,
          ...branchValues,
        })
      );
      expect(
        await screen.findByRole("heading", { name: /welcome to the team/i })
      ).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /join the whatsapp group/i })).toBeInTheDocument();
    }
  );

  test("requires an intentional selection instead of defaulting to the first select option", async () => {
    render(
      <FormRenderer
        config={volunteerFormConfig}
        onSubmit={jest.fn().mockResolvedValue(undefined)}
      />
    );
    fillRequiredIdentity();
    fireEvent.click(screen.getByLabelText(/i want to volunteer/i));
    fireEvent.click(await screen.findByLabelText("Technical"));

    const technicalRole = await screen.findByLabelText(/technical team/i);

    expect(technicalRole).toHaveValue("");
    expect(screen.getByRole("option", { name: "Choose a role" })).toBeDisabled();
    expect(submitButton()).toBeDisabled();

    fireEvent.change(technicalRole, { target: { value: "camera" } });
    await waitFor(() => expect(submitButton()).toBeEnabled());
  });

  test("unregisters hidden descendants after changing branches", async () => {
    const onSubmit = jest.fn().mockResolvedValue(undefined);
    render(<FormRenderer config={volunteerFormConfig} onSubmit={onSubmit} />);
    fillRequiredIdentity();
    fireEvent.click(screen.getByLabelText(/i want to volunteer/i));
    fireEvent.click(await screen.findByLabelText("Music"));
    fireEvent.change(screen.getByLabelText(/music team/i), {
      target: { value: "instrumentalist" },
    });
    fireEvent.change(await screen.findByLabelText(/primary instrument/i), {
      target: { value: "drummer" },
    });
    fireEvent.change(screen.getByLabelText(/music team/i), {
      target: { value: "vocalist" },
    });

    expect(screen.queryByLabelText(/primary instrument/i)).not.toBeInTheDocument();
    fireEvent.change(await screen.findByLabelText(/what part do you sing/i), {
      target: { value: "alto" },
    });
    await waitFor(() => expect(submitButton()).toBeEnabled());
    fireEvent.click(submitButton());

    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
    expect(onSubmit.mock.calls[0][0]).toEqual(
      expect.objectContaining({ musicRole: "vocalist", vocalRole: "alto" })
    );
    expect(onSubmit.mock.calls[0][0]).not.toHaveProperty("instrument");
  });

  test("turning volunteering off removes the complete conditional branch", async () => {
    const onSubmit = jest.fn().mockResolvedValue(undefined);
    render(<FormRenderer config={volunteerFormConfig} onSubmit={onSubmit} />);
    fillRequiredIdentity();
    const volunteerToggle = screen.getByLabelText(/i want to volunteer/i);
    fireEvent.click(volunteerToggle);
    fireEvent.click(await screen.findByLabelText("Technical"));
    fireEvent.change(await screen.findByLabelText(/technical team/i), {
      target: { value: "camera" },
    });
    fireEvent.click(volunteerToggle);

    expect(screen.queryByText(/select a unit/i)).not.toBeInTheDocument();
    await waitFor(() => expect(submitButton()).toBeEnabled());
    fireEvent.click(submitButton());
    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
    expect(onSubmit.mock.calls[0][0]).not.toHaveProperty("unit");
    expect(onSubmit.mock.calls[0][0]).not.toHaveProperty("technicalRole");
  });

  test("shows touched validation and retains values after a rejected submission", async () => {
    const onSubmit = jest.fn().mockRejectedValue(new Error("offline"));
    render(<FormRenderer config={volunteerFormConfig} onSubmit={onSubmit} />);
    fillRequiredIdentity();
    const email = screen.getByLabelText(/email address/i);
    fireEvent.change(email, { target: { value: "invalid" } });
    fireEvent.blur(email);
    expect(await screen.findByText("Enter a valid email address.")).toBeInTheDocument();

    fireEvent.change(email, { target: { value: "jordan@example.com" } });
    await waitFor(() => expect(submitButton()).toBeEnabled());
    fireEvent.click(submitButton());
    expect(
      await screen.findByText(
        "We couldn't save your response. Please check your connection and try again."
      )
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/first name/i)).toHaveValue("Jordan");
  });

  test("reports unknown types and accepts a custom registry renderer", async () => {
    const unknownConfig: FormConfig = {
      ...volunteerFormConfig,
      fields: [{ id: "appointment", type: "date", label: "Appointment", required: true }],
      defaultValues: {},
    };
    const { rerender } = render(
      <FormRenderer config={unknownConfig} onSubmit={jest.fn()} />
    );
    expect(
      screen.getByText("No renderer is registered for field type “date”.")
    ).toBeInTheDocument();
    expect(submitButton()).toBeDisabled();

    const DateField = ({ field, register }: FieldRendererProps) => (
      <label>
        {field.label}
        <input type="date" {...register(field.id)} />
      </label>
    );
    const onSubmit = jest.fn().mockResolvedValue(undefined);
    rerender(
      <FormRenderer
        config={unknownConfig}
        fieldRegistry={{ date: DateField }}
        onSubmit={onSubmit}
      />
    );
    fireEvent.change(screen.getByLabelText("Appointment"), {
      target: { value: "2026-09-19" },
    });
    await waitFor(() => expect(submitButton()).toBeEnabled());
    fireEvent.click(submitButton());
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({ appointment: "2026-09-19" })
    );
  });

  test("reset restores configured defaults", async () => {
    render(
      <FormRenderer config={volunteerFormConfig} onSubmit={jest.fn().mockResolvedValue(undefined)} />
    );
    fillRequiredIdentity();
    await waitFor(() => expect(submitButton()).toBeEnabled());
    fireEvent.click(submitButton());
    fireEvent.click(await screen.findByRole("button", { name: /submit another response/i }));

    expect(screen.getByLabelText(/first name/i)).toHaveValue("");
    expect(screen.getByLabelText(/i want to volunteer/i)).not.toBeChecked();
    expect(submitButton()).toBeDisabled();
  });
});
