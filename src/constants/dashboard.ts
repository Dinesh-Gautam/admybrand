import { chartAreaGradient } from "@/components/charts/ChartjsConfig";
import { adjustColorOpacity, getCssVariable } from "@/utils/chart";

export const PlusChartData = {
  labels: [
    "12-01-2022",
    "01-01-2023",
    "02-01-2023",
    "03-01-2023",
    "04-01-2023",
    "05-01-2023",
    "06-01-2023",
    "07-01-2023",
    "08-01-2023",
    "09-01-2023",
    "10-01-2023",
    "11-01-2023",
    "12-01-2023",
    "01-01-2024",
    "02-01-2024",
    "03-01-2024",
    "04-01-2024",
    "05-01-2024",
    "06-01-2024",
    "07-01-2024",
    "08-01-2024",
    "09-01-2024",
    "10-01-2024",
    "11-01-2024",
    "12-01-2024",
    "01-01-2025",
  ],
  datasets: [
    {
      data: [
        732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192,
        154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532,
      ],
      fill: true,
      backgroundColor: function (context: any) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) {
          return null;
        }
        return chartAreaGradient(ctx, chartArea, [
          {
            stop: 0,
            color: adjustColorOpacity(getCssVariable("--color-violet-500"), 0),
          },
          {
            stop: 1,
            color: adjustColorOpacity(
              getCssVariable("--color-violet-500"),
              0.2
            ),
          },
        ]);
      },
      borderColor: getCssVariable("--color-violet-500"),
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: getCssVariable("--color-violet-500"),
      pointHoverBackgroundColor: getCssVariable("--color-violet-500"),
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
      tension: 0.2,
    },
    {
      data: [
        532, 532, 532, 404, 404, 314, 314, 314, 314, 314, 234, 314, 234, 234,
        314, 314, 314, 388, 314, 202, 202, 202, 202, 314, 720, 642,
      ],
      fill: true,
      backgroundColor: function (context: any) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) {
          return null;
        }
        return chartAreaGradient(ctx, chartArea, [
          {
            stop: 0,
            color: adjustColorOpacity(getCssVariable("--color-gray-500"), 0),
          },
          {
            stop: 1,
            color: adjustColorOpacity(getCssVariable("--color-gray-500"), 0.2),
          },
        ]);
      },
      borderColor: adjustColorOpacity(getCssVariable("--color-gray-500"), 0.25),
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: adjustColorOpacity(
        getCssVariable("--color-gray-500"),
        0.25
      ),
      pointHoverBackgroundColor: adjustColorOpacity(
        getCssVariable("--color-gray-500"),
        0.25
      ),
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
      tension: 0.2,
    },
  ],
};

export const AdvancedChartData = {
  labels: [
    "12-01-2022",
    "01-01-2023",
    "02-01-2023",
    "03-01-2023",
    "04-01-2023",
    "05-01-2023",
    "06-01-2023",
    "07-01-2023",
    "08-01-2023",
    "09-01-2023",
    "10-01-2023",
    "11-01-2023",
    "12-01-2023",
    "01-01-2024",
    "02-01-2024",
    "03-01-2024",
    "04-01-2024",
    "05-01-2024",
    "06-01-2024",
    "07-01-2024",
    "08-01-2024",
    "09-01-2024",
    "10-01-2024",
    "11-01-2024",
    "12-01-2024",
    "01-01-2025",
  ],
  datasets: [
    {
      data: [
        622, 622, 426, 471, 365, 365, 238, 324, 288, 206, 324, 324, 500, 409,
        409, 273, 232, 273, 500, 570, 767, 808, 685, 767, 685, 685,
      ],
      fill: true,
      backgroundColor: function (context: any) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) {
          return null;
        }
        return chartAreaGradient(ctx, chartArea, [
          {
            stop: 0,
            color: adjustColorOpacity(getCssVariable("--color-violet-500"), 0),
          },
          {
            stop: 1,
            color: adjustColorOpacity(
              getCssVariable("--color-violet-500"),
              0.2
            ),
          },
        ]);
      },
      borderColor: getCssVariable("--color-violet-500"),
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: getCssVariable("--color-violet-500"),
      pointHoverBackgroundColor: getCssVariable("--color-violet-500"),
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
      tension: 0.2,
    },
    {
      data: [
        732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192,
        154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532,
      ],
      fill: true,
      backgroundColor: function (context: any) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) {
          return null;
        }
        return chartAreaGradient(ctx, chartArea, [
          {
            stop: 0,
            color: adjustColorOpacity(getCssVariable("--color-gray-500"), 0),
          },
          {
            stop: 1,
            color: adjustColorOpacity(getCssVariable("--color-gray-500"), 0.2),
          },
        ]);
      },
      borderColor: adjustColorOpacity(getCssVariable("--color-gray-500"), 0.25),
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: adjustColorOpacity(
        getCssVariable("--color-gray-500"),
        0.25
      ),
      pointHoverBackgroundColor: adjustColorOpacity(
        getCssVariable("--color-gray-500"),
        0.25
      ),
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
      tension: 0.2,
    },
  ],
};

