import { Router } from "express";
import userRouter from "./users.route.js";

const mainRouter = Router();

mainRouter.use("/user", userRouter);

export default mainRouter;
