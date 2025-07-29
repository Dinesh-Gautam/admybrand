import { useState, useEffect } from "react";

const useRealtimeChart = (data: number[], range = 35) => {
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [slicedData, setSlicedData] = useState(data.slice(0, range));

  const generateDates = () => {
    const now = new Date();
    const dates: Date[] = [];
    data.forEach((v, i) => {
      dates.push(new Date(now.getTime() - 2000 - i * 2000));
    });
    return dates;
  };

  const [slicedLabels, setSlicedLabels] = useState(
    generateDates().slice(0, range).reverse()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [counter]);

  useEffect(() => {
    setIncrement(increment + 1);
    if (increment + range < data.length) {
      setSlicedData(([x, ...slicedData]) => [
        ...slicedData,
        data[increment + range],
      ]);
    } else {
      setIncrement(0);
    }
    setSlicedLabels(([x, ...slicedLabels]: Date[]) => [
      ...slicedLabels,
      new Date(),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return { slicedData, slicedLabels };
};

export default useRealtimeChart;
