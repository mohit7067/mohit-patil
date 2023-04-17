import React, { useState } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="logo" /> */}
        <h1>
          M O <span>H I T</span>{" "}
        </h1>
      </div>
      <ul className="app__navbar-links">
        {[
          "home",
          "about",
          "work",
          "skills",
          "githubstats",
          "testimonials",
          "contact",
          "resume",
        ].map((el) => (
          <li className="app__flex p-text" key={`link-${el}`}>
            <div></div>
            <a
              href={
                el === "resume"
                  ? "https://drive.google.com/file/d/1Wpv34_n1wQWzGYw5nkTQJxfyvj08Z-dM/view?usp=share_link"
                  : `#${el}`
              }
              target={el === "resume" ? "_blank" : ""}
              rel={el === "resume" ? "noreferrer" : ""}
            >
              {el}
            </a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about",
                "work",
                "skills",
                "githubstats",
                "testimonials",
                "contact",
                "resume",
              ].map((el) => (
                <li className="app__flex p-text" key={el}>
                  <a
                    href={
                      el === "resume"
                        ? "https://drive.google.com/file/d/1Wpv34_n1wQWzGYw5nkTQJxfyvj08Z-dM/view?usp=share_link"
                        : `#${el}`
                    }
                    target={el === "resume" ? "_blank" : ""}
                    rel={el === "resume" ? "noreferrer" : ""}
                    onClick={() => setToggle(false)}
                  >
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
