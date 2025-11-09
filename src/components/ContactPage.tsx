import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const PREDEFINED_MESSAGES = [
  "Hello, I came across your portfolio and was very impressed with your work, particularly the 'mongo-aggregate' project. I'd love to connect and discuss a potential opportunity at my company.",
  "Hi Lalit, your experience in Full Stack Development with Laravel and React is highly relevant to a role we have open. Are you available for a brief chat this week to discuss it further?",
  "Great work on your portfolio! As a fellow developer, I found your projects insightful. I'd like to connect and discuss technology and potential collaborations.",
  "Hi, I'm a recruiter and your profile looks like an excellent fit for a Full Stack Engineer position I'm currently sourcing for. Please let me know if you're open to exploring new opportunities.",
  "Your portfolio is very well-structured. I'd be interested to learn more about your work on the multi-tenant data sync engine you mentioned in your experience.",
  "Hello Lalit, I manage a team of engineers and am always looking for talented developers like yourself. Would you be open to a discussion about your career goals?",
  "I was impressed by the ETL pipeline you developed. We're working on similar data challenges and I'd love to hear your insights. Let's connect.",
  "Your background in both PHP/Laravel and the React ecosystem is a powerful combination. We are hiring for a senior role that requires exactly this skill set.",
];

export const ContactPage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [lastMessageIndex, setLastMessageIndex] = useState<number | null>(null);

  // Kept your static "YOUR_FORM_ID" as requested
  const [state, handleSubmit] = useForm("mgvpgdob");

  const handleGenerateRandomMessage = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * PREDEFINED_MESSAGES.length);
    } while (
      PREDEFINED_MESSAGES.length > 1 &&
      randomIndex === lastMessageIndex
    );

    setLastMessageIndex(randomIndex);
    setMessage(PREDEFINED_MESSAGES[randomIndex]);
  };

  return (
    <div className="contact-page-container flex-1 overflow-auto">
      <div className="contact-page-left">
        <h1>Let's Connect</h1>
        <p className="contact-intro">
          I am currently open to new career opportunities and welcome inquiries
          from recruiters and hiring managers. If my skills and experience align
          with a position you're looking to fill, I'd be very interested in
          hearing from you. For fellow developers, I'm always up for a technical
          chat or discussing potential collaborations. The best ways to reach me
          are through the form on this page or the links below.
        </p>
        <ul className="contact-list">
          <li>
            <i className="fa-solid fa-envelope"></i>
            <a
              href="mailto:lalittambe963@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              lalittambe963@gmail.com
            </a>
          </li>
          <li>
            <i className="fa-brands fa-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/lalittambe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/lalittambe
            </a>
          </li>
          <li>
            <i className="fa-brands fa-github"></i>
            <a
              href="https://github.com/lalit-tambe"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/lalit-tambe
            </a>
          </li>
        </ul>
      </div>

      <div className="contact-page-right">
        {state.succeeded ? (
          // This new wrapper will center the success message vertically
          <div className="flex flex-col justify-center h-full">
            <div className="form-success-message">
              <h3>Thank you!</h3>
              <p>Your message has been sent. I'll get back to you shortly.</p>
            </div>
          </div>
        ) : (
          // This form will render normally (at the top)
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                required
                disabled={state.submitting}
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="form-error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                required
                disabled={state.submitting}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="form-error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                <span>Message</span>
                <button
                  type="button"
                  onClick={handleGenerateRandomMessage}
                  className="generate-random-button"
                  disabled={state.submitting}
                >
                  <i className="codicon codicon-sparkle mr-1"></i>
                  Generate Random
                </button>
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-textarea"
                required
                disabled={state.submitting}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="form-error-message"
              />
            </div>
            <button
              type="submit"
              className="submit-button"
              disabled={state.submitting}
            >
              {state.submitting && <div className="spinner"></div>}
              <span>{state.submitting ? "Sending..." : "Send Message"}</span>
            </button>
            <ValidationError
              errors={state.errors}
              className="form-error-message"
            />
          </form>
        )}
      </div>
    </div>
  );
};
