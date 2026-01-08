import { useState } from "react";
import "../styles/SeasonCollapsableList.css";

const SeasonCollapsableList = ({ title, episodes }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="season">
      <button
        className={`season-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {title}
        <span className="arrow">{open ? "-" : "+"}</span>
      </button>

      {open && (
        <ul className="episodes-list">
          {episodes.map((episode) => (
            <li key={episode.id} className="episode-item">
              <img
                src={episode.thumbnail || "/images/episode-placeholder.jpg"}
                alt={episode.title}
              />

              <div className="episode-content">
                <h3>{episode.title}</h3>
                <p>{episode.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SeasonCollapsableList;
