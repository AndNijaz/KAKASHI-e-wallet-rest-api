require("dotenv").config();

const express = require("express");
const req = require("express/lib/request");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//novo
let port = process.env.PORT || 3000;

app.use(cors());

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const dataRouter = require("./routes/datas")
app.use("/datas", dataRouter);

//Staro
// app.listen(3000, () => console.log("Server has started"));
//Novo
app.listen(port, () => console.log("Server has started"));