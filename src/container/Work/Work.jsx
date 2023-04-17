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
      "A hotel booking web app that allows users to easily search, book, cancel, and manage their hotel reservations. This app is sure to be a valuable resource for travelers who are looking for a hassle-free way to plan their trips and book accommodations. With Bookozee, users can browse through a wide selection of nearby hotels and find the one that best fits their needs and budget. They can easily compare different hotels based on features such as price, location, amenities, and user reviews. Once they have found the hotel they want to book, they can reserve their room with just a few clicks.",
    techStack:
      "Html, Css, Sass, Material UI, React JS, Node JS, Express JS, MongoDB",
    tags: ["MERN", "All"],
    imgUrl: images.Bookozee,
    projectLink: "https://bookozee.netlify.app",
    codeLink: "https://github.com/mohit7067/bookozee",
  },
  {
    title: "Bookozee Admin Panel",
    description:
      " Bookozee.com hotel booking app admin panel built using React and Material-UI (Mui) technology. The admin panel offers seamless management and creation of user data, hotel details, and room details, empowering administrators with comprehensive control and oversight over all aspects of the hotel booking process. The React Mui admin panel of Bookozee.com is designed with a modern user interface, providing an exceptional user experience. Administrators can easily access and review all user data, including hotel details, and room details with the ability to sort, filter, and search for data efficiently.",
    techStack:
      "Html, Css, Sass, Material UI, React JS, Node JS, Express JS, MongoDB",
    tags: ["MERN", "All"],
    imgUrl: images.bookozeeAdmin,
    projectLink: "https://bookozee-admin.netlify.app/",
    codeLink: "https://github.com/mohit7067/bookozee",
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
      "KratsTechnologies is a dynamic company website based in Bhopal, India, that offers a wide range of services to clients, including digital marketing support, IT solutions, app development, and web development.  The website is designed to be fully responsive, ensuring a seamless user experience across different devices such as desktops, laptops, tablets, and smartphones. This reflects Krats Technologies' commitment to delivering websites that are accessible and functional on any screen size or device.",
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
              <p className="p-text" style={{ marginTop: 13, width: "100%" }}>
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
