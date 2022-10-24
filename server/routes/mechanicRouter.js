import Express from "express";
import {
    addMechanic,
    findMechanicById,
    findAllMechenics,
    updateMechanic,
    deleteMechanic,
} from "../controllers/mechanic.js";

const router = Express.Router();

router.get("/", findAllMechenics);

router.get("/id/:id", findMechanicById);

router.post("/", addMechanic);

router.patch("/id/:id", updateMechanic);

router.delete("/:id", deleteMechanic);

export default router;
