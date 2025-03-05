import express from "express";
import { routes } from "./routes/userRoutes.mjs";
import router from "./routes/userRoutes.mjs";

import cors from "cors";

const app = express();
const PORT = 2004;

app.use(express.json(), cors(), router);
// Middleware based static routing
app.use((req, res, next) => {
    let r = `${req.method}:${req.url}`;
    routes[r] ? 
        routes[r](req, res) : (() => {
            next();
            res.status(200).json(
                {name: "Not Found",status: 404})
        })();
});

app.listen(PORT, () => {
    console.log({
        link: `http://localhost:${PORT}/`
    });
});
