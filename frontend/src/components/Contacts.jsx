import React from "react";
import { easeInOut, motion } from "framer-motion";
import useFetch from "../../hook/useFetch";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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

const Contacts = () => {
  const { data } = useFetch(
    "http://localhost:1337/api/portfolio-yadus?populate[contact][populate]=*"
  );
  console.log("strapi----====---cont", data);
  return (
    <div className="bg-gray-200 mt-5 mx-[2%] rounded-xl min-h-content py-10">
      <h1 className="flex justify-center mb-10  text-4xl font-bold text-green-700">
        Do You Want To Contact Me ?
      </h1>
      <div className="flex flex-col-reverse  lg:flex lg:flex-row lg:gap-28 lg:justify-center items-center  mx-14 text-gray-700">
        <p className="text-lg font-serif">
          <div className=" gap-10 ">
            {data &&
              data.data[0].contact.map((item) => {
                return (
                  <motion.div
                    variants={variants}
                    initial="initialleft"
                    whileInView="animate"
                    whileHover="whileHover"
                    className="flex flex-col gap-5 items-start bg-white p-6 rounded-xl mb-5   cursor-pointer"
                    key={item.id}
                  >
                    <div>
                      <span>
                        <EmailIcon className="text-red-500 mr-3" />
                      </span>
                      <span className="text-red-500 mr-1"> Email </span>:{" "}
                      {item.email}
                    </div>
                    <div>
                      {" "}
                      <PhoneIcon className="text-green-500 mr-3" />{" "}
                      <span className="text-green-500 mr-1">
                        {" "}
                        Phone Number :
                      </span>
                      {item.phoneNumber}
                    </div>
                    <div>
                      {" "}
                      {item.phoneNumber2 ? (
                        <div>
                          {" "}
                          <PhoneIcon className="text-green-500 mr-3" />{" "}
                          <span className="text-green-500 mr-1">
                            {" "}
                            Phone Number :
                          </span>
                          {item.phoneNumber2}{" "}
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <TelegramIcon className="text-sky-700 mr-3" />{" "}
                      <span className="text-sky-700 mr-1"> Telegram :</span> :{" "}
                      {item.telegram}
                    </div>
                    <div>{item.github && `Github : ${item.github} `}</div>
                    <div>
                      <LinkedInIcon className="text-sky-700 mr-1" />
                      <span className="text-sky-700 mr-1">
                        {" "}
                        LinkedIn :
                      </span>{" "}
                      {item.linkedIn}
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </p>
      </div>
    </div>
  );
};

export default Contacts;
