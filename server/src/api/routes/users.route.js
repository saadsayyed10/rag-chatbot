import * as controller from "../controllers/users.controller.js";
import { Router } from "express";
import { protectRoute } from "../../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.post("/register", controller.registerUserController);
userRouter.post("/login", controller.loginUserController);

userRouter.get("/profile", protectRoute, controller.profileUserController);

userRouter.put(
  "/change-password",
  protectRoute,
  controller.changePasswordUserController,
);

userRouter.delete(
  "/delete-account",
  protectRoute,
  controller.deleteUserController,
);

export default userRouter;
