import express from 'express';
import {
	addClient,
	findAll,
	findByName,
	deleteClient,
	updateClient,
} from "../controllers/Client.js";
const router = express.Router()

router.get('/', findAll);

router.get("/:name", findByName);

router.post('/', addClient);

router.patch("/id/:id", updateClient);

router.delete('/:id', deleteClient);

export default router;