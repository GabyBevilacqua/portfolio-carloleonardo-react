// src/components/PageWrapper.jsx
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  in: {
    x: 0,
    opacity: 1,
  },
  out: {
    x: "-100%",
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 1, // Puedes ajustar la duración según tus necesidades
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
