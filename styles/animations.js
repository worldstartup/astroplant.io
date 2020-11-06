const animations = {
  list: {
    visible: {
      transition: { staggerChildren: 0.4, delayChildren: 0.5 },
    },
    hidden: {
      transition: { staggerChildren: 0.4, staggerDirection: -1 },
    },
  },

  fadeIn: {
    visible: {
      opacity: 1,
      transition: {
        opacity: { ease: "easeOut", duration: 0.3 },
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        opacity: { ease: "easeOut", duration: 0.3 },
      },
    },
  },

  fadeInBottom: {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { ease: "easeOut", duration: 0.8 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { ease: "easeOut", duration: 0.8 },
      },
    },
  },

  slideInLeft: {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { ease: "easeOut", duration: 1.2 },
      },
    },
    hidden: {
      x: 320,
      opacity: 0,
      transition: {
        x: { ease: "easeOut", duration: 1.2 },
      },
    },
  },
};

export default animations;
