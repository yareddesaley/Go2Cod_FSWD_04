import React from "react";
import { easeInOut, motion } from "framer-motion";
import fluid_ai from "../assets/FluidAi.jpg";
import fb from "../assets/my-fb.png";
import finance from "../assets/Mlfinance.jpg";
import e_comm from "../assets/e-comm.png";
import landing from "../assets/landing.jpg";
import portfolio from "../assets/portfolio.jpg";
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

const FullStackProjects = () => {
  const { data } = useFetch(
    "http://localhost:1337/api/portfolio-yadus?populate[backendProject][populate]=*"
  );
  console.log("strapi----====---", data);
  return (
    <div className="bg-gray-200 mt-5 mx-[2%] rounded-xl min-h-content py-10">
      <h1 className="flex justify-center mb-10  text-4xl font-bold text-green-700">
        Full Stack Projects
      </h1>
      <div className="flex flex-col-reverse  lg:flex lg:flex-row lg:gap-28 lg:justify-center items-center  mx-14 text-gray-700">
        <p className="text-lg font-serif">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 ">
            {data &&
              data.data[0].backendProject.map((item) => {
                return (
                  <motion.div
                    variants={variants}
                    initial="initialleft"
                    whileInView="animate"
                    whileHover="whileHover"
                    className="flex flex-col items-center bg-white p-6 rounded-xl mb-5   cursor-pointer"
                    key={item.id}
                  >
                    <p className="font-bold text-green-700 mb-5 text-xl">
                      {item.title}
                    </p>
                    <img src={"http://localhost:1337" + item.image.url} />
                    <p className="mt-5">{item.description}</p>
                  </motion.div>
                );
              })}
          </div>
        </p>
      </div>
    </div>
  );
};

export default FullStackProjects;
