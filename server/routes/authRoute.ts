import { Router } from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post("/register", protect, registerUser);
authRouter.post("/login", protect, loginUser);

export default authRouter;
