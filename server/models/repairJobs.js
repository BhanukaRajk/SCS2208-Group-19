import mongoose from "mongoose";

// SCHEMA
const repairSchema = mongoose.Schema({

    // REQUESTING CLIENT'S NAME
    client_name : {
        // DATA TYPE IS STRING AND CANNOT BE NULL
        type : String,
        require : true
    },

    // VEHICLE'S CURRENT LOCATION
    location : {
        // DATA TYPE IS STRING AND CANNOT BE NULL
        type : String,
        require : true
    },

    // MOBILE NUMBER OF THE CLIENT
    client_mobile : String,

    // VEHICLE MODEL OF THE CLIENT
    vehicle_model : String,

    // RECORD ACCEPTANCE BY A MECHANIC
    acceptance : {
        // MECHANIC'S NAME MOBILE NUMBER AND ACCCEPTED TIME
        acceptedby : String,
        mechanic_mobile : String,
        added_date : Date
    }

});

const repair = mongoose.model('repair', repairSchema);

export default repair;