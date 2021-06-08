require("dotenv").config();

module.exports = {
  dialect: "postgres",
  development: {
    dialect: "postgres",
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
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
