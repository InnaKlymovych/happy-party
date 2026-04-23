import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./menu.css";

function Menu() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setOpen(false); // close menu on click

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="menu-wrapper">
      
      {/* MOBILE BUTTON */}
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* MENU */}
      <div className={`menu ${open ? "open" : ""}`}>
        <Link to="/gallery" className="menu-link">
          GALLERY
        </Link>

        <button onClick={() => scrollToSection("about")}>
          ABOUT
        </button>

        <button onClick={() => scrollToSection("activities")}>
          ACTIVITIES
        </button>

        <Link
          to="/contact"
          className="menu-link"
          onClick={() => setOpen(false)}
        >
          BOOK NOW
        </Link>
      </div>
    </div>
  );
}

export default Menu;