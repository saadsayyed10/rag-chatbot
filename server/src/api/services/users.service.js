import prisma from "../../lib/prisma.db.js";
import bcryptjs from "bcryptjs";
import { generateToken } from "../../lib/generate-token.js";

export const registerUserService = async (
  firstName,
  lastName,
  email,
  password,
) => {
  const existing = await prisma.users.findUnique({
    where: {
      email,
    },
  });

  if (existing) throw new Error("User account already exists");

  const hashedPassword = await bcryptjs.hash(password, 10);

  const user = await prisma.users.create({
    data: {
      firstname: firstName,
      surname: lastName,
      email,
      password: hashedPassword,
    },
  });

  const token = generateToken(user.id);

  return { user, token };
};

export const loginUserService = async (email, password) => {
  const user = await prisma.users.findUnique({
    where: {
      email,
    },
  });

  if (!user) throw new Error("User account does not exist");

  const isValidPassword = await bcryptjs.compare(password, user.password);
  if (!isValidPassword) throw new Error("Password is incorrect");

  const token = generateToken(user.id);

  return { user, token };
};

export const profileUserService = async (userId) => {
  return await prisma.users.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      email: true,
      firstname: true,
      surname: true,
      created_at: true,
    },
  });
};

export const deleteUserService = async (userId) => {
  return await prisma.users.delete({
    where: {
      id: userId,
    },
  });
};

export const changePasswordUserService = async (
  userId,
  oldPassword,
  newPassword,
) => {
  const user = await prisma.users.findUnique({
    where: {
      id: userId,
    },
  });

  const isValidPassword = await bcryptjs.compare(oldPassword, user.password);
  if (!isValidPassword) throw new Error("Current password is incorrect");

  const password = await bcryptjs.hash(newPassword, 10);

  return await prisma.users.update({
    where: {
      id: userId,
    },
    data: {
      password,
    },
  });
};
