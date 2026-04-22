import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import back from "../assets/back.jpg";
import { FaInstagram } from "react-icons/fa";


function Contacts() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    packageType: "",
    location: "",
    age: "",
    theme: "",
    date: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        "service_opig0zy",
        "template_k71kn66",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          location: form.location,
          age: form.age,
          packageType: form.packageType,
          theme: form.theme,
          date: form.date,
          message: form.message,
        },
        {
          publicKey: "XMh9miRLTLSWb5E6",
        }
      );

      alert("Your booking request has been sent!");

      setForm({
        name: "",
        email: "",
        phone: "",
        packageType: "",
        location: "",
        age: "",
        theme: "",
        date: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Sorry, something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px 16px 90px",
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            marginBottom: "16px",
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

        <div
          style={{
            background: "linear-gradient(135deg, #fff0f6, #e6f7ff)",
            borderRadius: "24px",
            padding: "24px 18px",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.08), 0 0 20px rgba(255, 126, 179, 0.3)",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              textAlign: "center",
              color: "var(--dark_grey_indigo)",
              marginBottom: "10px",
            }}
          >
            Step 3 - Contact Us to Book
          </h2>

          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              color: "var(--dark_grey)",
              marginBottom: "30px",
              lineHeight: "1.5",
            }}
          >
            Ready to book your perfect party? Fill out the form below and we will
            contact you soon 🎉
          </p>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <select
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              style={inputStyle}
            >
              <option value="">Select Location</option>
              <option value="Calgary">Calgary</option>
              <option value="Red Deer">Red Deer</option>
              <option value="Edmonton">Edmonton</option>
            </select>

            <input
              type="number"
              name="age"
              placeholder="Child Age"
              value={form.age}
              onChange={handleChange}
              min="1"
              max="15"
              required
              style={inputStyle}
            />

            <select
              name="packageType"
              value={form.packageType}
              onChange={handleChange}
              required
              style={inputStyle}
            >
              <option value="">Choose Package</option>
              <option value="Mini Party">Mini Party</option>
              <option value="Big Party">Big Party</option>
              <option value="Luxury Party">Luxury Party</option>
            </select>

            <input
              type="text"
              name="theme"
              placeholder="Chosen Theme"
              value={form.theme}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Tell us about your party..."
              value={form.message}
              onChange={handleChange}
              rows={5}
              style={{
                ...inputStyle,
                resize: "vertical",
                minHeight: "120px",
              }}
            />

            <button
              type="submit"
              disabled={isSending}
              style={{
                ...submitButtonStyle,
                opacity: isSending ? 0.7 : 1,
              }}
            >
              {isSending ? "Sending..." : "✨ Send Booking Request"}
            </button>
          </form>

          <div
            style={{
              marginTop: "30px",
              textAlign: "center",
              color: "var(--dark_grey)",
              lineHeight: "1.8",
            }}
          >
            <p style={{ margin: 0 }}>📞 +1 (403) 383-2797</p>
            <p style={{ margin: 0 }}>✉️ ilonamarchenko560@gmail.com</p>
<a
  href="https://www.instagram.com/happy_party_event_agency/"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    fontSize: "28px",
    color: "#E1306C",
    cursor: "pointer",
    transition: "0.3s",
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.2)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
  <FaInstagram />
</a>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "14px",
  border: "2px solid #e0e0e0",
  fontSize: "16px",
  outline: "none",
  background: "#ffffffcc",
  boxSizing: "border-box",
};

const submitButtonStyle: React.CSSProperties = {
  width: "100%",
  padding: "16px 20px",
  borderRadius: "30px",
  border: "none",
  background: "linear-gradient(45deg, #ff7eb3, #ffd93d, #65d6ff)",
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  transition: "transform 0.2s ease",
  marginTop: "8px",
};

const backButtonStyle: React.CSSProperties = {
  padding: "10px 20px",
  borderRadius: "25px",
  border: "none",
  background: "white",
  cursor: "pointer",
  fontWeight: "bold",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
};

export default Contacts;