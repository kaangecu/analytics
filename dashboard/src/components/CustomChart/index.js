import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const CustomChart = ({ categories, data, name, className }) => {
  const [chartState, setChartState] = useState({
    options: {
      chart: {
        id: "line",
      },
      xaxis: {
        categories: categories,
      },
    },
    series: [
      {
        name: name,
        data: data,
      },
    ],
  });

  useEffect(() => {
    setChartState({
      options: {
        chart: {
          id: "line",
        },
        xaxis: {
          categories: categories,
        },
      },
      series: [
        {
          name: name,
          data: data,
        },
      ],
    });
  }, [categories, data, name]);

  return (
    <div className={className}>
      <label>{name}</label>
      <Chart
        options={chartState.options}
        series={chartState.series}
        type="line"
        width="500"
      />
    </div>
  );
};

export default CustomChart;
