import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Components/Layout/AppLayout.jsx";
import Home from "./Components/Home/Home.jsx";
import CurrentDigiTeam from "./Components/DigiTeam/CurrentDigiTeam.jsx";
import PastDigiTeam from "./Components/DigiTeam/PastDigiTeam.jsx";
import SeniorOfficials from "./Components/DigiTeam/SeniorOfficials.jsx";
import ClusterHead_DeputyHead from "./Components/DigiTeam/ClusterHead_DeputyHead.jsx";
import RegionChairPerson from "./Components/DigiTeam/RegionChairPerson.jsx";
import ZoneChairPerson from "./Components/DigiTeam/ZoneChairPerson.jsx";
import GlobalCausesTeam from "./Components/DigiTeam/GlobalCausesTeam.jsx";
import DigiProgramTeam from "./Components/DigiTeam/DigiProgramTeam.jsx";
import LeoDistrict from "./Components/DigiTeam/LeoDistrict.jsx";
import Clubs from "./Components/Club/Clubs.jsx";
import LeoClubs from "./Components/Club/LeoClubs.jsx";
import Resources from "./Components/Resources/Resources.jsx";
import Blog from "./Components/Home/Blog.jsx";
import PageNotFound from "./Components/PageNotFound/PageNotFound.jsx";
import "./App.css";
import LioAi from "./LionAi/LioAi.jsx";
import LionsAboutPage from "./Components/Home/AboutUs.jsx";
import GatTeam from "./Components/DigiTeam/GatTeam.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="currentDgTeam" element={<CurrentDigiTeam />} />
          <Route path="pastDgTeam" element={<PastDigiTeam />} />
          <Route path="seniorOfficers" element={<SeniorOfficials />} />
          <Route path="areaLeaders" element={<ClusterHead_DeputyHead />} />
          <Route path="regionChairPerson" element={<RegionChairPerson />} />
          <Route path="zoneChairPerson" element={<ZoneChairPerson />} />
          <Route path="globalCausesTeam" element={<GlobalCausesTeam />} />
          <Route path="dgProgramTeam" element={<DigiProgramTeam />} />
          <Route path="leoDistrict" element={<LeoDistrict />} />
          <Route path="clubs" element={<Clubs />} />
          <Route path="leoClubs" element={<LeoClubs />} />
          <Route path="resources" element={<Resources />} />
          <Route path="aboutUs" element={<LionsAboutPage/>}/>
          <Route path="gatTeam" element={<GatTeam/>}/>

          <Route path="blog" element={<Blog />} />
          <Route path="lio_ai" element={<LioAi />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
