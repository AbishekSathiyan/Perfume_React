import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./style.css"; // Import the CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_064phx6",
        "template_7utm1ap",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "snTHEuCIgnl90M1Jk"
      )
      .then((response) => {
        console.log("Message sent successfully", response);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send message", error);
        setStatus("Failed to send message. Try again!");
      });
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-card">
        <h2 className="contact-form-title">Contact Me</h2>

        {/* Status Message */}
        {status && (
          <p
            className={`status-message ${
              status.includes("failed") ? "status-fail" : "status-success"
            }`}
          >
            {status}
          </p>
        )}

        {/* Form */}
        <form onSubmit={sendEmail} className="contact-form">
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message Textarea */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="contact-form-button">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
