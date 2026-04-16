import { useRef } from 'react';
import type1 from '../assets/programs/type1.png';
import type2 from '../assets/programs/type2.png';
import type3 from '../assets/programs/type3.png';
import type4 from '../assets/programs/type4.png';
import type5 from '../assets/programs/type5.png';

function PartyTypes() {
  const partyImages = [type1, type2, type3, type4, type5];
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -340,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 340,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ padding: "40px 20px" }}>
      <h2
        style={{
          fontFamily: "Arturo",
          fontSize: "28px",
          marginBottom: "25px",
          textAlign: "center",
          color: "var(--dark_grey_indigo)",
        }}
      >
        Party Themes
      </h2>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <button
            onClick={scrollLeft}
            style={{
              padding: "10px 16px",
              borderRadius: "50%",
              border: "none",
              background: "var(--light_blue)",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            ←
          </button>

          <button
            onClick={scrollRight}
            style={{
              padding: "10px 16px",
              borderRadius: "50%",
              border: "none",
              background: "var(--light_blue)",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            →
          </button>
        </div>

        <div
          ref={scrollRef}
          className="scroll-container"
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "20px",
            padding: "10px 10px 20px",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {partyImages.map((img, index) => (
            <div
              key={index}
              style={{
                width: "320px",
                minWidth: "320px",
                flex: "0 0 320px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                scrollSnapAlign: "start",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                padding: "10px",
                backgroundColor: "#fff",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <img
                src={img}
                alt="party theme"
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "12px",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "25px" }}>
        <button
          style={{
            padding: "12px 25px",
            borderRadius: "25px",
            border: "none",
            background: "linear-gradient(45deg, #ff7eb3, #65d6ff)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          ✨ Choose Your Party
        </button>
      </div>
    </div>
  );
}

export default PartyTypes;