import  Express  from "express";
import { addMechanic , findById, findAll, updateMechanic, deleteUser} from "../controllers/mechanic.js";
const router = Express.Router();

router.get('/', findAll);

router.get('/id/:id', findById);

router.post('/', addMechanic);

router.patch('/name/:name', updateMechanic);

router.delete('/:name', deleteUser);

export default router;