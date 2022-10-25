import express from "express";
// IMPORTING FROM CONTROLLERS
import {
    addStation,
    findStationById,
    findAllStations,
    updateStation,
    deleteStation
} from "../controllers/station.js";

const router = express.Router();

// ROUTES
router.post('/', addStation);
router.get('/:id', findStationById);
// router.post('/allstations', findAllStations);
router.get('/', findAllStations);
router.patch('/:id', updateStation);
router.delete('/:id', deleteStation);





// EXPORTING ROUTER
export default router;