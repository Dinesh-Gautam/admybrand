# Refactoring Plan for `src/components/dashboard` - Stage 1

This document outlines the refactoring plan for the first set of components in the `src/components/dashboard` directory.

---

## Component-Specific Refactoring

### File: `ActivityItem.tsx`

- **Centralize Types:** The `Activity` interface and `ActivityType` enum are defined locally.
  - **Action:** Move both `Activity` and `ActivityType` to a central types file (e.g., `src/types/index.ts`) to make them available globally.
- **Decouple Content:** The descriptive text ("mentioned", "in a new post") is hardcoded.
  - **Action:** Refactor the component to accept a `description` prop or build the description dynamically based on the `ActivityType` to make it more flexible.
- **JSDoc:** Add comprehensive JSDoc comments.

### File: `AdvancedSalesCard.tsx`

- **Decouple Data:** The component directly imports `AdvancedChartData`.
  - **Action:** Refactor the component to accept `chartData` as a prop. This makes the card a generic container that can display any line chart data.
- **JSDoc:** Add comprehensive JSDoc comments.

### File: `AiAnomalyTooltip.tsx`

- **JSDoc:** This is a simple component.
  - **Action:** Add JSDoc comments to explain its purpose and props.

### File: `AiInsightSummaryCard.tsx`

- **Decouple Content:** The AI-generated insight text is hardcoded.
  - **Action:** Refactor the component to accept an `insightText` prop, allowing it to display dynamic summaries.
- **JSDoc:** Add comprehensive JSDoc comments.

### File: `AiPersonaBadge.tsx`

- **Improve Styling Logic:** The `getPersonaStyles` function uses a `switch` statement, which can become verbose as more personas are added.

  - **Action:** Refactor this to use a more scalable mapping object.

  ```typescript
  const PERSONA_STYLES = {
    'High-value': 'bg-green-500/10 text-green-600 ...',
    'Likely to churn': 'bg-red-500/10 text-red-600 ...',
    // ... other personas
  };

  const personaStyle = PERSONA_STYLES[persona] || PERSONA_STYLES.default;
  ```

- **JSDoc:** Add comprehensive JSDoc comments.
