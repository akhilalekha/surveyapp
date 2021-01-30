import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<a href="/" className="left brand-logo">
							Survey App
						</a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								<a href="/">Login with Google</a>
							</li>
						</ul>
					</div>
				</nav>
				<header>
					<h3>Welcome to Survey App</h3>
				</header>
				<div className="container">
					<a href="/auth/google">Sign in with Google</a>
				</div>
			</div>
		);
	}
}
