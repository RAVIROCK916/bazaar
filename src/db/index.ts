import pg from "pg";

const db = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "bazaar",
  password: "ravi4177",
  port: 5432,
});

export default db;
