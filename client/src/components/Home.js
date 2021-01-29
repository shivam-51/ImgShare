import React, { Component } from "react";
import "./styles/home.css";

class Home extends Component {
	state = {
		// Initially, no file is selected
		src: "http://placehold.it/180",
		exists: false,
	};

	// On file select (from the pop up)
	onFileChange = (event) => {
		// Update the state
		this.src = event.target.image;
		let reader = new FileReader();
		this.exists = true;
		reader.onload = (e) => {
			this.setState({ src: e.target.result });
		};
		reader.readAsDataURL(event.target.files[0]);
		console.log(reader.result);
		console.log(event.target.files[0].name);
	};
	handleSubmit = () => {
		return (
			<div className="pt-5">
				<img id="blah" src={this.state.src} alt="your pic"></img>
			</div>
		);
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
				{/* <h1>Hi from Home</h1> */}
				<div>
					<form onSubmit={this.handleSubmit}>
						<input
							type="file"
							name="image_image"
							onChange={this.onFileChange}
							alt="add image"
						></input>
						<br />
						<br />
						<div className="box-3" type="submit" value="submit">
							<div className="btn btn-three">
								<span>Upload Image</span>
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
