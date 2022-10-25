import Client from "../models/Client.js";

export const addClient = (req, res) => {
    try {
        let vehicles = req.body.vehicles.split(',')
        let vehiclesArray = vehicles.map((vehicle) => {
            vehicle = vehicle.split(':')
            let vehicleObject = { 'vehicleNo': vehicle[0].trim(), 'vehicleModel': vehicle[1].trim() };
            return vehicleObject;
        })
		const newClient = new Client({
			name: req.body.name,
			email: req.body.email,
            mobileNo: req.body.mobileNo,
            // DBB 1234:CT 100,CCC 3456:Wagon R
            vehicles: vehiclesArray
        });
        newClient
			.save()
            .then(() =>  res.send("data saved!") )
            .catch((error) =>  res.send("data not saved") );
	} catch (error) {
		res.status(404).send("Can not add data!");
	}
};

export const findAll = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).send(clients);
    } catch (error) {
        res.status(404).send("Can not find data!");
    }
};

export const findByName = async (req, res) => {
    try {
		const clients = await Client.find({ name: req.params.name });
		res.status(200).send(clients);
	} catch (error) {
		res.status(404).send("Can not find data!");
	}
}

export const updateClient = async (req, res) => {
    try {
        const client = await Client.findOne({ _id: req.params.id });
        let vehicles = req.body.vehicles.split(",");
		let vehiclesArray = vehicles.map((vehicle) => {
			vehicle = vehicle.split(":");
			let vehicleObject = {
				vehicleNo: vehicle[0].trim(),
				vehicleModel: vehicle[1].trim(),
			};
			return vehicleObject;
        });
        const updatedClient = {
			name: req.body.name,
			email: req.body.email,
			mobileNo: req.body.mobileNo,
			vehicles: vehiclesArray,
		};
        Object.assign(client, updatedClient);

        client
            .save()
            .then(() => res.send("Data updated!"))
            .catch((error) =>  res.send("Data not updated!") )
    } catch (error) {
        res.status(404).send("Can not update data!");
    }
}

export const deleteClient = async (req, res) => {
    try {
        const client = await Client.findOne({ _id: req.params.id });
        Client
            .deleteOne({ _id: client._id })
            .then(() =>  res.status(200).send('Client deleted succesfully!') )
            .catch((error) =>  res.status(404).send('Client not deleted!') )
    } catch (error) {
        res.status(404).send("Can not delete!");
    }
}