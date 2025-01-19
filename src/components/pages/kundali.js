import React, { useState } from "react";
import "./kundali.css";

const KundaliGenerator = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    place: "",
    gender: "",
    timezone: "",
  });
  const [svgFiles, setSvgFiles] = useState({ svg1: null, svg2: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSvgFiles({ svg1: null, svg2: null });

    try {
      const response = await fetch("https://atmaveda-backend.onrender.com/api/generate-kundali", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch SVG files. Please try again.");
      }

      const data = await response.json();
      setSvgFiles({ svg1: data.svg1, svg2: data.svg2 }); // Assuming the backend sends `svg1` and `svg2` in JSON
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="kundali-container">
      <h1>Kundali Generator</h1>
      <form className="kundali-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date of Birth</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time of Birth</label>
          <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="place">Place of Birth</label>
          <input type="text" id="place" name="place" value={formData.place} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="timezone">Timezone</label>
          <input type="number" id="timezone" name="timezone" value={formData.timezone} onChange={handleChange} step="0.1" required />
        </div>
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Generating..." : "Generate Kundali"}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {svgFiles.svg1 && svgFiles.svg2 && (
        <div className="svg-container">
          <h2>Your Kundali</h2>
          <div className="svg-wrapper">
            <div dangerouslySetInnerHTML={{ __html: svgFiles.svg1 }} />
            <div dangerouslySetInnerHTML={{ __html: svgFiles.svg2 }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default KundaliGenerator;