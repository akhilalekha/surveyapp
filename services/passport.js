const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback"
		},
		(accessToken, refreshToken, profile, done) => {
			console.log(profile);
			User.findOne({ googleId: profile.id }).then((foundUser) => {
				if (foundUser) {
					//we already have the same user
					done(null, foundUser);
				} else {
					new User({ googleId: profile.id }).save().then((user1) => {
						done(null, user);
					});
				}
			});
		}
	)
);
