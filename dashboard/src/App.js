import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/index'
import "./styles/main.scss"
import ChartsPage from './pages/ChartsPage/index'
import NetworkItemsPage from './pages/NetworkItemsPage/index'

function App() {
  return (
    <div className="fullheight">
<Navbar/>
<Routes>
        <Route path="/" element={<ChartsPage />} />
        <Route path="/network" element={<NetworkItemsPage />} />
      </Routes>
    </div>
  );
}

export default App;
