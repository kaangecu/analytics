import React, { useContext, useState, useEffect } from "react";
import { AnalyticsContext } from "../../consts/index";
import DataTable from "../../components/DataTable/index";
import ErrorIndicator from "../../components/ErrorIndicator/index";

const NetworkItemsPage = () => {
  const [data, setData] = useState(null);

  const response = useContext(AnalyticsContext);

  useEffect(() => {
    response && setData(response);
  }, [response]);

  return (
    <div>
      {data && data.length !== 0 ? (
        <DataTable data={data} />
      ) : (
        <ErrorIndicator
          message={
            "We could not find data that is matching to your search parameters."
          }
        />
      )}
    </div>
  );
};

export default NetworkItemsPage;
