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
  const model = this._doc;
  delete model.__v;
  return model;
};
const User = mongoose.model("User", UserSchema);
module.exports = User;
