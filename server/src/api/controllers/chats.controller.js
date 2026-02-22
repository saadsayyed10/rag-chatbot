import * as chatsService from "../services/chats.service.js";

export const askChatController = async (req, res) => {
  const { question, answer } = req.body;
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const chat = await chatsService.askChatService(
      question,
      answer,
      req.user.id,
    );
    res.status(201).json({ data: chat });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
