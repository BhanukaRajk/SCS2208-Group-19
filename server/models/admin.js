import mongoose from "mongoose";

const adimnSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: String,
    mobileNo: String,
});

const admin = mongoose.model("admin", adimnSchema);

export default admin;
