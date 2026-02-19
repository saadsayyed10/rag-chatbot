import * as usersService from "../services/users.service.js";

export const registerUserController = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const data = { firstName, lastName, email, password };

  if (!data) {
    return res.status(500).json({ error: "All fields are required" });
  }

  try {
    const { user, token } = await usersService.registerUserService(
      firstName,
      lastName,
      email,
      password,
    );
    res
      .status(201)
      .json({ message: "User registered", token: token, data: user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
