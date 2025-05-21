import React from "react";
import {NavLink, Link} from "react-router-dom";

const Header = () => {
	return (
		<header>
			<div class = "headercontainer">
				<div class = "innerheader">
					<div class = "logocontainer">
						<a href="index.html">
							<h1>BREDVIK</h1>
						</a>
					</div>
					<div class = "hamb-menu">
						<div class="bar"></div>
						<div class="bar"></div>
						<div class="bar"></div>
					</div>
					
					<nav id="menu" class="menu">
						<ul>
							<li><NavLink to = "/" exact ActiveClassName = "active" >Hem</NavLink></li>
							<li><NavLink to = "/activities" ActiveClassName = "active" >Aktiviteter</NavLink></li>
							<li><NavLink to = "/communities"ActiveClassName = "active" >Föreningar</NavLink></li>
							<li><NavLink to = "/history" ActiveClassName = "active" >Historia</NavLink></li>
							<li><NavLink to = "/about" ActiveClassName = "active" >Om oss</NavLink></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;