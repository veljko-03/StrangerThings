import { heroes } from "../assets/data/heroes";
import "../styles/HeroesPage.css";
import Navbar from "../components/NavBar";
import UpsideDown from "../components/UpsideDown";

const HeroesPage = () => {
  return (
    <div className="heroes-page">
      <UpsideDown />
      <Navbar />

      <h1 className="heroes-title">Heroes</h1>

      <div className="heroes-grid">
        {heroes.map((hero, index) => (
          <div className="hero-card" key={index}>
            <img src={hero.img} alt={hero.name} />
            <div className="hero-info">
              <h2>{hero.name}</h2>
              <p>{hero.actor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroesPage;
