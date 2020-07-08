const mongoose = require("mongoose");
// const ObjectId = mongoose.Schema.Types.ObjectId;
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
UserSchema.methods.toJSON = function (params) {
  const game = this._doc;
  delete game.__v;
  return game;
};
const User = mongoose.model("User", UserSchema);
module.exports = User;
