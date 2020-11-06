import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import { useInView } from "react-intersection-observer";
import animations from "../styles/animations";

export default function AnimateInView({
  children,
  animation,
  className,
  ...props
}) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={false}
      variants={animations[animation]}
      animate={inView ? `visible` : `hidden`}
      className={`animated ${className || ""}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

AnimateInView.propTypes = {
  /**
   * Components to animate in view
   */
  children: PropTypes.node.isRequired,
  /**
   * animation from the animations.css file
   */
  animation: PropTypes.string.isRequired,
};
