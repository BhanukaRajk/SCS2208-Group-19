import repair from "../models/repairJobs.js";

// READ CLIENT REQUESTS FROM CLIENT DASHBOARD
export const findByClient = async (req, res) => {
    try {
        const clientView = await repair.find({ "client_name": req.params.client });
        res.status(200).send(clientView);
    } catch (error) {
        res.status(400).send(`ERROR! Couldn't get data - \nerror: ${error}`);
    }
}

// READ CLIENT REQUESTS FROM MECHANICS DASHBOARD
export const findByMechanic = async (req, res) => {
    try {
        const mechanicView = await repair.find({ "_id": req.params.mechanic });
        res.status(200).send(mechanicView);
    } catch (error) {
        res.status(400).send(`ERROR! Couldn't get data - \nerror: ${error}`);
    }
}

// ADD REQUEST BY CLIENT
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

// ACCCEPT REQUEST BY MECHANIC
export const acceptRequest = async (req, res) => {
    try {
        const acceptRepair = await repair.findOne({ "name": req.params.name });
        Object.assign(acceptRepair, req.body);

        acceptRepair.save().then(() => {
            res.send("SUCCESS! Acceptance data saved +");
        }).catch((error) => {
            res.send(`ERROR! \nerror code: ${error}`);
        })
    } catch (error) {
        res.status(400).send("ERROR! Couldn't update record -");
    }
}

// REMOVE COMPLETED REQUESTS
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