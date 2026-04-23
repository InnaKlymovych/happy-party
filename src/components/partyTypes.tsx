import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import type1 from '../assets/programs/type1.png';
import type2 from '../assets/programs/type2.png';
import type3 from '../assets/programs/type3.png';
import type4 from '../assets/programs/type4.png';
import type5 from '../assets/programs/type5.png';

function PartyTypes() {
  const partyImages = [type1, type2, type3, type4, type5];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -340 : 340,
      behavior: 'smooth',
    });
  };

  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px 20px' }}>
      <h2
        style={{
          fontSize: '28px',
          marginBottom: '25px',
          textAlign: 'center',
          color: 'var(--dark_grey_indigo)',
        }}
      >
        Step 2: Choose Your Theme
      </h2>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        
        {/* LEFT BUTTON */}
        <button
  onClick={() => scroll('left')}
  style={{
    position: 'absolute',
    left: '-10px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    border: 'none',
    background: 'white',
    boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    fontSize: '20px',
    transition: 'all 0.2s ease',
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
    e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.2)';
  }}
  onMouseDown={(e) => {
    e.currentTarget.style.transform = 'translateY(-50%) scale(0.9)';
  }}
  onMouseUp={(e) => {
    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
  }}
>
  ←
</button>
        {/* RIGHT BUTTON */}
        <button
  onClick={() => scroll('right')}
  style={{
    position: 'absolute',
    right: '-10px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    border: 'none',
    background: 'white',
    boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    fontSize: '20px',
    transition: 'all 0.2s ease',
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
    e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.2)';
  }}
  onMouseDown={(e) => {
    e.currentTarget.style.transform = 'translateY(-50%) scale(0.9)';
  }}
  onMouseUp={(e) => {
    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
  }}
>
  →
</button>

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          className="scroll-container"
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '20px',
            padding: '10px 10px 20px',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {partyImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              style={{
                width: '320px',
                minWidth: '320px',
                flex: '0 0 320px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                scrollSnapAlign: 'start',
                cursor: 'pointer',
                padding: '10px',
                backgroundColor: '#fff',
              }}
            >
              <img
                src={img}
                alt="party theme"
                style={{
                  width: '100%',
                  height: '260px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
              />
            </div>
          ))}
        </div>
      </div>
{/* BUTTON */}
<div style={{ textAlign: "center", marginTop: "25px" }}>
  <button
    onClick={() => navigate("/contact")}
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
    ✨ Book Now
  </button>
</div>


      {/* MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative' }}>
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: 'none',
                background: 'white',
                cursor: 'pointer',
              }}
            >
              ×
            </button>

            <img
              src={selectedImage}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '16px',
              }}
            />
          </div>
        </div>
        
        
      )}

    </div>
  );
}

export default PartyTypes;