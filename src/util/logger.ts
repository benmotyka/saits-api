import pino from "pino";

const logger = pino(
  {
    level: "trace",
    base: null,
    timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
    formatters: {
      level: (label) => {
        return {
          level: label,
        };
      },
    },
  },
  pino.destination(`${__dirname}/../../logs/combined.log`)
);

export default logger;
