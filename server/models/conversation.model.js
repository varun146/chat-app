import mongoose from "mongoose";

const conversationModel = new mongoose.Schema({
  participants: [ // array for storing users in a conversation
    {
      type: mongoose.Schema.Types.ObjectId, // it will refer to the User model
      ref: "User",
    },
  ],
  messages: [ // array of messages in a conversation
    {
      type: mongoose.Schema.Types.ObjectId, // it will refer to the Message model
      ref: "Message",
      default: [],
    },
  ],
})

const Conversation = mongoose.model("Conversation", conversationModel);
export default Conversation;
