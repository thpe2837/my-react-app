import React, { Component } from 'react';

import bygdegardenImg from "../img/communities/bygdegården.png";
import bysamfallighetenImg from "../img/communities/bysamfällighet.png";
import jaktvardsklubbenImg from "../img/communities/jakt.png";

import Config from "../Config.json";

const TITLE = "Home | " + Config.SITE_TITLE;
const DESC = "React App for the village Bredvik, made as an assignment in the course Webbteknik för ingenjörer at UMU";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Communities extends Component {
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

				<div className="introcontainer">
					<div className="textcontainer">
						<h1>Föreningar</h1>
						<p>Bredvik är en plats där historia, tradition och framtid möts. Genom våra lokala 
							föreningar skapar vi en samlingspunkt för alla som bor här och besöker oss. 
							Här hittar du allt från bysamfälligheten som ansvarar för gemensamma frågor, 
							till jaktvårdsklubben som bevarar våra jakttraditioner, och bygdegården som 
							är en central mötesplats för fest och aktiviteter.</p>
						<p>Tillsammans håller vi våra traditioner levande och skapar nya minnen. Oavsett 
							om du är intresserad av att engagera dig i föreningarna, hyra bygdegården 
							för ett evenemang eller delta i en jaktaktivitet, är du alltid välkommen 
							att vara en del av Bredviks liv och utveckling.</p>
					</div>
				</div>

				<div className="pictures-communities">
					<div className="communitie" data-target="bydgegardsforeningen">
						<img src={bygdegardenImg} alt="Bygdegården i Bredvik" />
						<h3>Bygdegårdsföreningen</h3>
					</div>
					<div className="communitie" data-target="bysamfalligheten">
						<img src={bysamfallighetenImg} alt="Bredviks bysamfällighet" />
						<h3>Bysamfälligheten</h3>
					</div>
					<div className="communitie" data-target="jaktvardsklubben">
						<img src={jaktvardsklubbenImg} alt="Jaktvårdsklubben" />
						<h3>Jaktvårdsklubben</h3>
					</div>
				</div>

				<div id="bydgegardsforeningen" className="communitiescontainer">
					<div className="textcontainer-communities">
						<h2>Bygdegårdsföreningen</h2>
						<p>Bredviks Bygdegårdsförening bildades 1952 och ansvarar för drift och 
							underhåll av bygdegården. Föreningen erbjuder en samlingsplats för 
							möten, fester och andra aktiviteter i byn.</p>
						<p>Föreningen finansieras genom medlemsavgifter och bidrag. Som medlem 
							stödjer du verksamheten och får möjlighet att påverka bygdegårdens utveckling.</p>
					</div>

					<div id="bysamfalligheten" className="textcontainer-communities">
						<h2>Bysamfälligheten</h2>
						<p>Bysamfälligheten ansvarar för gemensamma frågor som rör Bredvik, inklusive 
							förvaltning av samägda marker och resurser.</p>
						<h3>Kontaktpersoner</h3>
						<ul>
							<li><strong>Frågor om Bäcknäsets fritidsområde:</strong> Kontakta någon i arbetsgruppen, byarådet eller arrendekommittén.</li>
							<li><strong>Frågor om byns samfällen:</strong> Kontakta byåldersmannen eller någon i skogsvårdsgruppen.</li>
							<li><strong>Anmälan av arrangemang:</strong> Skicka information till nyhetsbevakningsgruppen.</li>
						</ul>
						<p>Du kan även skicka information via e-post till <a href="mailto:info@bredvik.nu">info@bredvik.nu</a>.</p>
					</div>

					<div id="jaktvardsklubben" className="textcontainer-communities">
						<h2>Jaktvårdsklubben</h2>
						<p>Bredviks Jaktvårdsklubb bildades år 1958 och har sedan dess varit en central 
							del av jaktgemenskapen i området.</p>
						<h3>Skjutbanan</h3>
						<p>Bredviks Jaktskytteklubb har en skjutbana utrustad med både fasta måltavlor 
							och en rörlig "älg" för träningsskytte.</p>
						<h3>Slakthus</h3>
						<p>Vid bygdegården finns ett slakthus som får användas av jaktklubbens medlemmar.</p>
					</div>
				</div>
			</main>
		);
	}
}

export default Communities;
