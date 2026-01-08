import "../styles/EpisodesPage.css";
import UpsideDown from "../components/UpsideDown";
import Navbar from "../components/NavBar";
import SeasonCollapsableList from "../components/SeasonCollapsableList";
import { season1 } from "../assets/data/episodes/season1";
import { season2 } from "../assets/data/episodes/season2";
import { season3 } from "../assets/data/episodes/season3";
import { season4 } from "../assets/data/episodes/season4";
import { season5 } from "../assets/data/episodes/season5";

const EpisodesPage = () => (
  <div className="episodes-page">
    <UpsideDown />
    <Navbar />

    <div className="episodes-container">
      <SeasonCollapsableList title="Season 1" episodes={season1} />
      <SeasonCollapsableList title="Season 2" episodes={season2} />
      <SeasonCollapsableList title="Season 3" episodes={season3} />
      <SeasonCollapsableList title="Season 4" episodes={season4} />
      <SeasonCollapsableList title="Season 5" episodes={season5} />
    </div>
  </div>
);

export default EpisodesPage;
