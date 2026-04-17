import heroImg from '../assets/hero.jpg';
import price from '..//assets/programs/CE450B7B-CCA0-4B7A-881E-35765B555FC9.png';

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


      </div>

      <h2 style={{
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