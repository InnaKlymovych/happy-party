import { FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div
      style={{
        background: "var(--dark_grey_indigo)",
        color: "white",
        padding: "30px 20px",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <h2 style={{ marginBottom: "10px" }}>Happy Party 🎉</h2>

      {/* Text */}
      <p style={{ marginBottom: "20px" }}>
        Creating unforgettable moments for kids and families 💖
      </p>

      {/* Contacts */}
      <div style={{ marginBottom: "15px" }}>
        <p style={{ margin: "5px 0" }}>
          <FaPhoneAlt /> +1 (403) 383-2797
        </p>

        <p style={{ margin: "5px 0" }}>
          <FaEnvelope /> ilonamarchenko560@gmail.com
        </p>
      </div>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/happy_party_event_agency/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#E1306C",
          fontSize: "28px",
          display: "inline-block",
          marginBottom: "15px",
        }}
      >
        <FaInstagram />
      </a>

      {/* Bottom text */}
      <p style={{ fontSize: "12px", opacity: 0.7 }}>
        © {new Date().getFullYear()} Happy Party. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;