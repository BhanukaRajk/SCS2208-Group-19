import Express from "express";
const router = Express.Router();
import serviceSchedule from "../models/serviceScheduleModel.js";

// { addServiceSchedule, findById, findAll, updateServiceSchedule, deleteServiceSchedule }


router.post('/', (req, res) => {

    const addServiceSchedule = new serviceSchedule({
        clientName: req.body.cName,
        clientMobileNo: req.body.cMobileNo,
        serviceStation: req.body.sStation,
    });
    addServiceSchedule.save().then(()=>{
        res.send("Added service schedule successfully!");
    }).catch((error)=>{
        res.send(`Service schedule not saved ${error}`);
    })
});


router.get('/', async(req, res) => {
    try{
        const findAllServiceSchedules = await serviceSchedule.find();
        res.status(200).send(findAllServiceSchedules);
    }
    catch(error){
        res.status(400).send(`There is no such service schedule! ${error}`);
    }
});



router.get('/:id', async(req, res) => {
    try{
        const findServiceScheduleById = await serviceSchedule.findOne({"_id":req.params.id});
        res.status(200).send(findServiceScheduleById);
    }
    catch(error){
        res.status(400).send(`There is no such service schedule! ${error}`);
    }
});


router.delete('/:id', async(req, res) => {
    try{
        serviceSchedule.deleteOne({"_id":req.params.id}).then(()=>{
            res.status(200).send("Service schedule deleted!");
        }).catch((error)=>{
            res.status(400).send(`Service schedule not deleted! ${error}`);
        })    
    }
    catch(error){
        res.status(400).send(`There is no such service schedule! ${error}`);
    }
});













export default router;