import React, { useRef, useEffect, useState } from "react";
import { useThemeProvider } from "@/utils/theme-provider";

import { chartColors } from "./ChartjsConfig";
import {
  Chart,
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  ChartData,
} from "chart.js";
import "chartjs-adapter-moment";

// Import utilities
import { adjustColorOpacity, getCssVariable, formatValue } from "@/utils/chart";

Chart.register(
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip
);

interface RealtimeChartProps {
  data: ChartData<"line">;
  width: number;
  height: number;
}

const CHART_LAYOUT_PADDING = 20;
const Y_AXIS_SUGGESTED_MIN = 30;
const Y_AXIS_SUGGESTED_MAX = 80;
const Y_AXIS_MAX_TICKS_LIMIT = 5;
const X_AXIS_AUTO_SKIP_PADDING = 48;
const RESIZE_DELAY = 200;
const PERCENTAGE_MULTIPLIER = 100;
const DEVIATION_BACKGROUND_OPACITY = 0.2;

const getChartOptions = (
  darkMode: boolean,
  textColor: any,
  gridColor: any,
  tooltipTitleColor: any,
  tooltipBodyColor: any,
  tooltipBgColor: any,
  tooltipBorderColor: any
) => ({
  layout: {
    padding: CHART_LAYOUT_PADDING,
  },
  scales: {
    y: {
      border: {
        display: false,
      },
      suggestedMin: Y_AXIS_SUGGESTED_MIN,
      suggestedMax: Y_AXIS_SUGGESTED_MAX,
      ticks: {
        maxTicksLimit: Y_AXIS_MAX_TICKS_LIMIT,
        callback: (value: any) => formatValue(value),
        color: darkMode ? textColor.dark : textColor.light,
      },
      grid: {
        color: darkMode ? gridColor.dark : gridColor.light,
      },
    },
    x: {
      type: "time" as "time",
      time: {
        parser: "hh:mm:ss",
        unit: "second" as "second",
        tooltipFormat: "MMM DD, H:mm:ss a",
        displayFormats: {
          second: "H:mm:ss",
        },
      },
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        autoSkipPadding: X_AXIS_AUTO_SKIP_PADDING,
        maxRotation: 0,
        color: darkMode ? textColor.dark : textColor.light,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      titleFont: {
        weight: "bold" as "bold",
      },
      callbacks: {
        label: (context: any) => formatValue(context.parsed.y),
      },
      titleColor: darkMode ? tooltipTitleColor.dark : tooltipTitleColor.light,
      bodyColor: darkMode ? tooltipBodyColor.dark : tooltipBodyColor.light,
      backgroundColor: darkMode ? tooltipBgColor.dark : tooltipBgColor.light,
      borderColor: darkMode
        ? tooltipBorderColor.dark
        : tooltipBorderColor.light,
    },
  },
  interaction: {
    intersect: false,
    mode: "nearest" as "nearest",
  },
  maintainAspectRatio: false,
  resizeDelay: RESIZE_DELAY,
});

const RealtimeChart = ({ data, width, height }: RealtimeChartProps) => {
  const [chart, setChart] = useState<Chart | null>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const chartValue = useRef<HTMLSpanElement>(null);
  const chartDeviation = useRef<HTMLDivElement>(null);
  const { currentTheme } = useThemeProvider();
  const darkMode = currentTheme === "dark";
  const {
    textColor,
    gridColor,
    tooltipTitleColor,
    tooltipBodyColor,
    tooltipBgColor,
    tooltipBorderColor,
  } = chartColors;

  useEffect(() => {
    const ctx = canvas.current;
    if (!ctx) return;

    const newChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: getChartOptions(
        darkMode,
        textColor,
        gridColor,
        tooltipTitleColor,
        tooltipBodyColor,
        tooltipBgColor,
        tooltipBorderColor
      ),
    });
    setChart(newChart);
    return () => newChart.destroy();
  }, []);

  useEffect(() => {
    if (!chart) return;
    const currentValue = data.datasets[0].data[
      data.datasets[0].data.length - 1
    ] as number;
    const previousValue = data.datasets[0].data[
      data.datasets[0].data.length - 2
    ] as number;

    if (chartValue.current) {
      chartValue.current.innerHTML = currentValue.toString();
    }

    if (chartDeviation.current) {
      const diff =
        ((currentValue - previousValue) / previousValue) *
        PERCENTAGE_MULTIPLIER;
      chartDeviation.current.innerHTML = `${diff > 0 ? "+" : ""}${diff.toFixed(
        2
      )}%`;

      if (diff < 0) {
        chartDeviation.current.style.backgroundColor = adjustColorOpacity(
          getCssVariable("--color-red-500"),
          DEVIATION_BACKGROUND_OPACITY
        );
        chartDeviation.current.style.color = getCssVariable("--color-red-700");
      } else {
        chartDeviation.current.style.backgroundColor = adjustColorOpacity(
          getCssVariable("--color-green-500"),
          DEVIATION_BACKGROUND_OPACITY
        );
        chartDeviation.current.style.color =
          getCssVariable("--color-green-700");
      }
    }
    chart.update("none");
  }, [data, chart]);

  useEffect(() => {
    if (!chart) return;

    if (darkMode) {
      chart.options.scales!.x!.ticks!.color = textColor.dark;
      chart.options.scales!.y!.ticks!.color = textColor.dark;
      chart.options.scales!.y!.grid!.color = gridColor.dark;
      chart.options.plugins!.tooltip!.titleColor = tooltipTitleColor.dark;
      chart.options.plugins!.tooltip!.bodyColor = tooltipBodyColor.dark;
      chart.options.plugins!.tooltip!.backgroundColor = tooltipBgColor.dark;
      chart.options.plugins!.tooltip!.borderColor = tooltipBorderColor.dark;
    } else {
      chart.options.scales!.x!.ticks!.color = textColor.light;
      chart.options.scales!.y!.ticks!.color = textColor.light;
      chart.options.scales!.y!.grid!.color = gridColor.light;
      chart.options.plugins!.tooltip!.titleColor = tooltipTitleColor.light;
      chart.options.plugins!.tooltip!.bodyColor = tooltipBodyColor.light;
      chart.options.plugins!.tooltip!.backgroundColor = tooltipBgColor.light;
      chart.options.plugins!.tooltip!.borderColor = tooltipBorderColor.light;
    }
    chart.update("none");
  }, [
    currentTheme,
    chart,
    textColor,
    gridColor,
    tooltipTitleColor,
    tooltipBodyColor,
    tooltipBgColor,
    tooltipBorderColor,
    darkMode,
  ]);

  return (
    <React.Fragment>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">
            $<span ref={chartValue}>57.81</span>
          </div>
          <div
            ref={chartDeviation}
            className="text-sm font-semibold text-white px-1.5 rounded-full"
          ></div>
        </div>
      </div>
      <div className="grow">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </React.Fragment>
  );
};

export default RealtimeChart;
