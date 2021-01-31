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
						{/* <a href="/" data-target="mobile-demo" class="sidenav-trigger">
							<i class="material-icons">menu</i>
						</a> */}
						<ul id="nav-mobile" className="right">
							<li>
								<a href="/">Login with Google</a>
							</li>
						</ul>
					</div>
				</nav>
				{/* <ul class="sidenav" id="mobile-demo">
					<li>
						<a href="/">Login with Google</a>
					</li>
					<li>
						<a href="/">Components</a>
					</li>
				</ul> */}
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
