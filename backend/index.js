require("./config/mongoose.js");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.options("/*", (req, res) => res.send());

// app.use("/users", usersRouter);

app.listen(PORT, () => console.log("server running on port: " + PORT));
