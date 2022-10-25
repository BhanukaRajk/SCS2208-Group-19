import Express from "express";
import { getUser, loginUser, logoutUser, registerUser, successLogin } from "../controllers/user.js";
const router = Express.Router();

router.post("/register", registerUser);

// passport authentication for login 
router.post("/login", loginUser);

// for logout
router.get('/logout', logoutUser);

router.get("/success", successLogin);

router.get("/get/:email", getUser);

export default router;
