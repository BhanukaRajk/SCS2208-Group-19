import express from "express";
// IMPORTING FROM CONTROLLERS
import {
    addRequest,
    findByClient,
    findByMechanic,
    acceptRequest,
    completeTask
} from "../controllers/repairJobs.js";

const router = express.Router();

router.get('/client/:client', findByClient);
router.get('/mechanic/:mechanic', findByMechanic);
router.post('/', addRequest);
router.patch('/location/:location', acceptRequest);
router.delete('/:mechanic', completeTask);

// EXPORTING ROUTER
export default router;