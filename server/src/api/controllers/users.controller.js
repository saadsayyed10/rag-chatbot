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

export const loginUserController = async (req, res) => {
  const { email, password } = req.body;
  const data = { email, password };

  if (!data) {
    return res.status(500).json({ error: "All fields are required" });
  }

  try {
    const { user, token } = await usersService.loginUserService(
      email,
      password,
    );
    res
      .status(200)
      .json({ message: "User logged in", token: token, data: user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const profileUserController = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized: No token found" });
    }

    const user = await usersService.profileUserService(req.user.id.toString());
    res.status(200).json({ data: user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
