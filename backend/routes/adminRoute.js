import e from "express";
import { addDoctor, loginAdmin } from "../controllers/adminController.js"; // Ensure correct paths
import upload from "../middlewares/multer.js"; // Multer for file upload
import authAdmin from "../middlewares/authAdmin.js"; // Middleware for admin authentication
import { changeAvailablity } from "../controllers/doctorController.js";

const adminRouter = e.Router();

// Route to add a doctor (requires authentication and file upload)
adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor);

// Route to log in an admin
adminRouter.post('/login', loginAdmin);

// Route to change doctor availability (requires authentication)
adminRouter.post('/change-availability', authAdmin, changeAvailablity);

export default adminRouter;
