import React from "react";
import "./form.css";

export default function Contact() {
  return (
    <form
      name="contact"
      method="post"
      action="/thankyou"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <p>
        <label>
          Name: <input type="text" name="name" className="formInput" required />
        </label>
      </p>
      <p>
        <label>
          Email:{" "}
          <input type="email" name="email" className="formInput" required />
        </label>
      </p>
      <p>
        <label>
          Message:{" "}
          <textarea
            name="message"
            className="formInput textareaFormInput"
            required
          ></textarea>
        </label>
      </p>
      <p>
        <button type="submit" className="formInput">
          Get in Touch
        </button>
      </p>
    </form>
  );
}
