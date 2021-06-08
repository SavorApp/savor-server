require("dotenv").config();

module.exports = {
  development: {
    dialect: "postgres",
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
  },
  production: process.env.DATABASE_URL,
  dialect: "postgres",
};
