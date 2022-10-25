import express from "express";
// IMPORTING FROM CONTROLLERS
import {
    addStation,
    findStationById,
    findAllStations,
    updateStation,
    deleteStation
} from "../controllers/repairJobs.js";

const router = express.Router();

// ROUTES
router.get('/newstation', addStation);
router.get('/station/:id', findStationById);
router.post('/allstations', findAllStations);
router.patch('/id/:id', updateStation);
router.delete('/:id', deleteStation);

// EXPORTING ROUTER
export default router;