import * as chatsService from "../services/chats.service.js";

export const askChatController = async (req, res) => {
  const { question } = req.body;
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const chat = await chatsService.askChatService(question, req.user.id);
    res.status(201).json({ data: chat });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const userChatsController = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const chats = await chatsService.userChatsService(req.user.id);
    res.status(200).json({ data: chats });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
