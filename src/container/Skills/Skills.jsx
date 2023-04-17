import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import { images } from "../../constants";

const skills = [
  {
    name: "Html",
    icon: images.html,
  },
  {
    name: "Css",
    icon: images.css,
  },
  {
    name: "Javascript",
    icon: images.javascript,
  },
  {
    name: "Sass",
    icon: images.sass,
  },
  {
    name: "React",
    icon: images.react,
  },
  {
    name: "Redux",
    icon: images.redux,
  },
  {
    name: "Chakra UI",
    icon: images.chakra,
  },
  {
    name: "Material UI",
    icon: images.mu5,
  },
  {
    name: "Node JS",
    icon: images.node,
  },
  {
    name: "Express",
    icon: images.express,
  },
  {
    name: "Mongo DB",
    icon: images.mongo,
  },
  {
    name: "Mongoose",
    icon: images.mongoose,
  },
  {
    name: "Git",
    icon: images.git,
  },
  {
    name: "Postman",
    icon: images.postman,
  },
];

const experiences = [
  {
    year: "2021-2022",
    works: [
      {
        name: "Full Stack Web Developer",
        company: "Masai School",
        desc: "As a Full Stack Web Developer who completed the 7-month course at Masai School, I have gained extensive hands-on coding experience and have completed real-world projects that showcase my skills and knowledge. Over the course of the program, I have learned a wide range of topics related to web development, including HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more. Throughout the course, I have spent more than 1000+ hours coding, which has allowed me to develop a deep understanding of coding principles, best practices, and techniques. I have also worked on real-world projects, which has given me the opportunity to apply my skills to solve practical problems and develop functional, high-quality web applications.",
      },
    ],
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text" style={{ marginBottom: "1rem" }}>
        Skills <span> & </span> Experiences
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>

                    <p className="p-text">{work.desc}</p>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
