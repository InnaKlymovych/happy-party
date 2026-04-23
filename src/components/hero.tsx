import heroImg from "../assets/hero.jpg";
import { useNavigate } from "react-router-dom";
import price1 from "../assets/programs/mini-party.png";
import price2 from "../assets/programs/big-party.png";
import price3 from "../assets/programs/luxury-party.png";

function Hero() {

  const navigate = useNavigate();

  const packages = [
    { img: price1, alt: "Mini Party package", packageType: "Mini Party" },
    { img: price2, alt: "Big Party package" , packageType: "Big Party" },
    { img: price3, alt: "Luxury Party package" , packageType: "Luxury Party" },
  ];

  return (
    <div
      style={{
        backgroundColor: "var(--sky_blue)",
        paddingTop: "40px",
        textAlign: "center",
      }}
    >
      <img
        src={heroImg}
        alt="party"
        style={{
          width: "100%",
          maxWidth: "420px",
          height: "auto",
          aspectRatio: "1 / 1",
          borderRadius: "10px",
          objectFit: "cover",
          display: "block",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      />

      <div
        style={{
          backgroundColor: "var(--blue)",
          marginTop: "-70px",
          padding: "110px 30px 40px",
          borderTopLeftRadius: "140px",
          borderTopRightRadius: "140px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            color: "var(--light_blue)",
            margin: "0 0 20px",
            fontSize: "30px",
            lineHeight: "1.2",
          }}
        >
          About Us 🎉
        </h2>
        <div className="about-full">
          <p className="hero-about-text">
            We are a professional kids entertainment team creating unforgettable
            experiences for children and families.
          </p>

          <p className="hero-about-text">
            We organize a wide range of fun and engaging events — from birthday
            parties to holiday celebrations, themed events, and special occasions.
          </p>

          <p className="hero-about-text">
            Our programs include interactive games, your child’s favorite
            characters, creative activities, and high-energy entertainment that
            keeps kids smiling from start to finish.
          </p>

          <p className="hero-about-text">
            Our experienced team focuses on safety, quality, and attention to every
            detail — so you can relax and enjoy the moment while we take care of the
            magic.
          </p>

          <p className="hero-about-text">
            Our goal is simple — to create joyful memories your child will never
            forget 💖
          </p>
        </div>

        <div className="about-short">
          <p className="hero-about-text">
            We create fun and unforgettable parties for kids
          </p>

          <p className="hero-about-text">
            Games, favorite characters and exciting entertainment for any event.
          </p>

          <p className="hero-about-text">
            You enjoy the moment - we handle the magic 💖
          </p>
        </div>
      </div>

      <h2
        style={{
          fontSize: "28px",
          marginTop: "40px",
          color: "var(--dark_grey_indigo)",
        }}
      >
        Step 1: Choose Your Package
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          gap: "16px",
          flexWrap: "wrap",
          padding: "20px 16px 40px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {packages.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              navigate("/contact", { state: { packageType: item.packageType } })
            }
            style={{
              flex: "0 1 300px",
              maxWidth: "300px",
              minWidth: "220px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              objectFit: "contain",
              background: "#fff",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
          >
            <img
              src={item.img}
              alt={item.alt}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;