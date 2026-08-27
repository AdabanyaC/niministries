import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

const renderNavbar = () =>
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

describe("Navbar mobile menu", () => {
  test("opens, closes with Escape, and exposes its state accessibly", () => {
    renderNavbar();

    const openButton = screen.getByRole("button", {
      name: /open navigation/i,
    });
    const mobileNavigation = document.getElementById("mobile-navigation");

    expect(openButton).toHaveAttribute("aria-expanded", "false");
    expect(mobileNavigation).toHaveAttribute("aria-hidden", "true");

    fireEvent.click(openButton);

    expect(
      screen.getByRole("button", { name: /close navigation/i })
    ).toHaveAttribute("aria-expanded", "true");
    expect(mobileNavigation).toHaveAttribute("aria-hidden", "false");

    fireEvent.keyDown(window, { key: "Escape" });

    expect(
      screen.getByRole("button", { name: /open navigation/i })
    ).toHaveAttribute("aria-expanded", "false");
    expect(mobileNavigation).toHaveAttribute("aria-hidden", "true");
  });
});
