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

export const updateUserService = async () => {};

export const deleteUserService = async () => {};

export const changePasswordUserService = async () => {};

export const forgotPasswordUserService = async () => {};
