import mongoose from "mongoose";

const messageScheme = new mongoose.Schema(
  {
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
      indec: true,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      trim: true,
    },
    imgUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

messageScheme.index({ conversationId: 1, createdAt: -1 });

const Message = mongoose.model("Message", messageScheme);

export default Message;
