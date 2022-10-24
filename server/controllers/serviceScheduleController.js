import serviceSchedule from "../models/serviceScheduleModel.js";


export const findAll = async(req, res) => {
    try{
        const findAllServiceSchedules = await serviceSchedule.find();
            res.status(200).send(findAllServiceSchedules);
    }catch(error){
        res.status(400).send(`There is no such service schedule! ${error}`);
    }
}

export const addService = (req, res) => {
    const addServiceSchedule = new serviceSchedule({
        clientName: req.body.clientName,
        clientMobileNo: req.body.clientMobileNo,
        serviceStation: req.body.serviceStation,
        scheduleTime: req.body.scheduleTime
    });
    addServiceSchedule.save().then(()=>{
        res.send("Added service schedule successfully!");
    }).catch((error)=>{
        res.send(`Service schedule not saved ${error}`);
    })
}

export const findServiceByID = async(req, res) => {
    try{
        const findServiceScheduleById = await serviceSchedule.findOne({"_id":req.params.id});
        res.status(200).send(findServiceScheduleById);
    }
    catch(error){
        res.status(400).send(`There is no such service schedule! ${error}`);
    }
}

export const deleteServiceSchedule = (req, res) => {
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
}


export const updateService =  async(req, res) => {
    try{
        const updateServiceSchedule = await serviceSchedule.findOne({"_id":req.params.id});
        Object.assign(updateServiceSchedule,req.body);

        updateServiceSchedule.save().then(()=>{
            res.send("Service schedule updated!");
        }).catch((error)=>{
            res.send(`Service schedule not updated! ${error}`);
        })
    }catch(error){
        res.status(400).send("Cannot update such service schedule !");
    }
}




