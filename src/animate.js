export const makebig = {
  hidden: {
    height: "50%",
    width: "50%",
  },
  show: {
    transition: {
      duration: 1.2,
    },

    height: "100%",
    width: "100%",
  },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,

      delay: 1.2,
      when: "beforeChildren",
    },
  },
};

export const item = {
  hidden: { y: 200, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export const btnAnim = {
  hidden: { x: 300, opacity: 0 },

  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export const faq = {
  hidden: {
    y: -50,
    opacity: 0,
    paddingTop: 0,
    paddingBottom: 0,
    display: "none",
    transition: {
      duration: 2,
    },
  },
  show: {
    y: 0,

    display: "block",
    paddingTop: 50,
    paddingBottom: 50,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

export const comeFromRight = {
  hidden: {
    x: 300,
    opacity: 0,
    transition: {
      duration: 1,

      when: "beforeChildren",
      staggerChildren: 1,
    },
  },

  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const comeFromLeft = {
  hidden: {
    x: -300,
    opacity: 0,
    transition: {
      duration: 1,

      when: "beforeChildren",
      staggerChildren: 1,
    },
  },

  show: {
    x: 0,

    opacity: 1,
    transition: {
      duration: 1,

      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

export const comeFromBottom = {
  hidden: { y: 30, opacity: 0 },

  show: {
    y: 0,

    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.1,
    },
  },
};

export const comeFromTop = {
  hidden: { y: -300, opacity: 0 },

  show: {
    y: 0,

    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },

  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const comeFromLeftDelay = {
  hidden: { x: -300, opacity: 0 },

  show: {
    x: 0,

    opacity: 1,
    transition: {
      duration: 1,

      when: "beforeChildren",
      delay: 0.5,
      staggerChildren: 1,
    },
  },
};