export const ProfessionalChartData = {
  labels: [
    "12-01-2022",
    "01-01-2023",
    "02-01-2023",
    "03-01-2023",
    "04-01-2023",
    "05-01-2023",
    "06-01-2023",
    "07-01-2023",
    "08-01-2023",
    "09-01-2023",
    "10-01-2023",
    "11-01-2023",
    "12-01-2023",
    "01-01-2024",
    "02-01-2024",
    "03-01-2024",
    "04-01-2024",
    "05-01-2024",
    "06-01-2024",
    "07-01-2024",
    "08-01-2024",
    "09-01-2024",
    "10-01-2024",
    "11-01-2024",
    "12-01-2024",
    "01-01-2025",
  ],
  datasets: [
    {
      data: [
        540, 466, 540, 466, 385, 432, 334, 334, 289, 289, 200, 289, 222, 289,
        289, 403, 554, 304, 289, 270, 134, 270, 829, 344, 388, 364,
      ],
      fill: true,
      backgroundColor: function (context: any) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) {
          return null;
        }
        return chartAreaGradient(ctx, chartArea, [
          {
            stop: 0,
            color: adjustColorOpacity(getCssVariable("--color-violet-500"), 0),
          },
          {
            stop: 1,
            color: adjustColorOpacity(
              getCssVariable("--color-violet-500"),
              0.2
            ),
          },
        ]);
      },
      borderColor: getCssVariable("--color-violet-500"),
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: getCssVariable("--color-violet-500"),
      pointHoverBackgroundColor: getCssVariable("--color-violet-500"),
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
      tension: 0.2,
    },
    {
      data: [
        689, 562, 477, 477, 477, 477, 458, 314, 430, 378, 430, 498, 642, 350,
        145, 145, 354, 260, 188, 188, 300, 300, 282, 364, 660, 554,
      ],
      fill: true,
      backgroundColor: function (context: any) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) {
          return null;
        }
        return chartAreaGradient(ctx, chartArea, [
          {
            stop: 0,
            color: adjustColorOpacity(getCssVariable("--color-gray-500"), 0),
          },
          {
            stop: 1,
            color: adjustColorOpacity(getCssVariable("--color-gray-500"), 0.2),
          },
        ]);
      },
      borderColor: adjustColorOpacity(getCssVariable("--color-gray-500"), 0.25),
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: adjustColorOpacity(
        getCssVariable("--color-gray-500"),
        0.25
      ),
      pointHoverBackgroundColor: adjustColorOpacity(
        getCssVariable("--color-gray-500"),
        0.25
      ),
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
      tension: 0.2,
    },
  ],
};

export const directVsIndirectChartData = {
  labels: [
    "12-01-2022",
    "01-01-2023",
    "02-01-2023",
    "03-01-2023",
    "04-01-2023",
    "05-01-2023",
  ],
  datasets: [
    {
      label: "Direct",
      data: [800, 1600, 900, 1300, 1950, 1700],
      backgroundColor: getCssVariable("--color-sky-500"),
      hoverBackgroundColor: getCssVariable("--color-sky-600"),
      barPercentage: 0.7,
      categoryPercentage: 0.7,
      borderRadius: 4,
    },
    {
      label: "Indirect",
      data: [4900, 2600, 5350, 4800, 5200, 4800],
      backgroundColor: getCssVariable("--color-violet-500"),
      hoverBackgroundColor: getCssVariable("--color-violet-600"),
      barPercentage: 0.7,
      categoryPercentage: 0.7,
      borderRadius: 4,
    },
  ],
};

export const realTimeChartData = [
  57.81, 57.75, 55.48, 54.28, 53.14, 52.25, 51.04, 52.49, 55.49, 56.87, 53.73,
  56.42, 58.06, 55.62, 58.16, 55.22, 58.67, 60.18, 61.31, 63.25, 65.91, 64.44,
  65.97, 62.27, 60.96, 59.34, 55.07, 59.85, 53.79, 51.92, 50.95, 49.65, 48.09,
  49.81, 47.85, 49.52, 50.21, 52.22, 54.42, 53.42, 50.91, 58.52, 53.37, 57.58,
  59.09, 59.36, 58.71, 59.42, 55.93, 57.71, 50.62, 56.28, 57.37, 53.08, 55.94,
  55.82, 53.94, 52.65, 50.25,
];

