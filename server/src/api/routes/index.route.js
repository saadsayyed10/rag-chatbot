import { Router } from "express";
import userRouter from "./users.route.js";
import chatRouter from "./chats.route.js";

const mainRouter = Router();

mainRouter.use("/users", userRouter);
mainRouter.use("/chats", chatRouter);

export default mainRouter;
