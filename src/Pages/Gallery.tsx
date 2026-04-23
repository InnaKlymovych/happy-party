import { useState } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/gallery_img/IMG_0579.jpg";
import img2 from "../assets/gallery_img/IMG_0585.jpg";
import img3 from "../assets/gallery_img/IMG_8738.jpg";
import img4 from "../assets/gallery_img/IMG_0586.jpg";
import img5 from "../assets/gallery_img/IMG_4960.jpg";
import img6 from "../assets/gallery_img/DSC_6264.jpg";

function Gallery() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px 16px 60px",
        background: "linear-gradient(180deg, #fff, #f9f0ff)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            marginBottom: "20px",
            position: "sticky",
            top: "10px",
            zIndex: 20,
          }}
        >
          <button
            onClick={() => navigate("/")}
            type="button"
            style={backButtonStyle}
          >
            ← Back
          </button>
        </div>

        <h1
          style={{
            fontSize: "32px",
            color: "var(--dark_grey_indigo)",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Our Gallery 🎉
        </h1>

        <p
          style={{
            marginBottom: "30px",
            textAlign: "center",
            color: "var(--dark_grey)",
          }}
        >
          Real parties, real smiles, unforgettable memories 💖
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                cursor: "pointer",
                background: "#fff",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
              }}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.82)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1100px",
              maxHeight: "90vh",
            }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              type="button"
              style={closeButtonStyle}
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="Gallery preview"
              style={{
                maxWidth: "100%",
                maxHeight: "90vh",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: "18px",
                display: "block",
                margin: "0 auto",
                boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const backButtonStyle: React.CSSProperties = {
  padding: "10px 20px",
  borderRadius: "25px",
  border: "none",
  background: "white",
  cursor: "pointer",
  fontWeight: "bold",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
};

const closeButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "10px",
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  border: "none",
  background: "white",
  fontSize: "24px",
  cursor: "pointer",
  zIndex: 2,
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
};

export default Gallery;