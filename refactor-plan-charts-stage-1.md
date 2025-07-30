# Refactoring Plan for `src/components/charts` - Stage 1

This document outlines the refactoring plan for the chart components. The primary goal is to eliminate widespread code duplication by creating reusable abstractions for chart logic and presentation.

---

## High-Priority Abstractions

### 1. Create a Reusable `useChart` Hook

- **Objective:** Abstract all the boilerplate logic required to initialize, update, and destroy a Chart.js instance into a single, reusable hook.
- **Actions:**
  - Create a new hook `src/hooks/useChart.ts` (or refactor the existing one).
  - This hook will be responsible for:
    - Managing the `canvas` ref.
    - Holding the `chart` instance in a state variable.
    - Containing the `useEffect` for chart creation and destruction.
    - Containing the `useEffect` that listens to `currentTheme` and updates the chart's colors and options accordingly.
  - The hook will accept `data`, `options`, and chart `type` as arguments.
- **Affected Components:** All chart components (`BarChart01`, `BarChart02`, etc.).

### 2. Create a Declarative `ChartLegend` Component

- **Objective:** Replace the imperative "htmlLegend" plugin with a declarative React component. This eliminates direct DOM manipulation and duplicated code.
- **Actions:**
  - Create a new component `src/components/charts/ChartLegend.tsx`.
  - This component will accept the `chart` instance as a prop.
  - It will use React state and JSX to render the legend items by mapping over `chart.options.plugins.legend.labels.generateLabels(chart)`.
  - The `onClick` handler for each legend item will use the chart instance to toggle dataset visibility (`chart.setDatasetVisibility(...)`).
- **Affected Components:** `BarChart01`, `BarChart03`, and any other chart that uses this custom legend.

---

## Component-Specific Refactoring

### Files: `BarChart01.tsx`, `BarChart02.tsx`, `BarChart03.tsx`, `BarChart04.tsx`

- **Objective:** Simplify all chart components into thin, declarative wrappers.
- **Actions:**
  - Remove all `useState` and `useEffect` hooks for chart management.
  - Remove the `htmlLegend` plugin where it exists.
  - Call the new `useChart` hook, passing in the specific `data` and `options` for that chart.
  - The component's return statement will be simplified to:
    ```jsx
    <React.Fragment>
      {/* Conditionally render the legend if needed */}
      <ChartLegend chart={chart} />
      <div className="grow">
        <canvas ref={canvas}></canvas>
      </div>
    </React.Fragment>
    ```
  - Add comprehensive JSDoc comments to each component.

### File: `ChartjsConfig.tsx`

- **Objective:** Make this file the single source of truth for all global Chart.js configuration.
- **Actions:**
  - Move all `Chart.register(...)` calls from individual chart components into this file to ensure all necessary controllers, scales, and elements are registered once.
  - Add JSDoc comments to explain the file's purpose and the exported `chartColors` object.
