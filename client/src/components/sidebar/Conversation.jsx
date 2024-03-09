import React from "react";
import useConversations from "../../zustand/useConversation";

const Conversation = ({ conversation, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversations();

  const isSelected = selectedConversation?._id === conversation._id;
  console.log("isSelected: ", isSelected);
  return (
    <div
      className={`flex my-2 gap-2 items-center  hover:bg-purple-300  rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-purple-300" : ""}`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src={conversation.profilePic} alt="user avatar" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="px-2 flex gap-3 justify-between">
          <p className="font-bold text-white">{conversation.fullName}</p>
          <span className="text-xl">{emoji}</span>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
