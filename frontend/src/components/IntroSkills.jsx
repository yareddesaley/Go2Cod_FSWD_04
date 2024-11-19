import React from "react";
import { easeInOut, motion } from "framer-motion";
import Pc from "../assets/aman with computer.jpg";
import useFetch from "../../hook/useFetch";
const variants = {
  initialleft: {
    x: "-10vw",
    opacity: 0,
  },
  initialright: {
    x: "10vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      when: "beforeChildren",
      mass: 1,
      damping: 8,
      staggerChildren: 2,
      stiffness: 50,
    },
  },
  whileHover: {
    scale: 1.1,
    stiffness: 100,
  },
  exit: {
    y: 1000,
    transition: {
      ease: easeInOut,
    },
  },
};

const IntroSkills = () => {
  const { data } = useFetch("http://localhost:1337/api/portfolio-yadus");

  return (
    <div className="bg-gray-200 mt-5 mx-[2%] rounded-xl min-h-content py-10">
      <div className="flex flex-col justify-center items-center  mx-5 text-gray-700">
        <h1 className="text-4xl font-bold text-green-700 mb-10">
          What Skills Do I Have ?
        </h1>
        <p className="text-lg font-serif  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">
            <motion.div
              variants={variants}
              initial="initialleft"
              whileInView="animate"
              className="flex flex-col items-center bg-white p-6 rounded-xl"
            >
              <span className="text-xl font-bold text-green-700">
                Digital Skills
              </span>
              <br />
              <div>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {data &&
                    data.data[0].computerSkills.map((item) => {
                      return <div>{item.children[0].text}</div>;
                    })}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={variants}
              initial="initialleft"
              whileInView="animate"
              className="flex flex-col items-center bg-white p-6 rounded-xl mt-5"
            >
              <span className="text-xl font-bold text-green-700">
                Programming skills
              </span>
              <br />
              <div>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {data &&
                    data.data[0].programmingSkills.map((item) => {
                      return <div>{item.children[0].text}</div>;
                    })}
                </div>
              </div>
            </motion.div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default IntroSkills;
