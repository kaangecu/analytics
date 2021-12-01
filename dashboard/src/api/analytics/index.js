import { api_url, client } from "../consts";

export const getAllAnalytics = async () => {

  const response = await client(api_url).get("/analytics");
  
  return  response?.data;
};
