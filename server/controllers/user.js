import User from "../models/user.js";
import bcrypt from "bcrypt";
import passport from "../passport.js";

const saltRounds = 10;

export const registerUser = (req, res) => {
    // save user data to database
    if (req.body.password == req.body.passconf) {
        // bcrypt.genSalt(saltRounds, (err, salt) => {
            // bcrypt.hash(req.body.password, salt, (err, hash) => {
                const newUser = new User({
                    email: req.body.username,
                    // password: hash,
                    password: req.body.password,
                    type: req.body.type
                });
                newUser
                    .save()
                    .then(() => {
                        res.status(200).send("User registered !");
                    })
                    .catch((error) => {
                        res.status(404).send(error.message);
                    });
            // });
        // });
    } else {
        res.status(400).send("Passwords does't match ! ");
    }
};

export const loginUser = passport.authenticate("local", {
    successRedirect: "/auth/success", // redirect to profile if success
    failureRedirect: "/", // redirect back to login if faliure
});


export const logoutUser = (req, res) => {
    // destroy the session data of the user
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(req.session);
            res.redirect("/");
        }
    });
};

export const successLogin = (req, res) => {
    res.status(200).send(`logged in`);
};

export const getUser = async (req, res) => {
    try {
        const user = await User.findOne(
            { email: req.params.email },
            { password: 0 }
        );
        res.status(200).send(user);
    } catch (err) {
        res.status(404).send("cannot get data !");
    }
};
