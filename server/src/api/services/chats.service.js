import prisma from "../../lib/prisma.db.js";

export const askChatService = async (question, answer, userId) => {
  return await prisma.chats.create({
    data: {
      question,
      answer,
      users_id: userId,
    },
  });
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
