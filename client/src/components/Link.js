import React, { Component } from "react";
import axios from "axios";
import "./styles/showImages.css";

class Link extends Component {
	constructor(props) {
		super(props);

		this.state = { src: "", isLoading: true };
		// this.getfunction = this.getfunction.bind(this);
		this.Loaded = this.Loaded.bind(this);
		this.Loading = this.Loading.bind(this);
	}
	componentDidMount() {
		this.isLoading = true;
		axios
			.get("http://localhost:5000/image/" + this.props.match.params.id)
			.then((response) => {
				this.setState({
					src: response.data.src,
					isLoading: false,
				});
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	Loaded() {
		return (
			<img
				className="img-fluid imageclass"
				alt=" "
				src={this.state.src}
			/>
		);
	}

	Loading() {
		return (
			<div className="spinner">
				<div className="cube1"></div>
				<div className="cube2"></div>
			</div>
		);
	}
	render() {
		let el;
		if (this.state.isLoading) {
			el = <this.Loading />;
		} else {
			el = <this.Loaded />;
		}
		return (
			<div>
				<div className="p-5 Show_Image">{el}</div>
			</div>
		);
	}
}

export default Link;
