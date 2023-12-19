const mongoose = require("mongoose");

const messsageModel = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    // ref to the chat to which this message belongs to
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messsageModel);

module.exports = Message;
