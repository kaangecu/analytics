import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { getAllAnalyticsWebsiteUrls } from "../../api/analytics/index";

const CustomDropdown = ({ setSearchedAnalytic }) => {
  const [urls, setUrls] = useState([]);
  const [selectedUrl, setSelectedUrl] = useState("");

  useEffect(() => {
    getAllAnalyticsWebsiteUrls().then((res) => setUrls(res));
  }, []);

  const handleChange = (event) => {
    setSelectedUrl(event.target.value);
    setSearchedAnalytic(urls[event.target.value]);
  };

  return (
    <div>
      <InputLabel id="demo-simple-select-label">Pick Website Url</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedUrl}
        label="pickWebsiteUrl"
        onChange={handleChange}
        style={{ minWidth: "100%" }}
      >
        {urls.map((url, index) => (
          <MenuItem key={index} value={index}>{url}</MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default CustomDropdown;
