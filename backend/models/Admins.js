const mongoose = require("mongoose");

const AdminsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const AdminsModel = mongoose.model("admins", AdminsSchema);

module.exports = AdminsModel;
