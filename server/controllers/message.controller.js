import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

// controller to send messages
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body; // getting the actual message from the logged in user
    console.log(req.body);
    const { id: receiverId } = req.params; // getting the receiverId from the params
    console.log("Receiver Id: ", receiverId);
    const senderId = req.user._id; //  getting the user id from the cookies

    let conversation = await Conversation.findOne({
      // getting a conversation between the two users
      participants: {
        $all: [senderId, receiverId],
      },
    });
    console.log("here conversation is: ", conversation);

    if (!conversation) {
      // if there is no conversation, create one
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    console.log("here conversation is: ", conversation.messages);

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
    console.log("userToChatId: ", userToChatId);
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");
    console.log("Here is converstaion value: ", conversation);
    if (!conversation) return res.status(200).json([]);

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("Error in getMessages controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
