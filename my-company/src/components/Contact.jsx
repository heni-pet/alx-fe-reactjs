import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo we just show an alert / setSubmitted flag
    setSubmitted(true);
    alert('Form submitted! (demo)'); 
    // Optionally reset:
    setFormData({ name: '', email: '', message: '' });
  };

  const inputStyle = { display: 'block', width: '100%', maxWidth: '500px', margin: '8px 0', padding: '10px', borderRadius: '6px', border: '1px solid #ccccccff' };

  return (
    <div style={{ padding: '40px', flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
      <h1>Contact Us</h1>

      {submitted ? (
        <p style={{ color: 'green' }}>Thanks for reaching out — we will get back to you shortly!</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <input
            style={inputStyle}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            style={{ ...inputStyle, height: '140px', resize: 'vertical' }}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" style={{ padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', backgroundColor: '#0b3d91', color: 'white', border: 'none' }}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;
