import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>
        Created by{" "}
        <a href="https://veljko.app" target="_blank" rel="noreferrer">
          Veljko
        </a>
      </p>
      <p className="disclaimer">
        This is a fan-made, non-commercial project. Stranger Things and all
        related content © Netflix.
      </p>
    </footer>
  );
};

export default Footer;
