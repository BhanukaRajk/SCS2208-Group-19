import repair from "../models/repairJobs.js";


export const findByClient = async (req, res) => {
    try {
        const repair_request = await repair.find({ "_id": req.params.client_name });
        res.status(200).send(repair_request);
    } catch (error) {
        res.status(400).send(`ERROR! Couldn't get data - \nerror: ${error}`);
    }
}


export const findByMechanic = async (req, res) => {
    try {
        const repair_request = await repair.find({ "_id": req.params.mechanic });
        res.status(200).send(repair_request);
    } catch (error) {
        res.status(400).send(`ERROR! Couldn't get data - \nerror: ${error}`);
    }
}


export const addRequest = (req, res) => {
    try {
        const newRequest = new repair({

            client_name: req.body.Name,
            location: req.body.Location,
            client_mobile: req.body.MobileNo,
            vehicle_model: req.body.Model
        });
        newRequest.save().then(() => {
            res.send("SUCCESS! Request saved +");
        }).catch((error) => {
            res.send(`ERROR! Request couldn't saved + \nerror: ${error}`);
        })
    } catch (error) {
        res.status(400).send(`ERROR! \nerror code: ${error}`);
    }
}


export const acceptRequest = async (req, res) => {
    try {
        const repair_request = await repair.findOne({ "name": req.params.name });
        Object.assign(repair_request, req.body);

        repair_request.save().then(() => {
            res.send("SUCCESS! Acceptance data saved +");
        }).catch((error) => {
            res.send(`ERROR! \nerror code: ${error}`);
        })
    } catch (error) {
        res.status(400).send("ERROR! Couldn't update record -");
    }
}


export const completeTask = async (req, res) => {
    try {
        repair.deleteOne({ "name": req.params.name }).then(() => {
            res.status(200).send("SUCCESS! Record deleted +");
        }).catch((error) => {
            res.send(`ERROR! \nerror code: ${error}`);
        });
    } catch (error) {
        res.status(400).send("ERROR! Couldn't delete record -");
    }
}