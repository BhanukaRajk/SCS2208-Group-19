import mechanic from "./routes/mechanicRouter.js";
import serviceSchedule from "./routes/serviceScheduleRouter.js";
import repair from "./routes/repairJobsRouter.js";
import client from "./routes/client.js";
import Express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import admin from "./routes/adminRouter.js";
import passport from "./passport.js";
import session from "express-session";
import userRouter from "./routes/userRouter.js";

dotenv.config();
const username = process.env.DB_USERNAME || "admin";
const passwd = process.env.DB_PASSWORD || "1234567890";

const app = Express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use(
    session({
        secret: "authentication",
        resave: false,
        saveUninitialized: false,
        cookie: {},
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/client', client);
app.use("/repair", repair);
app.use("/mechanic", mechanic);
app.use("/admin", admin);
app.use("/serviceSchedule", serviceSchedule);
app.use("/auth", userRouter);

const CONNECTION_url = `mongodb+srv://${username}:${passwd}@cluster0.tfcjplj.mongodb.net/?retryWrites=true&w=majority`;

mongoose
    .connect(CONNECTION_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connection is established and running"))
    .catch((err) => console.log(err.message));

app.listen(process.env.PORT || 3001, () =>
    console.log("server started on port 3001")
);