export const topCountriesChartData = {
  labels: ["United States", "Italy", "Other"],
  datasets: [
    {
      label: "Top Countries",
      data: [35, 30, 35],
      backgroundColor: [
        getCssVariable("--color-violet-500"),
        getCssVariable("--color-sky-500"),
        getCssVariable("--color-violet-800"),
      ],
      hoverBackgroundColor: [
        getCssVariable("--color-violet-600"),
        getCssVariable("--color-sky-600"),
        getCssVariable("--color-violet-900"),
      ],
      borderWidth: 0,
    },
  ],
};

export const salesOverTimeChartData = {
  labels: [
    "12-01-2022",
    "01-01-2023",
    "02-01-2023",
    "03-01-2023",
    "04-01-2023",
    "05-01-2023",
    "06-01-2023",
    "07-01-2023",
    "08-01-2023",
    "09-01-2023",
    "10-01-2023",
    "11-01-2023",
    "12-01-2023",
    "01-01-2024",
    "02-01-2024",
    "03-01-2024",
    "04-01-2024",
    "05-01-2024",
    "06-01-2024",
    "07-01-2024",
    "08-01-2024",
    "09-01-2024",
    "10-01-2024",
    "11-01-2024",
    "12-01-2024",
    "01-01-2025",
  ],
  datasets: [
    {
      label: "Current",
      data: [
        73, 64, 73, 69, 104, 104, 164, 164, 120, 120, 120, 148, 142, 104, 122,
        110, 104, 152, 166, 233, 268, 252, 284, 284, 333, 323,
      ],
      borderColor: getCssVariable("--color-violet-500"),
      fill: false,
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: getCssVariable("--color-violet-500"),
      pointHoverBackgroundColor: getCssVariable("--color-violet-500"),
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
      tension: 0.2,
    },
    {
      label: "Previous",
      data: [
        184, 86, 42, 378, 42, 243, 38, 120, 0, 0, 42, 0, 84, 0, 276, 0, 124, 42,
        124, 88, 88, 215, 156, 88, 124, 64,
      ],
      borderColor: getCssVariable("--color-sky-500"),
      fill: false,
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: getCssVariable("--color-sky-500"),
      pointHoverBackgroundColor: getCssVariable("--color-sky-500"),
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
      tension: 0.2,
    },
    {
      label: "Average",
      data: [
        122, 170, 192, 86, 102, 124, 115, 115, 56, 104, 0, 72, 208, 186, 223,
        188, 114, 162, 200, 150, 118, 118, 76, 122, 230, 268,
      ],
      borderColor: getCssVariable("--color-green-500"),
      fill: false,
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: getCssVariable("--color-green-500"),
      pointHoverBackgroundColor: getCssVariable("--color-green-500"),
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
      tension: 0.2,
    },
  ],
};

export const salesVsRefundsChartData = {
  labels: [
    "12-01-2022",
    "01-01-2023",
    "02-01-2023",
    "03-01-2023",
    "04-01-2023",
    "05-01-2023",
  ],
  datasets: [
    {
      label: "Stack 1",
      data: [6200, 9200, 6600, 8800, 5200, 9200],
      backgroundColor: getCssVariable("--color-violet-500"),
      hoverBackgroundColor: getCssVariable("--color-violet-600"),
      barPercentage: 0.7,
      categoryPercentage: 0.7,
      borderRadius: 4,
    },
    {
      label: "Stack 2",
      data: [-4000, -2600, -5350, -4000, -7500, -2000],
      backgroundColor: getCssVariable("--color-violet-200"),
      hoverBackgroundColor: getCssVariable("--color-violet-300"),
      barPercentage: 0.7,
      categoryPercentage: 0.7,
      borderRadius: 4,
    },
  ],
};

export const reasonForRefundsChartData = {
  labels: [
    "Difficulties",
    "Missing features",
    "Quality",
    "Advertised",
    "Other",
  ],
  datasets: [
    {
      label: "Refunds",
      data: [131, 100, 81, 65, 72],
      backgroundColor: [
        getCssVariable("--color-violet-500"),
        getCssVariable("--color-violet-700"),
        getCssVariable("--color-sky-500"),
        getCssVariable("--color-green-500"),
        getCssVariable("--color-gray-200"),
      ],
      backgroundColorLegend: [
        "var(--color-violet-500)",
        "var(--color-violet-700)",
        "var(--color-sky-500)",
        "var(--color-green-500)",
        "var(--color-gray-200)",
      ],
      hoverBackgroundColor: [
        getCssVariable("--color-violet-600"),
        getCssVariable("--color-violet-800"),
        getCssVariable("--color-sky-600"),
        getCssVariable("--color-green-600"),
        getCssVariable("--color-gray-300"),
      ],
      barPercentage: 0.9,
      categoryPercentage: 0.66,
      borderRadius: 4,
    },
  ],
};
