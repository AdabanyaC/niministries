import type {
  DependencyRule,
  FormFieldConfig,
  FormOutcomeConfig,
  FormValues,
} from "./types";

export const matchesDependency = (
  rule: DependencyRule,
  values: FormValues
): boolean => {
  const dependencyValue = values[rule.fieldId];

  switch (rule.operator || "equals") {
    case "notEquals":
      return dependencyValue !== rule.value;
    case "includes":
      return (
        Array.isArray(dependencyValue) && dependencyValue.includes(rule.value)
      );
    case "truthy":
      return Boolean(dependencyValue);
    case "equals":
    default:
      return dependencyValue === rule.value;
  }
};

export const getVisibleFieldIds = (
  fields: FormFieldConfig[],
  values: FormValues
): Set<string> => {
  const visibleIds = new Set(
    fields.filter((field) => !field.dependsOn).map((field) => field.id)
  );

  let changed = true;
  while (changed) {
    changed = false;

    for (const field of fields) {
      if (!field.dependsOn || visibleIds.has(field.id)) continue;
      if (!visibleIds.has(field.dependsOn.fieldId)) continue;

      if (matchesDependency(field.dependsOn, values)) {
        visibleIds.add(field.id);
        changed = true;
      }
    }
  }

  return visibleIds;
};

export const selectOutcome = (
  outcomes: FormOutcomeConfig[],
  values: FormValues
): FormOutcomeConfig | undefined =>
  outcomes.find(
    (outcome) => !outcome.when || matchesDependency(outcome.when, values)
  );
