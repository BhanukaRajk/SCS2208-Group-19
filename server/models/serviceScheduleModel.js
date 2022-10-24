import mongoose from "mongoose";

const serviceScheduleSchema = mongoose.Schema({
    clientName:String,
    clientMobileNo:String,
    serviceStation:String,
    scheduleTime:Date
});

const serviceSchedule = mongoose.model('serviceSchedule',serviceScheduleSchema);

export default serviceSchedule;


