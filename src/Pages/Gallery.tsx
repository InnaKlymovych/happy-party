import img1 from "../assets/gallery_img/IMG_0579.jpg";
import img2 from "../assets/gallery_img/IMG_0585.jpg";
import img3 from "../assets/gallery_img/IMG_8738.jpg";
import img4 from "../assets/gallery_img/IMG_0586.jpg";
import img5 from "../assets/gallery_img/IMG_4960.jpg";
import img6 from "../assets/gallery_img/DSC_6264.jpg";

function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div
      style={{
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          color: "var(--dark_grey_indigo)",
          marginBottom: "10px",
        }}
      >
        Our Gallery 🎉
      </h1>

      <p style={{ marginBottom: "30px" }}>
        Real parties, real smiles, unforgettable memories 💖
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src={img}
              alt={`Gallery ${index}`}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;