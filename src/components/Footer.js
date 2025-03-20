import React from "react";

const Footer = () => {
	return (
		<footer>
			<hr />
			<div class = "footercontainer">
				<div class = "footernav">
					<ul>
						<li><a class = "active" href = "index.html">Hem</a></li>
						<li><a href = "activities.html">Aktiviteter</a></li>
						<li><a href = "communities.html">Föreningar</a></li>
						<li><a href = "history.html">Historia</a></li>
						<li><a href = "about_us.html">Om oss</a></li>
					</ul>
				</div>
			</div>
			<div class = "footerbottom">
				<p>Copyright &copy;2025; Designad av <span class = "designer">Thilde Persson</span></p>
			</div>
		</footer>
	);
}

export default Footer;