import heroImg from "../assets/hero.jpg";
import price from "../assets/programs/CE450B7B-CCA0-4B7A-881E-35765B555FC9.png";

function Hero() {
  return (
    <div
      style={{
        fontFamily: "Arturo",
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
            fontFamily: "Arturo",
            margin: "0 0 20px",
            fontSize: "30px",
            lineHeight: "1.2",
          }}
        >
          About Us 🎉
        </h2>

        {/* Desktop version */}
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

        {/* Mobile version */}
        <div className="about-short">
          <p className="hero-about-text">
            We create fun and unforgettable parties for kids 
          </p>

          <p className="hero-about-text">
            Games, favorite characters, and exciting entertainment for any event.
          </p>

          <p className="hero-about-text">
            You enjoy the moment — we handle the magic 💖
          </p>
        </div>
      </div>

      <h2
        style={{
          fontFamily: "Arturo",
          fontSize: "28px",
          marginTop: "40px",
          color: "var(--dark_grey_indigo)",
        }}
      >
        Step 1: Choose Your Package
      </h2>

      <img
        src={price}
        alt="price packages"
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "40px auto",
          display: "block",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      />
    </div>
  );
}

export default Hero;