import React, { Component } from "react";
import styled from "@emotion/styled"
import brunerLogo from "../images/bruner-logo-white.svg"
import brunerLogoDark from "../images/bruner-logo-dark.png"
import hamburger from "../images/hamburger.svg"
// import xburger from "../images/xburger.png"
import { small, mediumDown } from "./mediaQuery"

const StyledNav = styled.nav`
position: fixed;
top: -50px;
width: 100%;
height: 145px;
display: flex;
justify-content: space-between;
align-items: center;
color: white;
padding: 0;
transition: 0.3s ease-in-out 0.0s;

${mediumDown} {
	background-color: white;
	border-bottom: 1px solid #009fe3;
	height: 140px;
	z-index: 1;

	a {
		color: #009fe3;
	}
}

&.light {
background-color: white;
border-bottom: 1px solid #009fe3;
z-index: 1;

a {
		color: #009fe3;
}
}

.nav-contain {
	${small} {
		margin-bottom: 0;
		padding-bottom: 0;
	}
}

.flex {
	width: 100%;
	display: flex;
	justify-content: space-around;

	${mediumDown} {
		justify-content: space-between;
	}
}

.nav-items {
	${mediumDown} {
		display: none;
		visibility: hidden;


	}
}

.open {
	${mediumDown} {
		position: fixed;
		height: 300px;
		width: 100%;
		top: 90px;
		left: 0;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: space-around;
		background-color: white;

		a {
			margin-left: 0;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1;
			border-bottom: 1px solid #009fe3;

			&:hover {
				color: rgb(250, 68, 114);
			}
		}

	}
}

.mobile-nav {
	width: 50px;

	img {
		height: 24px;
	}
}

img {
height: 40px;

	&.logo {
		min-width: 124px;
	}
}

div {
	display: flex;
	align-items: center;
}

a {
	font-size: 16px;
	margin-left: 28px;

	&.call {
			font-size: 18px;
			font-weight: bold;
			margin-left: 0;
	}
}
`

class Nav extends Component {

state = {
		isScrolled: false,
		mobileActive: false,
}

checkY = () => {
		if( window.pageYOffset === 0 ) {
				this.setState({
					isScrolled: false
				})
		} else {
				this.setState({
					isScrolled: true
				})
		}
}

mobileMenu = () => {
	this.setState({
		mobileActive: !this.state.mobileActive
	})
	console.log(this.state.mobileActive);
}

componentDidMount() {
		window.addEventListener('scroll', this.checkY);
}

render() {
		let scrolled = this.state.isScrolled ? 'light' : ''
		let mobileActive = this.state.mobileActive

		return (
		<StyledNav className={scrolled}>
				<section className="container nav-contain flex">
						<div>
								<img src={scrolled ? brunerLogoDark : brunerLogo } alt="Bruner Logo" className="hide-for-medium-down no-margin logo"/>
								<img src={ brunerLogoDark } alt="Bruner Logo" className="show-for-medium-down logo"/>
								<div className={mobileActive ? 'open' : 'nav-items'}>
									<a href="/">Plans</a>
									<a href="/">Speeds</a>
									<a href="/">About Bruner Dynamics</a>
									<a href="/">Equipment</a>
								</div>
						</div>
						<div className="hide-for-medium-down">
								<a className=" hide-for-medium-down call" href="/">Call Now: 1.888.888.888</a>
						</div>
						<div className="mobile-nav show-for-medium-down">
						<img src={ mobileActive ? hamburger : hamburger } alt="Hamburger" onClick={this.mobileMenu} className="show-for-medium-down" />
						</div>
				</section>
		</StyledNav>
		)
}
}

export default Nav