const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
require("./models/Users"); // models needs to be executed before services
require("./services/passport");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
	console.log("Server started at port 5000");
});
