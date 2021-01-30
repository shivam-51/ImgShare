const router = require("express").Router();
const Image = require("../model/imgmodel");

// router.get("/", (req, res) => {
// 	console.log("From home");
// 	Image.find()
// 		.then((thisImage) => res.json(thisImage))
// 		.catch((err) => res.status(400).json("Error: " + err));
// });

router.route("/all").get((req, res) => {
	console.log("From all");
	Image.find()
		.then((images) => res.json(images))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/get/:id").get((req, res) => {
	Exercise.findById(req.params.id)
		.then((thisimage) => res.json(thisimage))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.get("/test", (req, res) => res.json({ msg: "Testing Successful" }));

router.route("/add").post((req, res) => {
	newImage = new Image({ src: req.body.src });
	console.log(newImage.src === req.body.src);
	console.log(newImage.src);

	// console.log("From add");
	// console.log(typeof req.body.src);
	// console.log(typeof newImage.src);
	// console.log(atob(newImage.src));
	// console.log(Buffer.from(newImage.src).toString("base64"));
	// console.log(newImage.src);
	// var thumb = new Buffer.from(newImage.src).toString("base64");
	// console.log(thumb);
	// console.log(newImage.src);
	console.log("From add");

	newImage
		.save()
		.then((newImage) => res.json(newImage))
		.catch((err) => console.log(err));
	console.log("Done");
});

module.exports = router;
