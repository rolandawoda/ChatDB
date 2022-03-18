const { ChatRoomModel } = require("../models/ChatRoom");
const { ChatMessageModel } = require("../models/ChatMessage");

exports.deleteRoomById = async (req, res) => {
  try {
    const { roomId } = req.params;
    // delete room
    const room = await ChatRoomModel.remove({ _id: roomId });
    //delete messages posted in room
    const chat = await ChatMessageModel.remove({ chatRoomId: roomId });
    //send successful response
    return res.status(200).json({
      success: true,
      deletedRoomCount: `deleted ${room.deletedCount} room`,
      deletedMessageCount: `deleted ${chat.deletedCount} chats`,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      error,
    });
  }
};

exports.deleteMessageById = async (req, res) => {
  try {
    const { messageId } = req.params;
    const chat = await ChatMessageModel.remove({ _id: messageId });
    //send successful response
    return res.status(200).json({
      success: true,
      deletedMessageCount: `deleted ${room.deletedCount} message`,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      error,
    });
  }
};
