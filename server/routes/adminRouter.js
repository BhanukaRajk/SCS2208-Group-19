import Express from "express";
import {
    findAdminById,
    findAllAdmins,
    addAdmin,
    updateAdminById,
    deleteAdminById,
} from "../controllers/admin.js";

const router = Express.Router();

router.get("/", findAllAdmins);

router.get("/id/:id", findAdminById);

router.post("/", addAdmin);

router.patch("/:id", updateAdminById);

router.delete("/:id", deleteAdminById);

export default router;
