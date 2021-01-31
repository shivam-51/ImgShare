const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
	src: {
		type: String,
		required: true,
	},
	uniqueID: {
		type: String,
		required: true,
	},
});

const Image = mongoose.model("Images1", ImageSchema);

module.exports = Image;
