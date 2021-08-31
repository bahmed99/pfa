const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cin: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
    },
    timetable: [
      {
        start: { type: Date },
        end: { type: Date },
        title: { type: String },
        color: { type: String },
        eventContent: { type: String },
      },
    ],
    employee: {
      type: ObjectId,
      ref: "Employee",
    },
    resetToken: String,
    expireToken: Date,
    pic: {
      type: String,
      default: "user1.png",
    },
    status: {
      type: String,
      default: "Payé",
    },
    age: {
      type: String,
      required: true,
    },
    seanceCode: {
      type: Number,
      default: 0,
    },
    seancePermis: {
      type: Number,
      default: 0,
    },
    seanceCodePayee: {
      type: Number,
      default: 0,
    },
    seancePermisPayee: {
      type: Number,
      default: 0,
    },
    montant: {
      type: Number,
      default: 0,
    },
    montantAPaye: {
      type: Number,
      default: 0,
    },
    notifications: [
      {
        title: { type: String },
        nom: { type: String },
        pic: { type: String },
      },
    ],
    code: {
      type: Boolean,
      default: false,
    },
    conduite: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

Client = mongoose.model("Client", clientSchema);
module.exports = Client;
