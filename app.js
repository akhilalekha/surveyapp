const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/Users"); // models need to be executed before services
require("./services/passport");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

const app = express();

app.use(
	cookieSession({
		//age of the cookie : 30 days in milliseconds
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
	console.log("Server started at port 5000");
});
