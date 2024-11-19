import React, { useState } from "react";
import cancell from "../assets/cancel.png";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import down from "../assets/down.png";

const nameVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -10,
    transition: {
      yoyo: Infinity,
      duration: 1,
    },
  },
};
const NavBar = () => {
  const [state, setState] = useState(false);
  return (
    <div className="w-full mb-[2%] bg-gray-100 py-3 sticky top-0 left-0 z-10 ">
      <div className="flex  justify-around items-center">
        <div className="flex  items-center justify-center  ">
          <p className="text-lg font-serif">Yared Desaley Gebreslassie</p>
        </div>
        <div>
          <div
            onClick={() => {
              setState(!state);
            }}
            className="relative   md:hidden"
          >
            <img src={down} alt="dropdown" className="h-10  text-white" />
            <AnimatePresence>
              {state ? (
                <motion.div
                  initial={{ x: 100, y: 0, opacity: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                  }}
                  exit={{
                    x: 400,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  className="flex flex-col justify-start rounded-2xl bg-green-900 -top-5 -right-10 md:hidden w-screen  h-[1200px] pt-3 gap-5 font-serif absolute"
                >
                  <button
                    className="flex justify-end mr-3 font-bold text-2xl text-gray-600 "
                    onClick={() => setState(!state)}
                  >
                    <img src={cancell} alt="cancell but" className="h-10" />
                  </button>
                  <button className="transition hover:-translate-y-1  text-xl font-bold ">
                    <Link to="/">Home</Link>
                  </button>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
        <div className="hidden md:flex gap-5 font-serif">
          <button className="transition hover:-translate-y-1 hover:scale-110 text-xl font-bold ">
            <Link to="/">Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
