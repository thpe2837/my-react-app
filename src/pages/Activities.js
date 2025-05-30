import React, { Component } from 'react';

import rosbergetImg from "../img/destinations/rösberget.png";
import fickfjardenImg from "../img/destinations/fickfjärden.png";
import batlaggningImg from "../img/destinations/båtläggning.png";
import spanhyvelImg from "../img/destinations/spånhyvel.png";

import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "Home | " + Config.SITE_TITLE;
const DESC = "React App for the village Bredvik, made as an assignment in the course Webbteknik för ingenjörer at UMU";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Activities extends Component {
	render() {
		return (
			<main>

				<Helmet>
					<title>{TITLE}</title>
					<link rel = "canonical" href="{CANONICAL}"/>
					<meta name="description" content=
					{DESC}/>
					<meta name="theme-color" content=
					{Config.THEME_COLOR}/>
				</Helmet>

				<button id="back-to-top">Till toppen</button>

				<div class = "introcontainer">
					<div class = "textcontainer">
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

				<div class = "calender">
					<h1>2025</h1>
					<div class="circle-container">
						<div class="event">
							<span class="label-event">Bredviksvasan<br />8 mars</span>
							<p class="event-description">En årlig skidtävling för hela familjen!</p>
						</div>
						<div class="event"> 
							<span class="label-event">Våffeldagen<br />25 mars</span>
							<p class="event-description">Kom och fira våffeldagen med oss!</p>
						</div>
						<div class="event">
							<span class="label-event">Majbrasa<br />30 april</span>
							<p class="event-description">Fira in våren med oss mitt i byn!</p>
						</div>
						<div class="event">
							<span class="label-event">Knytkalas<br />24 augusti</span>
							<p class="event-description">Vi njuter av sensommarkvällen tillsammans nere på Bäcknäset!</p>
						</div>
						<div class="event">
							<span class="label-event">Glöggmys<br />7 december</span>
							<p class="event-description">Vänta in tomten med oss den första advent!</p>
						</div>
					</div>
				</div>
		
				<div class="destinationcontainer">
					<h2>Utflyktsmål</h2>
					<div class = "pictures-activities">
						<div class="destination">
							<img src={rosbergetImg} alt="Rösberget"/>
							<h3>Rösberget</h3>
						</div>
						<div class="destination">
							<img src={fickfjardenImg} alt="Fickfjärden"/>
							<h3>Fickfjärden</h3>
						</div>
						<div class="destination">
							<img src={batlaggningImg} alt="Hammaren båtläggning"/>
							<h3>Hammaren båtläggning</h3>
						</div>
						<div class="destination">
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