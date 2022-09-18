import Express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";


const app = Express();
app.use(bodyParser.json());
app.use(cors());

const CONNECTION_url ="db link from connections";


mongoose.connect (CONNECTION_url, {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then (() => console.log("connection is established and running"))
.catch((err) => console.log(err.message));

app.listen( 3001, () => console.log("server started on port 3001"));