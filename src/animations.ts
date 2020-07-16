export const animations = {
  float: `
    @-webkit-keyframes float {
      0% {
        transform: translate(0);
        -webkit-transform: translate(0);
      }
      100% {
        transform: translate(0, -0.2em);
        -webkit-transform: translate(0, -0.2em);
      }
    }
    @keyframes float {
      0% {
        transform: translate(0);
        -webkit-transform: translate(0);
      }
      100% {
        transform: translate(0, -0.2em);
        -webkit-transform: translate(0, -0.2em);
      }
    }
    `,
  sink: `
    @-webkit-keyframes sink {
      0% {
        transform: translate(0);
        -webkit-transform: translate(0);
      }
      100% {
        transform: translate(0, 0.2em);
        -webkit-transform: translate(0, 0.2em);
      }
    }
    @keyframes sink {
      0% {
        transform: translate(0);
        -webkit-transform: translate(0);
      }
      100% {
        transform: translate(0, 0.2em);
        -webkit-transform: translate(0, 0.2em);
      }
    }
    `,
  grow: `
    @-webkit-keyframes grow {
        to {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }
      }
      @keyframes grow {
        to {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }
      }
    `,
  shrink: `
      @-webkit-keyframes shrink {
        to {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
        }
      }
      @keyframes shrink {
        to {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
        }
      }
      `,
  bounce: `
  @-webkit-keyframes bounce {
    15% {
      -webkit-transform: translateY(0.2em);
      transform: translateY(0.2em);
    }
    40% {
      -webkit-transform: translateY(-0.1em);
      transform: translateY(-0.1em);
    }
    60% {
      -webkit-transform: translateY(0.05em);
      transform: translateY(0.05em);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes bounce {
    15% {
      -webkit-transform: translateY(0.2em);
      transform: translateY(0.2em);
    }
    40% {
      -webkit-transform: translateY(-0.1em);
      transform: translateY(-0.1em);
    }
    60% {
      -webkit-transform: translateY(0.05em);
      transform: translateY(0.05em);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  `,
}

export type AnimationTypes = keyof typeof animations
