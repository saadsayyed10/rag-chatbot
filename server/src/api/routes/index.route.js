import { Router } from "express";
import userRouter from "./users.route.js";

const mainRouter = Router();

mainRouter.use("/users", userRouter);

export default mainRouter;
