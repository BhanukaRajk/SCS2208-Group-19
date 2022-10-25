import Station from "../models/station.js";

// CRUD - CREATE
export const addStation = (req, res) => {
    try {
        const newStation = new Station({

            name: req.body.name,
            mobile: req.body.mobile,
            email: req.body.email,
            // address : {
            //     number: req.body.Number,
            //     street: req.body.Street,
            //     town: req.body.Town
            // }
        });
        newStation
            .save()
            .then(() => {
                res.send("SUCCESS! data saved");
            })
            .catch((error) => {
                res.send(`AN ERROR OCCURRED! data not saved ${error}`);
            });
    } catch (error) {
        res.status(404).send("ERROR! Cannot add data");
    }
};

// CRUD - READ
export const findStationById = async (req, res) => {
    try {
        const station = await Station.findOne({ _id: req.params.id });
        res.status(200).send(station);
    } catch (error) {
        res.status(404).send("ERROR! Cannot get data");
    }
};

// CRUD - READ
export const findAllStations = async (req, res) => {
    try {
        const stations = await Station.find();
        res.status(200).send(stations);
    } catch (error) {
        res.status(404).send(`404 REQUEST ERROR! : ${error}`);
    }
};

// CRUD - UPDATE
export const updateStation = async (req, res) => {
    try {
        const station = await Station.findOne({ "_id": req.params.id });
        Object.assign(station, req.body);

        station
            .save()
            .then(() => {
                res.send("SUCCESS! data updated");
            })
            .catch((error) => {
                res.send(`ERROR OCCURRED IN UPDATE! : ${error}`);
            });
    } catch (error) {
        res.status(404).send(`404 REQUEST ERROR! : ${error}`);
    }
};

// CRUD - DELETE
export const deleteStation = (req, res) => {
    try {
        Station.deleteOne({ "_id": req.params.id })
            .then(() => {
                res.status(200).send("SUCCESS! data has been deleted");
            })
            .catch((error) => {
                res.status(404).send(`ERROR OCCURRED IN DELETION! : ${error}`);
            });
    } catch (error) {
        res.status(404).send(`404 REQUEST ERROR! : ${error}`);
    }
};
