import mongoose from "mongoose";

const mechanicSchema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    location : String,
    email : String,
    mobileNo : String,
    type : [String]
});

const mechanic = mongoose.model('mechanic',mechanicSchema);

export default mechanic;