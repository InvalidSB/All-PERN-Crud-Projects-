const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"tryop123",
    host:"localhost",
    database:"todopern",
    port:5432
});

module.exports = pool;