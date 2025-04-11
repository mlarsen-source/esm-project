import express from "express";
import router from "./routes/home.routes.js";
import otherRouter from "./routes/other.routes.js";

const app = express();

app.get("/home", (req, res) => res.send("Hello, World!"))
app.use("/", router);
app.use("/", otherRouter);

const PORT = 8000;

app.listen(PORT, () => console.log(`server is running at http://localhost:${PORT}`));