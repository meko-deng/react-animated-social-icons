export const animations = {
  moveUp: `
        @-webkit-keyframes moveUp {
            0% {
                transform: translate(0);
            }
            100% {
                transform: translate(0, -5px);
            }
        }
        @keyframes moveUp {
            0% {
                transform: translate(0);
            }
            100% {
                transform: translate(0, -5px);
            }
        }
    `,
  pulseGrow: `
    @-webkit-keyframes pulseGrow {
        to {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }
      }
      @keyframes pulseGrow {
        to {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }
      }
    `,
  pulseShrink: `
      @-webkit-keyframes pulseShrink {
        to {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
        }
      }
      @keyframes pulseShrink {
        to {
          -webkit-transform: scale(0.9);
          transform: scale(0.9);
        }
      }
      `,
  wobbleVertical: `
  @-webkit-keyframes wobbleVertical {
    16.65% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    33.3% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
    }
    49.95% {
      -webkit-transform: translateY(4px);
      transform: translateY(4px);
    }
    66.6% {
      -webkit-transform: translateY(-2px);
      transform: translateY(-2px);
    }
    83.25% {
      -webkit-transform: translateY(1px);
      transform: translateY(1px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes wobbleVertical {
    16.65% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    33.3% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
    }
    49.95% {
      -webkit-transform: translateY(4px);
      transform: translateY(4px);
    }
    66.6% {
      -webkit-transform: translateY(-2px);
      transform: translateY(-2px);
    }
    83.25% {
      -webkit-transform: translateY(1px);
      transform: translateY(1px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  `
}

export type AnimationTypes = keyof typeof animations
