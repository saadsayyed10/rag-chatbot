import * as controller from "../controllers/users.controller.js";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/register", controller.registerUserController);
userRouter.post("/login", controller.loginUserController);

export default userRouter;
