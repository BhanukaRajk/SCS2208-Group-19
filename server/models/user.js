import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    type:String
});

const user = mongoose.model("user", userSchema);

export default user;
