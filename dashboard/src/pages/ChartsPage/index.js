import React, { useContext, useState, useEffect } from "react";
import { AnalyticsContext } from "../../consts/index";
import CustomChart from "../../components/CustomChart/index";
import ErrorIndicator from "../../components/ErrorIndicator/index";
import { DateTime } from "luxon";

const ChartsPage = () => {
  const [chartData, setChartData] = useState({
    collectedAt: [],
    domLoad: [],
    fcp: [],
    ttfb: [],
    windowLoad: [],
  });
  const response = useContext(AnalyticsContext);

  // console.log(response)

  useEffect(() => {
    const newChartData = {
      collectedAt: [],
      domLoad:  [],
      fcp: [],
      ttfb:  [],
      windowLoad:  [],
    }
    response?.forEach((analytic) => {
      newChartData.collectedAt.push(DateTime.fromISO(analytic?.collectedAt).toLocaleString(DateTime.DATETIME_SHORT))
      newChartData.domLoad.push(analytic?.domLoad)
      newChartData.fcp.push(analytic?.fcp)
      newChartData.ttfb.push(analytic?.ttfb)
      newChartData.windowLoad.push(analytic?.windowLoad)
    });
    setChartData(newChartData)
  }, [response]);

  const chartsDiv = (
    <div className="charts_main_div">
      <CustomChart
        categories={chartData.collectedAt}
        data={chartData.domLoad}
        name={"domLoad"}
        className={"charts_main_div-item"}
      />
      <CustomChart
        categories={chartData.collectedAt}
        data={chartData.fcp}
        name={"fcp"}
        className={"charts_main_div-item"}
      />
      <CustomChart
        categories={chartData.collectedAt}
        data={chartData.ttfb}
        name={"ttfb"}
        className={"charts_main_div-item"}
      />
      <CustomChart
        categories={chartData.collectedAt}
        data={chartData.windowLoad}
        name={"windowLoad"}
        className={"charts_main_div-item"}
      />
    </div>
  );

  return (
    <div>
      {chartData.collectedAt.length !== 0 ? chartsDiv : <ErrorIndicator message={"We could not find data that is matching to your search parameters."}/>}
    </div>
  );
};

export default ChartsPage;
