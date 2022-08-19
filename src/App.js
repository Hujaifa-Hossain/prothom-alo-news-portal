import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./shared/Header";
import LatestDetails from "./components/latest/LatestDetails";
import MostreadDetails from "./components/mostread/MostreadDetails";
import DiscussedDetails from "./components/discussed/DiscussedDetails";
import SelectedDetails from "./components/selected/SelectedDetails";
import Footer from "./shared/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="news">
          <Route path="latest/:latestId" element={<LatestDetails />} />
          <Route path="mostread/:mostreadId" element={<MostreadDetails />} />
          <Route path="discussed/:discussedId" element={<DiscussedDetails />} />
          <Route path="selected/:selectedId" element={<SelectedDetails />} />
        </Route>
      </Routes>
      
      <Footer/>
    </>
  );
}

export default App;
