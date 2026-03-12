import e from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const userRouter = e.Router();

// Route for user registration
userRouter.post('/register', registerUser);

// Route for user login
userRouter.post('/login', loginUser);

export default userRouter;
