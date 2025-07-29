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
import { formatValue } from "@/utils/chart";

Chart.register(
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip
);

interface LineChart01Props {
  data: ChartData<"line">;
  width: number;
  height: number;
}

function LineChart01({ data, width, height }: LineChart01Props) {
  const [chart, setChart] = useState<Chart | null>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const { currentTheme } = useThemeProvider();
  const darkMode = currentTheme === "dark";
  const { tooltipBodyColor, tooltipBgColor, tooltipBorderColor } = chartColors;

  useEffect(() => {
    const ctx = canvas.current;
    if (!ctx) return;
    // eslint-disable-next-line no-unused-vars
    const newChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            display: false,
            beginAtZero: true,
          },
          x: {
            type: "time",
            time: {
              parser: "MM-DD-YYYY",
              unit: "month",
            },
            display: false,
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: () => "", // Disable tooltip title
              label: (context) => formatValue(context.parsed.y),
            },
            bodyColor: darkMode
              ? tooltipBodyColor.dark
              : tooltipBodyColor.light,
            backgroundColor: darkMode
              ? tooltipBgColor.dark
              : tooltipBgColor.light,
            borderColor: darkMode
              ? tooltipBorderColor.dark
              : tooltipBorderColor.light,
          },
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
      plugins: [
        {
          id: "chartArea",
          beforeDraw(chart, args, options) {
            const ctx = chart.ctx;
            const area = chart.chartArea;
            ctx.save();
            ctx.fillStyle = darkMode
              ? "rgba(42, 53, 72, 0.5)"
              : "rgba(249, 250, 251, 1)";
            ctx.fillRect(
              area.left,
              area.top,
              area.right - area.left,
              area.bottom - area.top
            );
            ctx.restore();
          },
        },
      ],
    });
    setChart(newChart);
    return () => newChart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!chart) return;

    if (darkMode) {
      chart.options.plugins!.tooltip!.bodyColor = tooltipBodyColor.dark;
      chart.options.plugins!.tooltip!.backgroundColor = tooltipBgColor.dark;
      chart.options.plugins!.tooltip!.borderColor = tooltipBorderColor.dark;
    } else {
      chart.options.plugins!.tooltip!.bodyColor = tooltipBodyColor.light;
      chart.options.plugins!.tooltip!.backgroundColor = tooltipBgColor.light;
      chart.options.plugins!.tooltip!.borderColor = tooltipBorderColor.light;
    }
    chart.update("none");
  }, [currentTheme]);

  return <canvas ref={canvas} width={width} height={height}></canvas>;
}

export default LineChart01;
