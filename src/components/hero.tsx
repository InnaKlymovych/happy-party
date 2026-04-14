import heroImg from '../assets/hero.jpg';

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
      {/* IMAGE */}
      <img
        src={heroImg}
        alt="party"
        style={{
          width: "320px",
          borderRadius: "50%",
          height: "320px",
          objectFit: "cover",
          display: "block",
            margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      />

      {/* WHITE CURVE BLOCK */}
      <div
        style={{
          backgroundColor: "var(--blue)",
          marginTop: "-70px",
          padding: "110px 30px 40px",
          borderTopLeftRadius: "140px",
          borderTopRightRadius: "140px",
          position: "relative",
          zIndex: "1",
        }}
      >
        {/* ENGLISH */}
        <h2
          style={{
            color: "var(--light_blue)",
            fontFamily: "Arturo",
             margin: "0 0 20px",
            fontSize: "26px",
            lineHeight: "1.2",
          }}
        >
          Happy Party is always a celebration with soul,
          heart, and love for you ❤️
        </h2>

        {/* UKRAINIAN */}
        <p
          style={{
            margin: 0,
            fontFamily: "Montserrat",
            fontSize: "18px",
            lineHeight: "1.3",
            color: "var(--dark_grey_indigo)",
            fontWeight: 600,
          }}
        >
          Happy Party - це завжди свято з душею та любов'ю до вас
        </p>
      </div>
    </div>
  );
}

export default Hero;