import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Booking form data:", form);
    alert("Your request has been sent!");

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
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px 20px",
        background: "#f8f8f8",
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
            marginBottom: "20px",
          }}
        >
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "10px 20px",
              borderRadius: "25px",
              border: "none",
              background: "linear-gradient(45deg, #ccc, #eee)",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            ← Back
          </button>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "35px 25px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              fontFamily: "Arturo",
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
              style={submitButtonStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              ✨ Send Booking Request
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
            <p style={{ margin: 0 }}>✉️ your@email.com</p>
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
  border: "1px solid #d9d9d9",
  fontSize: "16px",
  outline: "none",
  background: "#fff",
  boxSizing: "border-box",
};

const submitButtonStyle: React.CSSProperties = {
  padding: "14px 28px",
  borderRadius: "30px",
  border: "none",
  background: "linear-gradient(45deg, #ff7eb3, #65d6ff)",
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  transition: "transform 0.2s ease",
};

export default Contacts;