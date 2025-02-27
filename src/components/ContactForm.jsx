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
    "service_wu90e5m", // Your EmailJS Service ID
    "template_7y65nco", // Your EmailJS Template ID
    {
      from_name: formData.name,   // Sending name
      from_email: formData.email, // Sending email
      message: formData.message, // Sending message
    },
    "4V0nWp6lnyS_yMfNb" // Your EmailJS Public Key
  )
  .then(
    () => {
      setStatus("E-Mail erfolgreich gesendet!");
      setFormData({ name: "", email: "", message: "" });
    },
    (error) => {
      setStatus("E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es erneut.");
      console.error("EmailJS error:", error);
    }
  );

  };

  return (
    <div className="contact-form-container">
      <h2>Haben Sie Fragen? </h2>
      
      <h2></h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Ihr Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Ihre Email-Adresse"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Ihre Nachricht"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Senden</button>
        </div>
      </form>
      <p className="status-message">{status}</p>
    </div>
  );
};

export default ContactForm;
