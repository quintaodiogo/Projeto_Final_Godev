const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "123456789",
  host: "localhost",
  port: 5433,
  database: "postgres",
});
module.exports = pool;
