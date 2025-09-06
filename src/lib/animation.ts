export const animationEasing = [0.6, -0.05, 0.01, 0.99];

export const animationStagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.25,
      staggerDirection: 1
    }
  }
}

export const animationFadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6, ease: animationEasing
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      // delay: 0.5,
      ease: animationEasing
    }
  }
};

export const animationFadeInDown = {
  initial: {
    y: 60,
    opacity: 0,
    transition: {
      duration: 0.6, ease: animationEasing
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      // delay: 0.5,
      ease: animationEasing
    }
  }
};

export const animationTransition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export const animationLetter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { ...animationTransition }
  }
};

export const btnGroupAnimation = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: animationEasing }
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: animationEasing
    }
  }
};
export const animationStar = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: animationEasing }
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: animationEasing
    }
  }
};

export const animationHeader = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: animationEasing }
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: animationEasing
    }
  }
};

// export const firstName = {
//   initial:{
//     y:-20,
//   },
//   animate:{
//     y:0,
//     transition:{
//       delayChildren:0.4,
//       staggerChildren:0.04,
//       staggerDirection:-1
//     }
//   }
// }

// export const lastName = {
//   initial:{
//     y:-20,
//   },
//   animate:{
//     y:0,
//     transition:{
//       delayChildren:0.4,
//       staggerChildren:0.04,
//       staggerDirection:1
//     }
//   }
// }