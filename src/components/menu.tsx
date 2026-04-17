import { Link, useLocation, useNavigate } from "react-router-dom";
import "./menu.css";

function Menu() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/"); // go to home first
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100); // wait for page render
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="menu">
      <button onClick={() => scrollToSection("entertainers")}>
        ENTERTAINERS
      </button>

      <button onClick={() => scrollToSection("about")}>
        ABOUT
      </button>

      <button onClick={() => scrollToSection("activities")}>
        ACTIVITIES
      </button>

      <Link to="/contact" className="menu-link">
        BOOK NOW
      </Link>
    </div>
  );
}

export default Menu;