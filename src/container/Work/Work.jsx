import React, { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Work.scss";

const works = [
  {
    title: "Bookozee.com",
    description:
      "It's my major project where I used the MERN stack to build a hotel reservation web app, including backend integration and an admin panel. The app features functionalities such as nearby hotel search, hotel search by date, and booking specific rooms in a hotel, among others.",
    techStack:
      "Html, Css, Scss, Material UI, React JS, Node JS, Express JS, MongoDB, Mongoose, Git",
    tags: ["MERN", "All"],
    imgUrl: images.Bookozee,
    projectLink: "https://bookozee.netlify.app",
    codeLink: "https://github.com/mohit7067/bookozee",
  },
  {
    title: "Bookozee Admin Panel",
    description:
      "This project is focused on building an admin panel for Bookozee.com, a hotel reservation web app, using the MERN stack. The admin panel includes functionalities such as viewing all users, creating users, viewing all hotel details, creating hotels, deleting hotels, and managing room details.  Credentials to login (email: badmin70@gmail.com, password: badmin7067).",
    techStack:
      "Html, Css, Scss, Material UI, React JS, Node JS, Express JS, MongoDB, Mongoose, Firebase-storage, Git",
    tags: ["MERN", "All"],
    imgUrl: images.bookozeeAdmin,
    projectLink: "https://bookozee-admin.netlify.app/",
    codeLink: "https://github.com/mohit7067/bookozee",
  },
  {
    title: "Fitness Exercises Suggestion App",
    description:
      "The objective of this project is to build a fitness exercise suggestion app using React JS, Material UI, and Rapid UI. The app will allow users to search for exercises related to specific body parts. Upon searching, the user will receive information and a relevant GIF for the selected exercise, along with pagination for easy navigation.",
    techStack: "Html, Css, Material UI, React JS, RapidAPI",
    tags: ["React", "All"],
    imgUrl: images.fitnessproject,
    projectLink: "https://fitness-exercise-suggestion.vercel.app",
    codeLink: "https://github.com/mohit7067/fitness_exercise",
  },

  {
    title: "Youtube Clone",
    description:
      "The project involves creating a responsive YouTube clone using RapidAPI, where users can search, watch, and categorize videos. Utilizing APIs available on RapidAPI, the clone will provide a user-friendly platform that is accessible and optimized for different devices and screen sizes, allowing users to seamlessly access and enjoy videos on various devices, including desktops, laptops, tablets, and mobile phones.",
    techStack: "Html, Css, Material UI, React JS, RapidAPI",
    tags: ["React", "All"],
    imgUrl: images.youtubeclone,
    projectLink: "https://youtube-clone-obvc.vercel.app",
    codeLink: "https://github.com/mohit7067/youtube_clone.git",
  },
  {
    title: "Kratstechnologies.com",
    description:
      "I built this project for Kratstechnologies.com, an IT company based in Bhopal, using React.js and Chakra UI. The project is a company website designed for their client and is fully responsive, catering to all devices. The website showcases the company's services, portfolio, and other relevant information, and has been designed to adapt seamlessly to different screen sizes and devices.",
    techStack: "Html, Css, Chakra UI, React JS ",
    tags: ["React", "All"],
    imgUrl: images.krats,
    projectLink: "https://www.kratstechnologies.com",
    codeLink: "",
  },
];

const Work = () => {
  const [filterWork, setFilterWork] = useState(works);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["All", "React", "MERN"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                {work.codeLink ? (
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                ) : (
                  <Tooltip
                    title="Unfortunately, due to client confidentiality, I am unable to showcase the code !"
                    placement="top-start"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </Tooltip>
                )}
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>{" "}
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <p
                className="p-text"
                style={{ marginTop: 13, width: "100%", fontWeight: "500" }}
              >
                <span
                  style={{
                    color: "#313BAC",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Tech Stack :
                </span>{" "}
                {work.techStack}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                className="normal_icon"
              >
                {" "}
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                {work.codeLink ? (
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                ) : (
                  <Tooltip
                    title="Unfortunately, due to client confidentiality, I am unable to showcase the code !"
                    placement="top-start"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </Tooltip>
                )}
              </div>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
