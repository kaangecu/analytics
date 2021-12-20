import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import PropTypes from "prop-types";

const CustomChart = ({ categories, data, name }) => {
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
    <div className="charts_main_div-item">
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

CustomChart.propTypes = {
  categories: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};
