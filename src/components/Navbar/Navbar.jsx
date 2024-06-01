import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="navbar">
      <Link to="/" className="links-navbar" onClick={scrollTop}>
        <p>Profil</p>
      </Link>
      <Link to="/Projets" className="links-navbar" onClick={scrollTop}>
        <p>Projets</p>
      </Link>
      <Link to="/Competences" className="links-navbar" onClick={scrollTop}>
        <p>Compétences</p>
      </Link>
    </div>
  );
}

export default Navbar;
