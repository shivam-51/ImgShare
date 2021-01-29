import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<footer className="bg-dark text-white p-5 text-center">
				<div>
					Made with{" "}
					<i className="fas fa-heart" style={{ color: "red" }}></i> by
					shivam
					<p>
						<del>Copyright 2021</del> Feel free to Copy!
					</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
