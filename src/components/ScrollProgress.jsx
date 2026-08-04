import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress fixed top-0 left-0 right-0 h-[3px] z-[60] bg-gradient-to-r from-green to-blue"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
