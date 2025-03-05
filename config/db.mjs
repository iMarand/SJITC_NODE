import SQL from "mysql2";

// Configure Mysql Database
export const pool = SQL.createPool({
    database: "user_management_api",
    host: "localhost",
    password: "",
    user: "root",
    connectionLimit: 10
});

let connected = pool ? 
    "Database Connected Successfully" : 
    "Connection Error";

console.log(connected);



