"use client";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Navigation from "./Navbar";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

// Define the props interface
interface TransitionProviderProps {
  children: ReactNode;
}

const TransitionProvider: React.FC<TransitionProviderProps> = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="w-screen h-screen bg-gradient-to-t from-cyan-200 to-gray-600">
        {/* Exiting animation */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: easeInOut }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-yellow-700 text-8xl cursor-default w-fit h-fit z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: easeInOut }}
        >
          {pathName.substring(1)}
        </motion.div>
        {/* Entering animation */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{
            height: "0vh",
            transition: { delay: 2, duration: 0.5, ease: easeInOut },
          }}
        />

        {/* Navigation and children */}
        <div className="h-24">
          <Navigation />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
