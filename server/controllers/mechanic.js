import Mechanic from "../models/mechanic.js";

export const addMechanic = (req, res)=>{
    try{
        const newMechenic = new Mechanic({
            name : req.body.Name,
            location : req.body.Location,
            email : req.body.Email,
            mobileNo : req.body.MobileNo,
            type : (req.body.Type).split(',')
        });
        newMechenic.save().then(()=>{
            res.send("data saved!");
        }).catch((error)=>{
            res.send(`data not saved ${error}`);
        })
    }catch(error){
        res.status(400).send("Cannot add data !");
    }
}

export const findById = async(req,res)=>{
    try{
        const mechanic = await Mechanic.findOne({"_id":req.params.id});
        res.status(200).send(mechanic);
    }catch(error){
        res.status(400).send("Cannot get data !");
    }
}

export const findAll = async(req,res)=>{
    try{
        const mechanics = await Mechanic.find();
        res.status(200).send(mechanics);
    }catch(error){
        res.status(400).send("Cannot get data !");
    }
}

export const updateMechanic = async(req,res)=>{
    try{
        const mechanic = await Mechanic.findOne({"name":req.params.name});
        Object.assign(mechanic,req.body);

        mechanic.save().then(()=>{
            res.send("data updated!");
        }).catch((error)=>{
            res.send(`data not updated! ${error}`);
        })
    }catch(error){
        res.status(400).send("Cannot add data !");
    }
}

export const deleteUser = async(req,res)=>{
    try{
        // const mechanic = await Mechanic.findOne({"name":req.params.name});
        Mechanic.deleteOne({"name":req.params.name}).then(()=>{
            res.status(200).send("data deleted!");
        }).catch((error)=>{
            res.send("data not deleted!");
        });
    }catch(error){
        res.status(400).send("Cannot add data !");
    }
}