const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(
	bodyParser.urlencoded({
		limit: "10mb",
		extended: false,
	})
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//DB
const db = require("./config/keys").mongoURI;
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB Connected"))
	.catch((err) => console.log(err));

const images = require("./routes/image");

app.get("/", (req, res) => res.send("At home from Backend"));

//ROUTES
app.use("/image", images);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
