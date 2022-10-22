import  Express  from "express";
import { addMechanic , findByName, findAll, updateMechanic, deleteUser} from "../controllers/mechanic.js";
const router = Express.Router();

router.get('/', findAll);

router.get('/:name', findByName);

router.post('/', addMechanic);

router.patch('/:name', updateMechanic);

router.delete('/:name', deleteUser);

export default router;