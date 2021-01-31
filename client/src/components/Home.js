import React, { Component } from "react";

import axios from "axios";
import "./styles/home.css";

class Home extends Component {
	state = {
		// Initially, no file is selected
		src: "http://placehold.it/180",
		Uid: "84615548",
		exists: false,
	};
	uniqueID = () => {
		return Math.floor(Math.random() * Date.now());
	};

	onFileChange = (event) => {
		// Update the state
		// var val = this.uniqueID();
		// console.log(val.toString(36));
		this.src = event.target.image;
		let reader = new FileReader();
		this.exists = true;
		reader.onload = (e) => {
			this.setState({
				src: e.target.result,
			});
		};
		reader.readAsDataURL(event.target.files[0]);

		// console.log(this.state.src);
	};
	thissubmit = () => {
		// console.log("Submitting");
		var val = this.uniqueID().toString(36);
		console.log(val.toString(36));
		const thisimage = {
			src: this.state.src,
			Uid: val,
		};
		axios
			.post("http://localhost:5000/image/add", thisimage)
			.then((res) => {
				if (res) {
					window.location = "/" + val;
					console.log("Sent from Home.js");
				}
			})
			.catch((err) => console.log(err));
	};
	call = () => {
		if (this.exists)
			return (
				<div>
					<img
						className="imghome imageclass"
						id="blah"
						src={this.state.src}
						alt="your pic"
					></img>
				</div>
			);
	};
	render() {
		return (
			<div className="home_page pt-5 container">
				<div>
					<form>
						<input
							type="file"
							name="image_image"
							onChange={this.onFileChange}
							alt="add image"
						></input>
						<br />
						<br />
						<div onClick={this.thissubmit}>
							<div className="box-3" type="submit" value="submit">
								<div className="btn btn-three">
									<span>Upload Image</span>
								</div>
							</div>
						</div>
					</form>
					<div className="mt-3 pt-3">{this.call()}</div>
				</div>
			</div>
		);
	}
}

export default Home;
