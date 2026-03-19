import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-subtitle">
        Feel free to reach out to me for any questions or opportunities!
      </p>

      <div className="contact-card">
        <h3 className="contact-card-title">
          Email Me <span className="contact-emoji">🚀</span>
        </h3>

        <form
          className="contact-form"
          action="mailto:prathamesh@example.com"
          method="POST"
          encType="text/plain"
        >
          <input
            type="email"
            name="email"
            className="contact-input"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="name"
            className="contact-input"
            placeholder="Your Name"
            required
          />

          <textarea
            name="message"
            className="contact-textarea"
            placeholder="Message"
            rows={5}
            required
          />

          <button type="submit" className="contact-button">
            <span>Send Mail</span>
            <span className="contact-button-icon">🚀</span>
          </button>
        </form>
      </div>
    </section>
  );
}
