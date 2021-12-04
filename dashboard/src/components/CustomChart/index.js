import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const CustomChart = ({ categories, data, name,className }) => {
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
    })
  }, [categories, data, name])
  // const [deneme, setDeneme] = useState({
  //   tasks: {
  //     daily: [],
  //     weekly: {
  //       name:"Kaan",
  //       done: [],
  //     },
  //   },
  // });

  // const denemeData = [
  //   {
  //     daily:"1",
  //     done:"11",
  //   },
  //   {
  //     daily:"2",
  //     done:"22",
  //   },
  //   {
  //     daily:"3",
  //     done:"33",
  //   },
  // ]

  // const fonksiyon = () =>   {
  //   denemeData.forEach((item)=>setDeneme(...deneme,{tasks:{...deneme.tasks,weekly:{...deneme.tasks.weekly,done:[item.done]}}}))
  // }

  // fonksiyon()

  // console.log(deneme)

  // useEffect(() => {
  //   chartState.options.xaxis.categories = categories
  //   // setChartState({...chartState,options.xaxis.categories:categories,data:data,name:name})
  // }, [])

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
