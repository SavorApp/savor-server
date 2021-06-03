require("dotenv").config();

console.log("🔥", process.env.DB_USER);

module.exports = {
  development: {
    dialect: "postgres",
    connection: process.env.DATABASE_URL || {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      host: "127.0.0.1",
    },
  },
  production: {
    dialect: "postgres",
    connection: process.env.DATABASE_URL || {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      host: "127.0.0.1",
    },
  },
};
