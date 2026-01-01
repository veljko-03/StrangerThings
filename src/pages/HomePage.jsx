import UpsideDown from "../components/UpsideDown";
import Navbar from "../components/NavBar";
import "../styles/HomePage.css";

const HomePage = () => (
  <div className="home">
    <UpsideDown />
    <Navbar />

    <div className="home-center">
      <h1 className="home-title">Welcome to Upside Down</h1>
      <p className="home-description">
        The world upside down from Hawkins is filled with strange creatures and
        is a place that our heroes have to venture to in order to defeat our
        enemies and save the world.
      </p>
    </div>
  </div>
);

export default HomePage;
