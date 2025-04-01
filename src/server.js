import express from "express";
import router from "./routes/home.routes.js";

const app = express();

app.get("/home", (req, res) => res.send("Hello, World!"))
app.use("/my", router);

const PORT = 8000;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));