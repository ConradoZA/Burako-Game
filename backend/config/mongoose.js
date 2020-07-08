const mongoose = require("mongoose");
const { mongo_atlas } = require("./my-atlas-account");

const mongo_URI =
  process.env.NODE_ENV === "production" ? mongo_atlas : "mongodb://localhost:27017/burako";

mongoose
  .connect(mongo_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Successfully conected to MongoDB"))
  .catch(console.error);
