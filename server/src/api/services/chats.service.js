import { askAPI } from "../../lib/ask-ai.js";
import prisma from "../../lib/prisma.db.js";

export const askChatService = async (question, userId) => {
  const res = await askAPI(question);

  const chat = await prisma.chats.create({
    data: {
      question,
      answer: res.data.answer,
      users_id: userId,
    },
  });

  return chat;
};

export const userChatsService = async (userId) => {
  return await prisma.chats.findMany({
    where: {
      users_id: userId,
    },
    select: {
      question: true,
      answer: true,
      users: {
        select: {
          firstname: true,
          surname: true,
          email: true,
        },
      },
    },
  });
};
