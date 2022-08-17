import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import DiscussedDetails from './components/discussed/DiscussedDetails';
import LatestDetails from './components/latest/LatestDetails';
import SelectedDetails from './components/selected/SelectedDetails';
import MostreadDetails from './components/mostread/MostreadDetails';
import Header from "./shared/Header";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path="news">
          <Route path="latest/:latestId" element={<LatestDetails />} />
          <Route path="mostread/:mostreadId" element={<MostreadDetails />} />
          <Route path="disscussed/:discussedId" element={<DiscussedDetails/>} />
          <Route path="selected/:selectedId" element={<SelectedDetails />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
