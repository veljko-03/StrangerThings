import "../styles/CreaturesPage.css";
import UpsideDown from "../components/UpsideDown";
import Navbar from "../components/NavBar";

const CreaturesPage = () => (
  <div className="creatures">
    <UpsideDown />
    <Navbar />
    <div className="container">
      <h1 className="title">Creatures</h1>
    </div>
  </div>
);

export default CreaturesPage;
