import "../styles/EpisodesPage.css";
import UpsideDown from "../components/UpsideDown";
import Navbar from "../components/NavBar";
import SeasonCollapsableList from "../components/SeasonCollapsableList";
import { season1 } from "../assets/data/episodes/season1";

const EpisodesPage = () => (
  <div className="episodes-page">
    <UpsideDown />
    <Navbar />

    <div className="episodes-container">
      <SeasonCollapsableList
        title="Season 1"
        episodes={season1}
      />
    </div>
  </div>
);

export default EpisodesPage;
