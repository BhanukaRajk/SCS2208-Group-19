import Express from "express";
const router = Express.Router();
import {findAll,addService,findServiceByID,deleteServiceSchedule,updateService} from '../controllers/serviceScheduleController.js';


router.get('/', findAll);


// this operation can be used "client"
router.post('/', addService);


// find Service Schedule By Id
// this operation can be used both "client" and "server station"
router.get('/:id', findServiceByID);


// delete Service Schedule
// this operation can be used "server station"
router.delete('/:id',deleteServiceSchedule);


// update Service Schedule
// this operation can be used both "client" and "server station"
router.patch('/:id',updateService);



export default router;