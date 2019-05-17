import React, { Component } from "react";
import styled from "@emotion/styled"
import brunerLogo from "../images/bruner-logo-white.svg"
import brunerLogoDark from "../images/bruner-logo-dark.png"
import hamburger from "../images/hamburger.svg"
import rocket from "../images/pluto-success.png"
import cat from "../images/ginger-cat-upgrade.png"
import welcome from "../images/pluto-welcome.png"
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
		font-size: 22px;
		font-weight: 400;
		margin-left: 0;
	}
}
`

const StyledWacky = styled.section`

	.rocket {
		position: fixed;
		left: 3%;
		top: 20%;

		img {
			height: 250px;
			width: 250px;
		}
	}

	.cat {
		position: fixed;
		right: 40%;
		bottom: 5%;

		img {
			height: 370px;
			width: 370px;
		}
	}

	.welcome {
		position: fixed;
		right: 1%;
		top: 1%;

		img {
			height: 450px;
			width: 450px;
		}
	}


`

const Wacky = () => (
	<StyledWacky>
		<div className="rocket">
			<img src={rocket} alt="Rocket"  />
		</div>
		<div className="cat">
			<img src={cat} alt="Cat"  />
		</div>
		<div className="welcome">
			<img src={welcome} alt="Welcome"  />
		</div>
	</StyledWacky>
)
class Nav extends Component {

state = {
		isScrolled: false,
		mobileActive: false,
		pressed: [],
		code: 'james',
		success: false,
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
}

secret = e => {
	let [pressed, code] = [this.state.pressed, this.state.code]
	pressed.push(e.key)
	pressed.splice(-code.length - 1, pressed.length - code.length)

	if(pressed.join('') === code) {
		this.setState({
			success: true
		})
	} else {
		this.setState({
			success: false
		})
	}
	console.log(pressed);
}

componentDidMount() {
		window.addEventListener('scroll', this.checkY);
		window.addEventListener('keyup', this.secret)
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
								<a className=" hide-for-medium-down call" href="/">Call Now 1.888.888.888</a>
						</div>
						<div className="mobile-nav show-for-medium-down">
						<img src={ mobileActive ? hamburger : hamburger } alt="Hamburger" onClick={this.mobileMenu} className="show-for-medium-down" />
						</div>
				</section>
				{this.state.success
				? <Wacky />
				: ''
				}
		</StyledNav>
		)
}
}

export default Nav