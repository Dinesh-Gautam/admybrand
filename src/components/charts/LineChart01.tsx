import React from 'react';
import { useLineChart } from '../../hooks/useChart';
import { ChartData } from 'chart.js';

/**
 * Props for the LineChart01 component.
 */
interface LineChart01Props {
  /**
   * The data to be displayed in the line chart.
   */
  data: ChartData<'line'>;
  /**
   * The width of the chart canvas.
   */
  width: number;
  /**
   * The height of the chart canvas.
   */
  height: number;
}

/**
 * Renders a line chart using a custom hook.
 * @param {LineChart01Props} props - The component props.
 * @param {ChartData<'line'>} props.data - The data for the line chart.
 * @param {number} props.width - The width of the chart.
 * @param {number} props.height - The height of the chart.
 * @returns {JSX.Element} The LineChart01 component.
 */
function LineChart01({ data, width, height }: LineChart01Props) {
  const canvas = useLineChart(data);
  return <canvas ref={canvas} width={width} height={height}></canvas>;
}

export default LineChart01;
