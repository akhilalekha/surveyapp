import React, { Component } from "react";
import { connect } from "react-redux";
import "./Header.css";

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			//request pending
			case null:
				return;
			case false:
				//logged out
				return (
					<li>
						<a href="/auth/google">Login with Google</a>
					</li>
				);
			default:
				//logged in
				return (
					<li>
						<a href="/api/logout">Logout</a>
					</li>
				);
		}
	}
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
							{this.renderContent()}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return { auth: state.auth };
}
export default connect(mapStateToProps)(Header);
