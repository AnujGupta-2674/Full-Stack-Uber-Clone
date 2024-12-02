const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");

connectToDb();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/users", userRoutes);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});