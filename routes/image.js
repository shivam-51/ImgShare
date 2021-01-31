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

router.route("/:id").get((req, res) => {
	console.log("Here");
	Image.findOne({ uniqueID: req.params.id })
		.then((thisimage) => res.json(thisimage))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.get("/test", (req, res) => res.json({ msg: "Testing Successful" }));

router.route("/add").post((req, res) => {
	newImage = new Image({ src: req.body.src, uniqueID: req.body.Uid });

	newImage
		.save()
		.then((newImage) => res.json(newImage))
		.catch((err) => console.log(err));
	console.log("Done");
});

module.exports = router;
