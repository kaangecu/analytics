import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/index";
import TopBar from "./components/TopBar/index";
import "./styles/main.scss";
import ChartsPage from "./pages/ChartsPage/index";
import NetworkItemsPage from "./pages/NetworkItemsPage/index";
import { AnalyticsContext } from "./consts/index";
import { getAllAnalytics } from "./api/analytics/index";

function App() {
  const [analytics, setAnalytics] = useState(null);
  const [searchedAnalytic, setSearchedAnalytic] = useState({})
  const [searchedDateTimes, setSearchedDateTimes] = useState({
    minDate:null,
    maxDate:null,
  })

  useEffect(() => {
    getAllAnalytics(searchedAnalytic,searchedDateTimes).then((result) => setAnalytics(result));
  }, [searchedAnalytic,searchedDateTimes]);

  return (
    <AnalyticsContext.Provider value={analytics}>
      <div className="fullheight">
        <Navbar />
        <div className="fullwidth">
          <TopBar setSearchedAnalytic={setSearchedAnalytic} setSearchedDateTimes={setSearchedDateTimes}/>
          <Routes>
            <Route path="/" element={<ChartsPage />} />
            <Route path="/network" element={<NetworkItemsPage />} />
          </Routes>
        </div>
      </div>
    </AnalyticsContext.Provider>
  );
}

export default App;
