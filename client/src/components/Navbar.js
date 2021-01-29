import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark pl-5 pr-5">
				<Link to="/" className="navbar-brand ml-5 pl-5 pr-5 mb-0 h1">
					ImgShare
				</Link>
				<div className="form-inline my-2 my-lg-0">
					<a href="https://github.com/shivam-51" target="blank">
						<i className="fab fa-github fa-2x"></i>
					</a>
					<a href="https://facebook.com/heyshivam51" target="blank">
						<i class="fab fa-facebook fa-2x"></i>
					</a>
				</div>
			</nav>
		);
	}
}

export default Navbar;
