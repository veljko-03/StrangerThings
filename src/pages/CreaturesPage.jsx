import "../styles/CreaturesPage.css";
import { creatures } from "../assets/data/creatures";
import UpsideDown from "../components/UpsideDown";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const CreaturesPage = () => (
  <>
    <div className="creatures-page">
      <UpsideDown />
      <Navbar />
      <section className="creatures-container">
        {creatures.map((creature) => (
          <div key={creature.name} className="creature-card">
            <img src={creature.img} alt={creature.name} />
            <h3>{creature.name}</h3>
          </div>
        ))}
      </section>
    </div>
    <Footer />
  </>
);

export default CreaturesPage;
