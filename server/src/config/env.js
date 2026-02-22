import "dotenv/config";

const env = {
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET || "sameoldtreva",
  AI_URL: process.env.AI_URL || "http://127.0.0.1:8000",
};

export default env;
