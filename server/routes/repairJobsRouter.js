import express from "express";
import {
    addRequest,
    findByClient,
    findByMechanic,
    acceptRequest,
    completeTask
} from "../controllers/repairJobs.js";

const router = express.Router();