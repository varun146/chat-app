import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverId } from "../socketIo/socket.js";
import { io } from "../socketIo/socket.js";

// controller to send messages
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body; // getting the actual message from the logged in user
    const { id: receiverId } = req.params; // getting the receiverId from the params
    const senderId = req.user._id; //  getting the user id from the cookies

    let conversation = await Conversation.findOne({
      // getting a conversation between the two users
      participants: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversation) {
      // if there is no conversation, create one
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // socket.io functionality will go here

    await Promise.all([conversation.save(), newMessage.save()]); // this will run in parallel

    const receiverSocketId = getReceiverId(receiverId);
    // if the receiver is online send the newMessage to that receiver
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage); // this method is used to send an event to a specific client
    }

    res.status(201).json({ newMessage });
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// controller to get messages
export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");
    if (!conversation) return res.status(200).json([]);

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("Error in getMessages controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
