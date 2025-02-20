import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css"; // Import CSS for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_wu90e5m", // Replace with your EmailJS Service ID
        "template_7y65nco", // Replace with your EmailJS Template ID
        formData,
        "4V0nWp6lnyS_yMfNb" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Email sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send email. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <div className="contact-form-container">
      <h2>Schreib mir eine Message</h2>
      <form onSubmit={handleSubmit} className="contact-form">
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
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
      <p className="status-message">{status}</p>
    </div>
  );
};

export default ContactForm;
