import React, { Component } from 'react';

import ansvarigImg from "../img/Ansvarig.png";

import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "Om oss | " + Config.SITE_TITLE;
const DESC = "Om oss sida för byn Bredvik";
const CANONICAL = Config.SITE_DOMAIN + "/";

class AboutUs extends Component { 
	render() {
		return(
			<main>

				<Helmet>
					<title>{TITLE}</title>
					<link rel = "canonical" href={CANONICAL}/>
					<meta name="description" content=
					{DESC}/>
					<meta name="theme-color" content=
					{Config.THEME_COLOR}/>
				</Helmet>

				<div className = "introcontainer">
					<div className = "textcontainer-about_us">
						<h1>Om oss</h1>
						<br />
						<p>Bredviks historia är ett resultat av ett EU-finansierat projekt, LEADER II, som syftar till att stödja utvecklingsinitiativ på landsbygden. Projektet leddes av föreningen Stad och Land – Hand i hand i Västerbotten.</p>
						<br />
						<p>Redan 1997 började några av byns invånare, med Rolf Holmgren i spetsen, att träffas för att samla och dokumentera Bredviks historia. De skapade projektbeskrivningen "Bredviks Historia på Data", och i december samma år skickades ansökan om EU-stöd till Stad och Land – Hand i hand. Ansökan godkändes i januari 1998 med målet att forska, sammanställa och dokumentera byns historia genom modern datateknik, för att sedan publicera materialet på cd-skiva, internet och i bokform.</p>
						<br />
						<p>Projektet involverade bybor i alla åldrar, som träffades för att minnas, dela berättelser och visa gamla fotografier. Ett viktigt steg var att erbjuda en datautbildning för att öka IT-kompetensen bland byborna. Under projektets gång anlitades IT-konsulten Ulf Johansson från Vallen-IT för att hjälpa till med hemsidans struktur och för att utbilda några bybor i hur man överför materialet till hemsidan.</p>
						<br />
						<p>Den 1 maj 2000, under Bredviks byastämma, lanserades hemsidan och blev tillgänglig för hela världen. Den gav en enkel och modern plattform för att ta del av Bredviks historia. Sedan dess har hemsidan kontinuerligt uppdaterats med ny information, och idag kan besökare läsa om byns historia och se gamla bilder, samt få information om aktuella aktiviteter i byn.</p>
						<br />
						<p>Vi hoppas att du ska ha glädje av Bredviks historia och vi välkomnar gärna nya bidrag och kompletteringar. För som vi alltid säger: Historien tar aldrig slut – det som händer idag är historia imorgon.</p>
						<br />
						<p>Välkommen till Bredviks historia!</p>
					</div>
				</div>

				<div className = "infocontainer">
					<div className = "textcontainer">
						<h2>Ansvariga</h2>
						<br />
						<p>Projektet "Bredviks Historia på Data" har drivits av en grupp engagerade bybor, med Rolf Holmgren som projektledare. Tillsammans med andra bybor har de arbetat för att samla in och dokumentera byns historia.</p>
						<br />
						<p>Stöd har även erhållits från LEADER II-projektet och föreningen Stad och Land – Hand i hand i Västerbotten, som hjälpte till att finansiera och administrera projektet.</p>
						<br />
						<p>För att säkerställa den tekniska sidan av projektet anlitades IT-konsulten Ulf Johansson från Vallen-IT, som hjälpte till med hemsidans struktur och utbildade bybor i att överföra material till nätet.</p>
						<br />
						<p>Hemsidan har nu uppdaterats och fått ett nytt utseende, med hjälp av Thilde Persson, som är född och uppvuxen i Bredvik. Thilde har arbetat med att ge sidan en modernare design och förbättrad användarupplevelse, så att både historia och aktuella aktiviteter lätt kan nås av bybor och besökare.</p>
						<br />
						<p>Vi vill tacka alla som varit involverade för deras tid, engagemang och bidrag till att göra Bredviks historia tillgänglig för alla.</p>
					</div>
					<div className = "imagecontainer-about_us">
						<img src = {ansvarigImg} alt = "Ansvarig person för hemsidan"/>
					</div>
				</div>

				<div className = "formcontainer">
					<div className = "textcontainer-about_us">
						<h2>Kontakta oss</h2>
						<br />
						<p>Har du en fråga, vill dela med dig av information eller bara komma 
							i kontakt med oss?</p>
						<p>Fyll i formuläret nedan, så återkommer vi så snart som möjligt!</p>
					</div>

					<div className = "contactform">
						<form>
							<label for="name">För- och efternamn</label>
							<input type="text" name="name" id="name"/>

							<label for="mail">E-postadress</label>
							<input type="text" name="mail" id="mail"/>

							<label for="number">Telefonnummer</label>
							<input type="text" name="number" id="number"/>

							<label for="message">Meddelande</label>
							<textarea name="message" id="message"></textarea>

							<input type="submit" value="Skicka"/>
						</form>
					</div>
				</div>
			</main>
		);
	}
}

export default AboutUs;