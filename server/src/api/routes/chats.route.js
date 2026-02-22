import * as controller from "../controllers/chats.controller.js";
import { Router } from "express";
import { protectRoute } from "../../middleware/auth.middleware.js";

const chatRouter = Router();

chatRouter.post("/ask/ai", protectRoute, controller.askChatController);

export default chatRouter;
