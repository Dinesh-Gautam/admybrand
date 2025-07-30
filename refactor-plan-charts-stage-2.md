# Refactoring Plan for `src/components/charts` - Stage 2

This document outlines the refactoring plan for the remaining chart components, continuing the effort to abstract logic and improve code quality.

---

## Component-Specific Refactoring

### Files: `DoughnutChart.tsx`, `LineChart02.tsx`

- **Objective:** Align these components with the new architecture by adopting the `useChart` hook and `ChartLegend` component.
- **Actions:**
  - Refactor both components to remove all `useEffect` and `useState` logic for chart management.
  - Call the `useChart` hook with the appropriate `data` and `options`.
  - Replace the `htmlLegend` plugin and its associated `<ul>` with the new declarative `<ChartLegend chart={chart} />` component.
  - Add comprehensive JSDoc comments.

### File: `LineChart01.tsx`

- **Objective:** This component already uses a `useChart` hook. The goal is to ensure it's using the newly standardized hook and add proper documentation.
- **Actions:**
  - Verify that the `useChart` hook it consumes is the new, standardized one from `src/hooks/useChart.ts`.
  - Add comprehensive JSDoc comments to explain its props and purpose.

### File: `RealtimeChart.tsx`

- **Objective:** This component requires significant refactoring to remove magic numbers, eliminate direct DOM manipulation, and adopt the `useChart` hook.
- **Actions:**
  - **Adopt `useChart` Hook:** Refactor to use the `useChart` hook for all chart creation and theme management logic.
  - **Extract Magic Numbers:** All hardcoded numbers (e.g., `CHART_LAYOUT_PADDING`, `Y_AXIS_SUGGESTED_MIN`, `RESIZE_DELAY`) will be defined as named constants at the top of the file.
  - **Remove Direct DOM Manipulation:**
    - The `chartDeviation` ref and its imperative updates (`innerHTML`, `style`) will be removed.
    - Create a new state variable, e.g., `const [deviation, setDeviation] = useState({ value: 0, color: '' });`.
    - In the `useEffect` that responds to `data` changes, calculate the deviation and update this state.
    - In the JSX, render the deviation value and apply conditional classes for the color based on the state.
    ```jsx
    <div
      className={`text-sm font-semibold px-1.5 rounded-full ${deviation.color}`}
    >
      {deviation.value > 0 ? '+' : ''}
      {deviation.value.toFixed(2)}%
    </div>
    ```
  - **Add JSDoc:** Add comprehensive JSDoc comments.
