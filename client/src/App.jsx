import { BrowserRouter, Route, Routes } from "react-router-dom";

import { initialiseMetamask } from "./hooks/metamask";

import Login from "./components/Pages/Login.jsx";
import DashBoard from "./components/Pages/DashBoard.jsx";
import Profile from "./components/Pages/Profile.jsx";
import SpeculatorPage from "./components/Pages/SpeculatorPage.jsx";
import Originator from "./components/Pages/Originator.jsx";
import CommunityCoach from "./components/Pages/Community.jsx";
import BuyPage from "./components/Pages/buy.jsx";

await initialiseMetamask();

function App() {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", function (accounts) {
      let account = accounts[0];
      if (!account) {
        window.location.href = "/";
      } else {
        window.location.href = "/dashboard";
      }
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboard/SpeculatorPage" element={<SpeculatorPage />} />
        <Route path="/profile" element={<Profile />}>
          <Route path=":params" element={<Profile />} />
        </Route>
        <Route path="/dashboard/OriginatorPage" element={<Originator />} />
        <Route path="/dashboard/CommunityCoach" element={<CommunityCoach />} />
        <Route path="/dashboard/buy" element={<BuyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
