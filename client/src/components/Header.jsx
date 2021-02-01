import React, { Component } from "react";
import { connect } from "react-redux";
import "./Header.css";

class Header extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<a href="/" className="left brand-logo">
							Survey App
						</a>
						<ul id="nav-mobile" className="right">
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
function mapStateToProps(state) {
	return { auth: state.auth };
}
export default connect(mapStateToProps)(Header);
