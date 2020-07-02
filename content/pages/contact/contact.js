import React from "react";

export default function Contact() {
  const labelStyle = { fontSize: "1.25rem" };
  const formInputStyle = {
    width: "100%",
    padding: "10px 15px",
    border: "2px solid #696969",
    borderRadius: "4px",
  };
  const textAreaStyle = {
    height: "6em",
  };
  const buttonStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
  };
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
        <label style={labelStyle}>
          Name:{" "}
          <input
            type="text"
            name="name"
            className="formInput"
            style={formInputStyle}
            required
          />
        </label>
      </p>
      <p>
        <label style={labelStyle}>
          Email:{" "}
          <input
            type="email"
            name="email"
            className="formInput"
            style={formInputStyle}
            required
          />
        </label>
      </p>
      <p>
        <label style={labelStyle}>
          Message:{" "}
          <textarea
            name="message"
            className="formInput textareaFormInput"
            style={{ ...formInputStyle, ...textAreaStyle }}
            required
          ></textarea>
        </label>
      </p>
      <p>
        <button
          type="submit"
          className="formInput"
          style={{ ...formInputStyle, ...buttonStyle }}
        >
          Get in Touch
        </button>
      </p>
    </form>
  );
}
