import { api_url, client } from "../consts";

export const getAllAnalytics = async (searchedAnalytic,searchedDateTimes) => {
  let params = new URLSearchParams();
  searchedAnalytic && params.append("websiteUrl", searchedAnalytic);
  searchedDateTimes.minDate && params.append("minDate", searchedDateTimes.minDate);
  searchedDateTimes.maxDate && params.append("maxDate", searchedDateTimes.maxDate);

  const response = await client(api_url).get("/analytics", { params });
  
  return  response?.data;
};

export const getAllAnalyticsWebsiteUrls = async () => {

  const response = await client(api_url).get("/analytics/websiteUrls");
  
  return  response?.data;
};
