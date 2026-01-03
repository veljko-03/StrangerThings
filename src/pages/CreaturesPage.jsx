import "../styles/CreaturesPage.css";
import UpsideDown from "../components/UpsideDown";
import Navbar from "../components/NavBar";

const creatures = [
  {
    name: "Mind Flayer",
    img: "/images/mind-flayer.webp",
  },
  {
    name: "Vecna",
    img: "/images/vecna2.webp",
  },
  {
    name: "Demogorgon",
    img: "/images/demogorgon.webp",
  },
  {
    name: "Demodog",
    img: "/images/demodog.jpg",
  },
  {
    name: "Demobat",
    img: "/images/demobat.webp",
  },
];

const CreaturesPage = () => (
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
);

export default CreaturesPage;
