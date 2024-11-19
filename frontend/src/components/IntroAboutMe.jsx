import React from "react";
import { motion } from "framer-motion";
import useFetch from "../../hook/useFetch";
import ReactMarkdown from "react-markdown";
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
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
  whileHover: {
    scale: 1.1,
    stiffness: 100,
  },
};
const IntroAboutMe = () => {
  const { data } = useFetch("http://localhost:1337/api/portfolio-yadus");

  return (
    <div className=" mt-5 mx-[2%] rounded-xl bg-gray-200 min-h-content">
      <div className="flex flex-col justify-center pt-10 items-center mx-5">
        <h1 className="text-4xl font-bold text-green-700">Who Am I ?</h1>
        <motion.div
          variants={variants}
          initial="initialright"
          whileInView="animate"
          className="w-auto bg-white py-4 px-2 lg:p-10 rounded-2xl font-mono  md:mx-0 mt-10 mb-10  md:mr-5"
        >
          {data &&
            data.data[0].aboutme.map((item) => {
              return item.children.map((childItem) => {
                return <ReactMarkdown>{childItem.text}</ReactMarkdown>;
              });
            })}
        </motion.div>
      </div>
    </div>
  );
};

export default IntroAboutMe;
