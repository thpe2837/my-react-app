import React, { Component } from 'react';

import rosbergetImg from "../img/destinations/rösberget.png";
import fickfjardenImg from "../img/destinations/fickfjärden.png";
import batlaggningImg from "../img/destinations/båtläggning.png";
import spanhyvelImg from "../img/destinations/spånhyvel.png";

import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "Aktiviteter | " + Config.SITE_TITLE;
const DESC = "Sida om de aktiviteter som sker i byn Bredvik";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Activities extends Component {
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

				<button id="back-to-top">Till toppen</button>

				<div className = "introcontainer">
					<div className = "textcontainer">
						<h1>Aktiviteter</h1>
						<br />
						<p>Välkommen till Bredviks aktiviteter! Här kan du läsa om årets planerade 
							evenemang och upptäcka områdets fina utflyktsmål. Vi anordnar gemensamma 
							sammankomster där både gamla och nya vänner kan mötas, såsom knytkalas, 
							glöggmys och andra traditionsrika firanden.</p>
						<br />
						<p>För dig som vill utforska naturen finns flera spännande besöksmål i närheten. 
							Ta en tur till Rösberget och upplev den vackra utsikten, eller besök 
							Fickfjärden där en fiskebåt finns tillgänglig för alla som vill prova 
							fiskelyckan. Oavsett om du föredrar avkoppling vid vattnet eller gemenskap 
							vid våra evenemang, finns det något för alla att se fram emot i Bredvik!</p>
					</div>
				</div>

				<div className = "calender">
					<h1>2025</h1>
					<div className="circle-container">
						<div className="event">
							<span className="label-event">Bredviksvasan<br />8 mars</span>
							<p className="event-description">En årlig skidtävling för hela familjen!</p>
						</div>
						<div className="event"> 
							<span className="label-event">Våffeldagen<br />25 mars</span>
							<p className="event-description">Kom och fira våffeldagen med oss!</p>
						</div>
						<div className="event">
							<span className="label-event">Majbrasa<br />30 april</span>
							<p className="event-description">Fira in våren med oss mitt i byn!</p>
						</div>
						<div className="event">
							<span className="label-event">Knytkalas<br />24 augusti</span>
							<p className="event-description">Vi njuter av sensommarkvällen tillsammans nere på Bäcknäset!</p>
						</div>
						<div className="event">
							<span className="label-event">Glöggmys<br />7 december</span>
							<p className="event-description">Vänta in tomten med oss den första advent!</p>
						</div>
					</div>
				</div>
		
				<div className="destinationcontainer">
					<h2>Utflyktsmål</h2>
					<div className = "pictures-activities">
						<div className="destination">
							<img src={rosbergetImg} alt="Rösberget"/>
							<h3>Rösberget</h3>
						</div>
						<div className="destination">
							<img src={fickfjardenImg} alt="Fickfjärden"/>
							<h3>Fickfjärden</h3>
						</div>
						<div className="destination">
							<img src={batlaggningImg} alt="Hammaren båtläggning"/>
							<h3>Hammaren båtläggning</h3>
						</div>
						<div className="destination">
							<img src={spanhyvelImg} alt="Spånhyvel i spånbäcken"/>
							<h3>Spånhyvel i spånbäcken</h3>
						</div>	
					</div>
				</div>

			</main>
		);
	}
}
	
export default Activities;