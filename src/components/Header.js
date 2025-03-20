import React from "react";

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
							<li><a class = "active" href = "index.html">Hem</a></li>
							<li><a href = "activities.html">Aktiviteter</a></li>
							<li><a href = "communities.html">Föreningar</a></li>
							<li><a href = "history.html">Historia</a></li>
							<li><a href = "about_us.html">Om oss</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;