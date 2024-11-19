import React from "react";
import { easeInOut, motion } from "framer-motion";
import body_img from "../assets/photo_yared.jpg";
import useFetch from "../../hook/useFetch";

const variants = {
  initialTop: {
    x: "10vw",
    opacity: 0,
  },
  initialBottom: {
    y: "10vw",
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

const Intro = () => {
  const { data } = useFetch(
    "http://localhost:1337/api/portfolio-yadus?populate[introSection][populate]=*"
  );

  return (
    <motion.div variants={variants} exit="exit">
      <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-20 mx-[2%] h-[100vh] rounded-xl  overflow-x-clip bg-gray-200">
        <motion.div
          variants={variants}
          initial="initialTop"
          whileInView="animate"
          whileHover="whileHover"
          className=" my-10 flex flex-col items-center font-bold text-gray-700"
        >
          {data &&
            data.data.map((item) => {
              return (
                <img
                  src={"http://localhost:1337/" + item.introSection.image.url}
                  alt="profile image"
                  className="h-28 rounded-full  lg:rounded-3xl lg:h-96 cursor-pointer"
                />
              );
            })}

          {/* <div className="lg:hidden flex flex-col items-center">
            <p>Frontend Web developer </p>
            <p>React | Tailwindcss | Bootstrap </p>
            <p>Javascript | Typescript</p>
          </div> */}
        </motion.div>
        <motion.div
          className="lg:h-96 w-full -mt-20 lg:mt-0 lg:w-1/2 rounded-xl  flex items-center justify-center   "
          variants={variants}
          initial="initialBottom"
          whileInView="animate"
          whileHover="whileHover"
        >
          <span className="text-2xl flex flex-col pb-5 min-h-content px-5  rounded-xl  items-center bg-white m-5 cursor-pointer">
            <span className="text-gray-600 p-5 font-semibold mt-12 flex flex-col justify-center items-center gap-4">
              {data &&
                data.data.map((item) => {
                  return (
                    <div key={item.id}>{item.introSection.description}</div>
                  );
                })}
            </span>
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;
