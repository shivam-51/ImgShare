import React, { Component } from "react";
import axios from "axios";

const IMAGES = (props) => {
	console.log(props.image);
	console.log(props.image.src);
	// const ss = `data:${props.image.src.type};base64,${Buffer.from(
	// 	props.image.src.data
	// ).toString("base64")}`;
	// var thumb = new Buffer.from(props.image.src.data).toString("base64");
	// console.log(thumb);
	// console.log(Buffer.from(props.image.src.data).toString("base64"));
	return (
		<div>
			<img alt=" " src={props.image.src} />
		</div>
	);
};

class Link extends Component {
	constructor(props) {
		super(props);

		this.state = { images: [] };
	}
	componentDidMount() {
		axios
			.get("http://localhost:5000/image/all")
			.then((response) => {
				this.setState({ images: response.data });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	imageList() {
		// console.log("Here");
		return this.state.images.map((currentimage) => {
			return <IMAGES image={currentimage} key={currentimage._id} />;
		});
	}

	render() {
		return (
			<div>
				<h1>Hi from Link</h1>
				{this.imageList()}
			</div>
		);
	}
}

export default Link;
