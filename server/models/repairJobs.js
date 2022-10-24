import mongoose from "mongoose";

const repairSchema = mongoose.Schema({
    client_name : {
        type : String,
        require : true
    },
    location : {
        type : String,
        require : true
    },
    client_mobile : String,
    vehicle_model : String,
    acceptance : {
        acceptedby : String,
        added_date : Date
    }


});

const repair = mongoose.model('repair', repairSchema);

export default repair;