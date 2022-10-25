import mongoose from "mongoose";

// SCHEMA
const stationSchema = mongoose.Schema({

    // SERVICE STATION NAME
    name : {
        // DATA TYPE IS STRING AND CANNOT BE NULL
        type : String,
        require : true
    },

    // MOBILE NUMBER OF THE SERVICE STATION
    mobile : String,

    // EMAIL OF THE SERVICE STATION
    email : String,

    // ADDRESS OF THE SERVICE STATION
    // address : {
        // NUMBER, STREET NAME AND TOWN
    //     number : String,
    //     street : String,
    //     town : String
    // }

});

const station = mongoose.model('station', stationSchema);

export default station;