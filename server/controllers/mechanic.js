import Mechanic from "../models/mechanic.js";

export const addMechanic = (req, res) => {
	try {
		const newMechenic = new Mechanic({
			name: req.body.name,
			location: req.body.loc,
			email: req.body.email,
			mobileNo: req.body.mob,
			type: req.body.type.split(","),
		});
		newMechenic
			.save()
			.then(() => {
				res.send("data saved!");
			})
			.catch((error) => {
				res.send("data not saved");
			});
	} catch (error) {
		res.status(400).send("Cannot add data !");
	}
};

export const findByName = async (req, res) => {
	try {
		const mechanic = await Mechanic.findOne({ name: req.params.name });
		res.status(200).send(mechanic);
	} catch (error) {
		res.status(400).send("Cannot get data !");
	}
};

export const findAll = async (req, res) => {
	try {
		const mechanics = await Mechanic.find();
		res.status(200).send(mechanics);
	} catch (error) {
		res.status(400).send("Cannot get data !");
	}
};

export const updateMechanic = async (req, res) => {
	try {
		const mechanic = await Mechanic.findOne({ name: req.params.name });
		Object.assign(mechanic, req.body);

		mechanic
			.save()
			.then(() => {
				res.send("data updated!");
			})
			.catch((error) => {
				res.send("data not updated!");
			});
	} catch (error) {
		res.status(400).send("Cannot add data !");
	}
};

export const deleteUser = async (req, res) => {
	try {
		const mechanic = await Mechanic.findOne({ name: req.params.name });
		Mechanic.deleteOne({ name: mechanic.name })
			.then(() => {
				res.status(200).send("data deleted!");
			})
			.catch((error) => {
				res.send("data not deleted!");
			});
	} catch (error) {
		res.status(400).send("Cannot add data !");
	}
};
