import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import { useInView } from "react-intersection-observer";
import animations from "../styles/animations";

export default function AnimateListInView({
  children,
  listAnimation,
  itemsAnimation,
  ...props
}) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={inView ? "visible" : "hidden"}
      variants={animations[listAnimation]}
      {...props}
    >
      {React.Children.map(children, (child) => {
        return (
          <motion.div variants={animations[itemsAnimation]}>
            {React.cloneElement(child)}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

AnimateListInView.propTypes = {
  children: PropTypes.node.isRequired,
  listAnimation: PropTypes.string.isRequired,
  itemsAnimation: PropTypes.string.isRequired,
};
