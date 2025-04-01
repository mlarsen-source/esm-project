import express from "express";

const app = express();

app.get("/home", (req, res) => res.send("Hello, world"))


const PORT = 8000;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));