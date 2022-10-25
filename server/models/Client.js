import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: String,
	mobileNo: String,
	vehicles: [{ vehicleNo: String, vehicleModel: String }]
});

const Client = mongoose.model("Client", clientSchema);

export default Client;
