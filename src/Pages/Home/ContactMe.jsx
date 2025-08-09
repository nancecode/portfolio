import { useRef } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_25bhqod",
        "template_7q40sd8",
        form.current,
        "1i_z42LBGuIw3jygc"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div>
        <p className="sub-title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Drop me a message, let's turn your ideas into reality!
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact-form-container">
        <div className="container">
          <label className="contact-label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="first_name"
              required
            />
          </label>
          <label className="contact-label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="last_name"
              required
            />
          </label>
          <label className="contact-label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact-input text-md"
              name="phone_number"
              required
            />
          </label>
          <label className="contact-label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact-input text-md"
              name="user_email"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact-label">
          <span className="text-md">Choose a service</span>
          <select id="choose-topic" className="contact-input text-md">
            <option>Select One...</option>
            <option>Branding</option>
            <option>Web Design</option>
            <option>Web Development</option>
          </select>
        </label>
        <label className="contact-label">
          <span className="text-md">Message</span>
          <textarea
            className="contact-input text-md"
            name="message"
            rows="8"
            required
          />
        </label>
        <label className="checkbox-label">
          <input type="checkbox" required name="checkbox" />
          <span className="text-small">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact-form-btn" type="submit">
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
