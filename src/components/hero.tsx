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

      <h2 style={{
    fontFamily: "Arturo",
    fontSize: "28px",
    marginTop: "40px",
    color: "var(--dark_grey_indigo)",
    }}
    >
    Our Packages
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
<button
  style={{
    marginTop: "25px",
    padding: "14px 30px",
    fontSize: "18px",
    fontWeight: "bold",
    borderRadius: "30px",
    border: "none",
    background: "linear-gradient(45deg, #ff7eb3, #65d6ff)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.08)";
    e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.3)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
  }}
  onMouseDown={(e) => {
    e.currentTarget.style.transform = "scale(0.95)";
  }}
  onMouseUp={(e) => {
    e.currentTarget.style.transform = "scale(1.08)";
  }}
>
  🎉 Book Your Party
</button>
    </div>
  );
}

export default Hero;