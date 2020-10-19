import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userMessage, setUserMessage] = useState();

  const template_params = {
    userName,
    userEmail,
    message: userMessage,
  };

  const onChangeUserName = (e) => {
    setUserName(e.currentTarget.value);
  };

  const onChangeUserEmail = (e) => {
    setUserEmail(e.currentTarget.value);
  };

  const onChangeMessage = (e) => {
    setUserMessage(e.currentTarget.value);
  };

  const onSubmit = () => {
    console.log("Sending...");
    try {
      axios.post("https://api.emailjs.com/api/v1.0/email/send", {
        service_id: "service_39b823o",
        template_id: "contact_form",
        user_id: "user_KqKAmEXOSiTYiE7xO1sea",
        template_params,
      });
      toast.success(
        `Your email was send successfuly! I will be in touch with you shortly`
      );
    } catch (error) {
      toast.error(
        "Oups, unexpected error occured. Why don't you try to reach me via LinkedIn or Email."
      );
    }
  };

  return (
    <React.Fragment>
      <h1>Contact form</h1>
      <form className="form-group col-12 col-lg-6 col-md-8 mx-auto text-left">
        <input
          className="form-control"
          onChange={onChangeUserName}
          required
          type="text"
          placeholder="Name"
          name="userName"
        />{" "}
        <br />
        <input
          className="form-control"
          onChange={onChangeUserEmail}
          required
          type="email"
          placeholder="Email"
          name="userEmail"
        />{" "}
        <br />
        <textarea
          className="form-control"
          onChange={onChangeMessage}
          required
          placeholder="Your message..."
          name="message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <button
          onClick={() => onSubmit()}
          className="btn btn-dark text-blue"
          type="button"
        >
          Send
        </button>
      </form>
    </React.Fragment>
  );
};

export default Contact;
