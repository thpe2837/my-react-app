import React, { Component } from 'react';

import koVideo from "../img/kor.mp4";
import eventDateImg from "../img/event/date_index.png";
import eventImg from "../img/event/knytkalas.png";

import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "Hem | " + Config.SITE_TITLE;
const DESC = "Hem sida för byn Bredvik med information om nästkommande aktivitet";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Home extends Component {
  render() {
    return (
		<main>

			<Helmet>
				<title>{TITLE}</title>
				<link rel = "canonical" href={CANONICAL}/>
				<meta name="description" content=
				{DESC}/>
				<meta name="theme-color" content=
				{Config.THEME_COLOR}/>
			</Helmet>

			<div class = "videocontainer">
				<video class = "backgroundvideo" autoplay muted loop>
					<source src = {koVideo} type = "video/mp4"/>
				</video>
			</div>

			<div class="spacer"></div>

			<div class = "infocontainer">
				<div class = "imagecontainer-index">
					<div class = "date-index">
						<img src={eventDateImg} alt="Datum för eventet"/>
					</div>
					<div class = "image-index">
						<img src = {eventImg} alt = "Knytkalas på Bäcknäset"/>
					</div>
				</div>
				<div class = "textcontainer-index">
					<h2>Knytkalas på Bäcknäset</h2>
					<br />
					<p>Välkommen på knytkalas den 24 augusti nere vid hamnen i Bäcknäset! 
						Ta med något gott att äta och dela med andra. Vi njuter av sensommarkvällen 
						tillsammans med god mat, trevligt sällskap och fin utsikt över vattnet. </p>
				</div>
			</div>
			<div class="facebooklink">
				<a href="https://www.facebook.com/groups/131148950364255" target="_blank" rel="noopener noreferrer">Vill du se mer av oss? Följ Bredviks Bygdegårdsförening på Facebook!</a>
			</div>

			<button id="showMessageButton">Visa meddelande</button>

		</main>
    );
  }
}

export default Home;