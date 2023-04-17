import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l89detk",
        "template_wnm2khj",
        form.current,
        "yWZjpALti06BHgwRn"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Message has been sent to MOHIT PATIL 👍", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <h2 className="head-text">
        Take a <span>coffee</span> & <span>chat</span> with me
      </h2>
      <div className="app__footer-cards">
        <div
          className="app__footer-card "
          onClick={() =>
            window.open("https://www.linkedin.com/in/mohit-profile", "_blank")
          }
        >
          <img src={images.linkedin} alt="linkedIn" />
          <a
            href="https://www.linkedin.com/in/mohit-profile"
            className="p-text"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="app__footer-card ">
          <img
            src={images.github}
            alt="github"
            onClick={() =>
              window.open("https://github.com/mohit7067", "_blank")
            }
          />
          <a
            href="https://github.com/mohit7067"
            className="p-text"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <div
          className="app__footer-card "
          onClick={() => window.open("mailto:95227ms@gmail.com", "_blank")}
        >
          <img src={images.email} alt="email" />
          <a href="mailto:95227ms@gmail.com" className="p-text">
            95227ms@gmail.com
          </a>
        </div>

        <div
          className="app__footer-card"
          onClick={() => window.open("tel:+917067622076", "_blank")}
        >
          <img src={images.mobile} alt="phone" />
          <a href="tel:+917067622076" className="p-text">
            +91 7067622076
          </a>
        </div>
      </div>
      <div className="app__footer-form app__flex">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name :</label>
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="user_name"
          />
          <label>Email :</label>
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="user_email"
          />
          <label>Message :</label>
          <textarea
            className="p-text"
            placeholder="Your Message"
            name="message"
          />
          <button type="submit" className="p-text">
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
