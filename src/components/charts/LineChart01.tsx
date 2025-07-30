import React from 'react';
import { useChart } from '../../hooks/useChart';
import { ChartData } from 'chart.js';

interface LineChart01Props {
  data: ChartData<'line'>;
  width: number;
  height: number;
}

function LineChart01({ data, width, height }: LineChart01Props) {
  const canvas = useChart(data);
  return <canvas ref={canvas} width={width} height={height}></canvas>;
}

export default LineChart01;
