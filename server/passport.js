import passport from 'passport';
import LocalStratergy from 'passport-local';
import bcrypt from 'bcrypt';
import User from './models/user.js';


passport.use(new LocalStratergy((username, password, done) => {
    // find specific user data for a username
    User.findOne({ email: username}, (error, user) => {
        if (error) { 
            return done(error); // error in getting data
        }
        if (!user) {
            // console.log("no user");
            return done(null, false); // no such user 
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) console.log(err); // error in comparing hashes
            if(result) {
                return done(null, user); // hashes matched correctly => success
            }
            else return done(null, false); // hashes not matched correctly 
        });
    });

}));

passport.serializeUser((data, done) => done(null, data._id));

passport.deserializeUser((id, done) => {
    done(null, User.findOne({ _id: id }), (err, user) => {
        if (err) console.log("Error getting data");
        else return user;
    });
});

export default passport;