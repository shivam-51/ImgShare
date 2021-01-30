import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import "./styles/home.css";

class Home extends Component {
	state = {
		// Initially, no file is selected
		src: "http://placehold.it/180",
		zzzppp: false,
		exists: false,
	};

	onFileChange = (event) => {
		// Update the state
		this.src = event.target.image;
		let reader = new FileReader();
		this.exists = true;
		reader.onload = (e) => {
			this.setState({ src: e.target.result });
		};
		reader.readAsDataURL(event.target.files[0]);

		// console.log(this.state.src);
	};
	thissubmit = () => {
		// console.log("Submitting");
		const thisimage = {
			src: this.state.src,
		};
		// console.log("From home");
		// console.log(thisimage.src);
		axios
			.post("http://localhost:5000/image/add", thisimage)
			.then(() => console.log("Sent from Home.js"))
			.catch((err) => console.log(err));
	};
	call = () => {
		if (this.exists)
			return (
				<div>
					<img id="blah" src={this.state.src} alt="your pic"></img>
				</div>
			);
	};
	render() {
		return (
			<div className="home_page pt-5">
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
						<Link to="/" onClick={this.thissubmit}>
							<div className="box-3" type="submit" value="submit">
								<div className="btn btn-three">
									<span>Upload Image</span>
								</div>
							</div>
						</Link>
					</form>
					<div className="mt-3 pt-3">{this.call()}</div>
				</div>
			</div>
		);
	}
}

export default Home;
