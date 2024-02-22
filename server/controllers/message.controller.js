import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


// controller to send messages 
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body; // getting the actual message from the logged in user
    const { id: receiverid } = req.params; // getting the receiverId from the params
    const senderId = req.user._id;  //  getting the user id from the cookies

    let conversation = await Conversation.findOne({ // getting a conversation between the two users
      participants: {
        $all: [senderId, receiverid]
      }
    })

    if (!conversation) { // if there is no conversation, create one
      conversation = await Conversation.create({
        participants: [senderId, receiverid]
      })
    }

    const newMessage = new Message({
      senderId,
      receiverId: receiverid,
      message,
    })

    if (newMessage) {
      conversation.messages.push(newMessage._id)
    }

    // socket.io functionality will go here

    await Promise.all[conversation.save(), newMessage.save()]; // this will run in parallel

    res.status(201).json({ newMessage });
  } catch (error) {
    console.log("Error in sendMessage controller", error.message)
    res.status(500).json({ error: "Internal Server Error" })

  }
}


// controller to get messages
export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] }
    }).populate("message")

    res.status(200).json(conversation.messages);

  } catch (error) {
    console.log("Error in sendMessage controller", error.message)
    res.status(500).json({ error: "Internal Server Error" })

  }


}
