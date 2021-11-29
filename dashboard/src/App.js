import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/index";
import "./styles/main.scss";
import ChartsPage from "./pages/ChartsPage/index";
import NetworkItemsPage from "./pages/NetworkItemsPage/index";
import {AnalyticsContext} from './consts/index'
import {getAllAnalytics} from './api/analytics/index'


function App() {



  return (
    <AnalyticsContext.Provider value={getAllAnalytics()}>
    <div className="fullheight">
      <Navbar />
      <Routes>
        <Route path="/" element={<ChartsPage />} />
        <Route path="/network" element={<NetworkItemsPage />} />
      </Routes>
    </div>
    </AnalyticsContext.Provider>
  );
}

export default App;
