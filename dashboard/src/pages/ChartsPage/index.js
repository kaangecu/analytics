import React, { useContext, useState, useEffect } from "react";
import { AnalyticsContext } from "../../consts/index";
import CustomChart from "../../components/CustomChart/index";
import { DateTime } from "luxon";

const ChartsPage = () => {
  const [analytics, setAnalytics] = useState(null);
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
    response?.forEach((analytic) => {
      setChartData((previousState) => ({
        ...previousState,
        collectedAt: [...previousState?.collectedAt, DateTime.fromISO(analytic?.collectedAt).toLocaleString(DateTime.DATETIME_SHORT) ],
        domLoad: [...previousState?.domLoad, analytic?.domLoad],
        fcp: [...previousState?.fcp, analytic?.fcp],
        ttfb: [...previousState?.ttfb, analytic?.ttfb],
        windowLoad: [...previousState?.windowLoad, analytic?.windowLoad],
      }));
    });
  }, [response, analytics]);

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
      <h1>ChartsPage</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          console.log(analytics);
        }}
      >
        Log Analytics
      </button>
      {console.log(chartData)}

      {chartData.collectedAt.length !== 0 && chartsDiv}
    </div>
  );
};

export default ChartsPage;
