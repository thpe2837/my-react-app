import React, { Component } from 'react';

import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "Historia | " + Config.SITE_TITLE;
const DESC = "Historia om Bredvik samt berättelser från bybor";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Communities extends Component {
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
					<div className="textcontainer">
						<h1>Historia</h1>
						<br />
						<p>Välkommen till Bredviks historia! Här kan du utforska viktiga händelser, 
							personer och förändringar som har präglat vår by genom tiderna. Vi har 
							samlat information inom olika ämnesområden för att ge en helhetsbild av 
							Bredviks utveckling, från de tidigaste tiderna till dagens samhälle.</p>
						<br />
						<p>Använd kategorierna nedan för att navigera mellan olika historiska aspekter 
							som viktiga årtal, befolkning, natur, jakt, fiske, jordbruk och mycket mer. 
							Varje kategori innehåller spännande berättelser och fakta som hjälper oss 
							att förstå hur Bredvik har format sig och fortsatt att växa genom generationer.</p>
						<br />
						<p>Vänligen klicka på en kategori för att börja din resa genom Bredviks historia!</p>	
					</div>
				</div>

				<div className="category-grid">
					<button className="category-btn" data-target="viktiga-artal">Viktiga årtal</button>
					<button className="category-btn" data-target="fastigheter">Fastigheter</button>
					<button className="category-btn" data-target="berattelser">Berättelser</button>
					<button className="category-btn" data-target="befolkning">Befolkning</button>
					<button className="category-btn" data-target="natur">Natur</button>
					<button className="category-btn" data-target="jakt">Jakt</button>
					<button className="category-btn" data-target="fiske">Fiske</button>
					<button className="category-btn" data-target="fritid">Fritid</button>
					<button className="category-btn" data-target="jordbruk">Jordbruk</button>
					<button className="category-btn" data-target="skogsbruk">Skogsbruk</button>
					<button className="category-btn" data-target="hantverk">Hantverk</button>
					<button className="category-btn" data-target="it">IT</button>
				</div>

				<section id="viktiga-artal" className="timeline-section">
					<h2>Viktiga årtal</h2>
					<div className="timeline">
						
						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1500 - 500 f.Kr</h3>
							<p>Rösgravar på rösberget.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1000 e.Kr</h3>
							<p>Bebyggelse rester på Hammaren: båtlänningar, tomtstenar, hörnstenar.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1413</h3>
							<p>"Järnäsbrevet" lagmansdom om rågång från Korsmyrholmen - Gårdstjärnshögen - Krike.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1494</h3>
							<p>Håknäsbrevet undertecknat i Bredvik.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1500</h3>
							<p>Lögdebrevet undertecknat av bland annat Olof Jonson, nämndeman från Bredvik.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1535</h3>
							<p>Fem hemman.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1642</h3>
							<p>Kyrkoherden Forselius köpte 20 markland.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1646</h3>
							<p>Jacob Stenklyfts karta ritades.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1682</h3>
							<p>Komminister Jonas Atmarius bodde i byn.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1705</h3>
							<p>Första officiella kartan uppfördes över byn.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1730 - 1750</h3>
							<p>Det föddes 31 barn i byn, varav 13 barn (42%) omkom före 2 års ålder.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1765</h3>
							<p>Storskifte av inägorna, innefattade åtta gårdar.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1802</h3>
							<p>Storskifte utmarken.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1817 - 1818 samt 1834</h3>
							<p>Johan Larsson Wilkund från Bredvik satt som riksdagsman.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1843</h3>
							<p>13 hemman, 9 torp.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1850</h3>
							<p>Johan Ersson utsågs till nämndeman.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1856 - 1863</h3>
							<p>Laga skifte 15 hemman.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1859</h3>
							<p>Bredvik ingick i skolrote nr.5.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1895</h3>
							<p>Bredviks skola byggdes.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1934</h3>
							<p>Den första sommarstugan byggdes av G.A. Näslund.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1938</h3>
							<p>Sista termninen i Bredviks skola, som nu är nedlagd.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1967</h3>
							<p>Taro och Inga-Bodil Gadelius köpte hus i byn.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>1997</h3>
							<p>Projektet "Bredviks Historia på Data" startade med ett möte mellan bybor.</p>
							</div>
						</div>
		
						<div className="timeline-item">
							<div className="timeline-content">
							<h3>2000</h3>
							<p>Hemsidan för Bredviks historia lanserades under byastämman.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>2002</h3>
							<p>Bredvik är nu uppkopplad mot omvärlden via fiberanslutet internet.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>2006 - 2008</h3>
							<p>Telia 3G-mast kom till byn.</p>
							</div>
						</div>

						<div className="timeline-item">	
							<div className="timeline-content">
							<h3>2015 - 2016</h3>
							<p>Bygge av nytt pumphus, omkoppling i ledningsnät samt inkoppling.</p>
							</div>
						</div>
		
						<div className="timeline-item">
							<div className="timeline-content">
							<h3>2025</h3>
							<p>Hemsidan uppdaterades och fick ett nytt utseende av Thilde Persson.</p>
							</div>
						</div>

					</div>
				</section>	

				<section id="fastigheter" className="property-history">
					<h2>Fastigheternas historia</h2>
					<details>
						<summary>Bredvik 1:3</summary>
						<p>Anders Öberg, Öresund, född 1827, död 1907, gift med Märta Kristina 
							Selinder, född 1815, död 1903, köpte hemmanet av Mattias Johansson år 1855.</p>
						<br />
						<p>Systersonen Erik Öberg, Järnäs, övertar hemmanet.</p>
						<br />
						<p>Anders Öberg och hans hustru blev födorådstagare.</p>
						<br />
						<p>Erik Öberg, född 1852, död 1930 gift med Nanna Larsdotter, född 1866, 
							död 1936. Bördig från Örträsk.</p>
						<p><strong>Barn:</strong></p>
						<ul>
							<li>Albin, född 1889</li>
							<li>Evert, född 1898</li>
						</ul>
						<br />
						<p>Hemmanet delades 1917/1918 och Albin och Evert blev ägare.</p>
						<p>Evert Öberg gifte sig med Hilda Holmgren, född 1891, död 1973.</p>
						<p>Makarna Öberg hade inga egna barn, men adopterade Asta, född 1937.</p>
						<p>De som idag äger Bredvik 1:3 är Asta och Ragnvald Boström. Genom arv 
							övertog de hemmanet 1975.</p>
					</details>
					<details>
						<summary>Bredvik 3:2</summary>
						<p><strong>Fastigheten Bredvik 3:2</strong></p>
						<p>Ägare för närvarande är Allan Söderberg (f. 1946) och Kjell Åke Söderberg (f. 1963),  
							som 1984 köpte den av sina föräldrar Mari och Folke Söderberg. Därvid avstyckades  
							gårdstomten 3:6 till systern Ulla (f. 1948), bosatt i Hädanberg.</p>
						<br />
						<p>Folke köpte tillsammans med sin bror Ingvar hemmanet 1937, och 1943 övertog  
							Folke Ingvars del.</p>

						<p>Mellan 1952 och 1967 var Folke tjurhållare i byn. Tjurföreningen hade bildats 1932,  
							och den sista tjuren sändes till slakt 1967.</p>

						<p>Folke och Ingvars föräldrar, Edit och Konrad Söderberg, köpte hemmanet 1913 av  
							Per Erik Nygren (f. 1841) och hans hustru Karolina Andersdotter (f. 1853).  
							De fick fastebrev på fastigheten 1869.</p>
						<br />
						<p><strong>Avstyckningar av fastigheten nr 3:</strong></p>
						<ul>
							<li>3:4 till Erik Olof Forsberg (1890)</li>
							<li>3:5 till Nils August Forsberg (1890)</li>
							<li>Bredvik 3:3 till August Jonsson (1894)</li>
							<li>3:2 till Konrad Söderberg (1913)</li>
						</ul>
						<br />
						<p>Konrad Söderberg köpte dessutom Bredvik 5:8 Fällvik nr 1 (7,111 ha) av Jonas Larsson,  
							som hade fått lagfart på fastigheten 1883. År 1975 köpte Allan Söderberg det s.k.  
							"Jon Lars"-torpet. Nuvarande ägare är Per Davidsson.</p>

						<p>Per Erik Nygren och hans fru hade inga barn, men Edit (f. Wiklund) från granngården  
							hade de uppfostrat. Konrad Söderberg kom från Brattfors.  
							Edit och Konrad gifte sig den 25 augusti 1912.</p>

						<p><strong>Barn till Edit och Konrad Söderberg:</strong></p>
						<ul>
							<li>Ragnhild (f. 1915), g. Norrman</li>
							<li>Folke (f. 1917)</li>
							<li>Ingvar (f. 1918)</li>
							<li>Alvar (f. 1921)</li>
							<li>Dagny (f. 1923), g. Lundberg</li>
							<li>Ivan (f. 1925)</li>
						</ul>

						<p>De hade en bror som dog av en svår brännskada (skållad av hett vatten).</p>
						<br />
						<p>På ett foto från 1934 är familjen samlad med hästen Pålle. Eftersom de höll på att  
							baka i bryggstugan kom Ragnhild och mor Edit direkt därifrån.</p>
						<br />
						<p>Besök av släktingar skedde också. Från Brattfors kom Leonard Söderberg med en bil  
							av märket Overland, en av de första bilarna i Nordmaling. Barnen fotograferades  
							framför bilen omkring 1930.</p>

						<p><strong>Barnen framför bilen:</strong></p>
						<ul>
							<li>Ragnhild, 15 år</li>
							<li>Folke, 13 år</li>
							<li>Ingvar, 12 år</li>
							<li>Alvar, 9 år</li>
							<li>Dagny, 7 år</li>
							<li>Ivan, 5 år</li>
						</ul>
						<br />
						<p>1921–22 fick byn en ny landsväg.</p>
						<br />
						<p><strong>Vad barnen gjorde senare i livet:</strong></p>
						<ul>
							<li>Ragnhild gifte sig med Holger Norrman, hemmansägare i Stavsjöholm.</li>
							<li>Folke blev byn trogen som hemmansägare och stuveriarbetare.</li>
							<li>Ingvar utbildade sig till snickare och etablerade sig i Vännäs som målarmästare  
								på 1950-talet.</li>
							<li>Alvar flyttade till Västergötland och arbetade som byggnadsarbetare.</li>
							<li>Dagny gifte sig med Gunnar Lundberg och blev bondmora i Degernäs.</li>
							<li>Ivan började som målarlärling, utbildade sig sedan vid Karlskoga praktiska  
								läroverk och fick mästarbrev efter sju års praktik.  
								Han specialiserade sig på renovering av gamla möbler och guldförgyllning.</li>
						</ul>
					</details>
					<details>
						<summary>Bredvik 3:3</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 4:5 & 6:26</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 5:23</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 5:38</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 6:6</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 6:19</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 6:56</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 6:63</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 6:65</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 7:17</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 7:18</summary>
						<p>Text om fastigheten...</p>
						<img src="house.jpg" alt="Bild på fastigheten"/>
					</details>
					<details>
						<summary>Bredvik 7:22</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 7:29</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 12:1</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 13:1</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 14:1</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 19:1</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 21:1</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 22:1</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 23:1</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 30:2</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 33:2</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 34:1</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 34:8</summary>
						<p>Text om fastigheten...</p>
					</details>
					<details>
						<summary>Bredvik 35:1</summary>
						<p>Text om fastigheten...</p>
					</details>
				</section>

				<section id="berattelser" className="story-section">
					<h2>Berättelser och kuriosa från bybor</h2>
					<div className="stories">
						
						<div className="story-item">
							<h3>Dialektala uttryck</h3>
							<table>
								<tr>
									<th>Uttryck</th>
									<th>Betydelse</th>
								</tr>
								<tr><td>Rättåt</td><td>På ett enkelt sätt. Enkelt (om maträtt)</td></tr>
								<tr><td>Ligg på ohôgan</td><td>Ängslas för att inte vakna – sova lite oroligt</td></tr>
								<tr><td>Vrangt</td><td>Svårt</td></tr>
								<tr><td>Ja´ha´sä nocktôm, ja´få int´tome</td><td>Jag har så bråttom så jag får inte tid (till det)</td></tr>
								<tr><td>Smogn (å)</td><td>Minskar</td></tr>
								<tr><td>Vrex</td><td>Vidlyftig – någon som är överallt</td></tr>
								<tr><td>Åttabak</td><td>Baklänges</td></tr>
								<tr><td>Skryp</td><td>Odryg</td></tr>
								<tr><td>Kurjös</td><td>Egennyttig, lättretlig</td></tr>
								<tr><td>Bri ket</td><td>Lättretlig (arg för ingenting)</td></tr>
								<tr><td>Schardôggen</td><td>Inte riktigt pigg</td></tr>
								<tr><td>O´mörn</td><td>Nyss vaken, inte kommit igång riktigt</td></tr>
								<tr><td>G´van</td><td>Mullvad</td></tr>
								<tr><td>Nåk</td><td>Inget vidare, ful</td></tr>
								<tr><td>Ovôlen</td><td>Slarvig, ovarsam</td></tr>
								<tr><td>Bettne (om potatis)</td><td>Konstig smak (sötaktig)</td></tr>
								<tr><td>Schäv</td><td>Sågspån</td></tr>
								<tr><td>Hä skäv</td><td>Det skaver</td></tr>
								<tr><td>Illiste</td><td>Klurig, smart</td></tr>
								<tr><td>Gvaln</td><td>Skräp</td></tr>
								<tr><td>Ströjd</td><td>Jagad, jäktad</td></tr>
								<tr><td>Bárnan</td><td>Hemskt eller storslaget</td></tr>
								<tr><td>Hä´va´barnan</td><td>Det var hemskt, det var "inte illa"!</td></tr>
								<tr><td>Knus</td><td>Nysa</td></tr>
							</table>
						</div>

						<div className="story-item">
							<div className="story-content">
								<h3>Asta Boströms minnen om mat</h3>
								<br />
								<p><strong>Vardagsmat</strong></p>
								<ul>
									<li>Bryta, blöta (sôlen)</li>
									<li>Kornmjölsgröt med lingonsylt</li>
									<li>Salt sik eller strömming på morgonen, ibland med vanlig vitsås</li>
									<li>På sommaren – gräslök i såsen</li>
									<li>Kokt potatis (mandel-) och hela ansjovisar ur burk</li>
									<li>Långfil (tättmjölk) sommartid</li>
									<li>Fläsk – saltat i tunnor. Ister till stekning</li>
									<li>Tunnbröd – bakades höst och vår</li>
									<li>Blodbröd</li>
									<li>Enbärsdricka, svagdricka</li>
									<li>Kärnmjölk</li>
									<li>Stuvad lake</li>
									<li>Falukorv – användes i pyttipanna, lådor och stuvade makaroner</li>
									<li>Pannkaka, plättar, våfflor med hemkokad sylt</li>
									<li>Kalvdans (fatost) av råmjölk</li>
									<li>Får i kål – såsen smaksattes med kokt kaffe</li>
									<li>Köttsoppa med klimp och kokt potatis</li>
									<li>Ärtsoppa med fläsk</li>
									<li>Bruna bönor och fläsk</li>
									<li>Risgrynsvälling, risgrynsgröt och risgrynspudding</li>
									<li>Klimpvälling (klimpmjölka)</li>
									<li>Havrevälling med plommon</li>
									<li>Blåbärsgröt, vetemjölsgröt</li>
									<li>Svinhare med sås och konserverade ärtor och morötter</li>
									<li>Kåldolmar</li>
									<li>Kroppkakor och palt</li>
									<li>Biff á la Lindström</li>
									<li>Köttbullar</li>
									<li>Kokt eller stekt höns</li>
									<li>Kalops, dillkött, kalvfrikassé</li>
									<li>Äggstanning</li>
									<li>Potatismos, rotmos</li>
									<li>Olika "lådor" av rester</li>
									<li>Man kärnade smör hemma</li>
									<li>Surströmming på hösten med mandelpotatis och tunnbröd</li>
								</ul>
								<br />
								<p><strong>Efterrätter</strong></p>
								<ul>
									<li>Klappgröt</li>
									<li>Vattlingon med vispad grädde</li>
									<li>Fruktkräm av blandad, torkad frukt</li>
									<li>Rabarberkräm</li>
									<li>Sagogrynssoppa med russin – barnsängsmat</li>
									<li>Ris á la Malta vid jul</li>
									<li>Fattiga riddare</li>
									<li>Äppelkaka med vaniljsås</li>
									<li>Lingonpäron</li>
									<li>Äppelris</li>
								</ul>
								<br />
								<p><strong>Godis</strong></p>
								<ul>
									<li>Hemkokad knäck och chokladsockerkarameller</li>
								</ul>
								<br />
								<p><strong>Julmat</strong></p>
								<ul>
									<li>Torkad fårfiol</li>
									<li>Färskt, mjukt bröd av rågsikt</li>
									<li>Pressylta, julkorv, kalvsylta med rödbetor</li>
									<li>Skinka med plommon, senap, äppelmos</li>
									<li>Revbenspjäll</li>
									<li>Lutfisk</li>
									<li>Grisfötter i gelé</li>
									<li>Dopp i grytan</li>
									<li>Hemlagad leverpastej</li>
									<li>Risgrynsgröt (med en mandel i)</li>
									<li>Ris á la Malta</li>
								</ul>
								<br />
								<p><strong>Frukt</strong></p>
								<ul>
									<li>Äpplen, apelsiner</li>
									<li>Fikon och russin</li>
								</ul>
								<br />
								<p><strong>Kakor</strong></p>
								<ul>
									<li>Formar (skålen)</li>
									<li>Pepparkakor</li>
									<li>Uppåkrakakor</li>
									<li>Finska pinnar</li>
									<li>Rullrån och kavlade rån</li>
									<li>Plättbakelser</li>
									<li>Drömmar</li>
									<li>Smörkrokar</li>
									<li>Smördegsstjärnor med plommon</li>
									<li>Rågsiktskakor</li>
									<li>Fyllda formar (med sylt)</li>
									<li>Vetebröd</li>
									<li>Sockerkakor</li>
								</ul>
								<br />
								<p><strong>Vad man odlade</strong></p>
								<ul>
									<li>Potatis – mest mandel</li>
									<li>Gräslök, dill, persilja</li>
									<li>Morötter och ärtor</li>
									<li>Rödbetor för inläggning</li>
									<li>Gul lök</li>
									<li>Svarta och röda vinbär</li>
									<li>Korn</li>
									<li>Jordgubbar – odlades av Rickard Forsbergs och Kalle Sundströms</li>
								</ul>
							</div>
						</div>

						<div className="story-item">
							<div className="story-content">
								<h3>Berättelsen om Inga-Bodil Vetterlund-Gadelius</h3>
								<br />
								<p><strong>Världen är så stor</strong></p>
								<p>Det är Lille Bror Söderlundhs visa "Du Lasse, Lasse liten" som har givit titeln åt skådespelerskan Inga-Bodil Vetterlunds memoarer. Hon tillhör den generation som gick på Dramatens elevskola i början av 1930-talet tillsammans med Ingrid Bergman, Gunnar Björnstrand, Gunnar Sjöberg och många andra. Hon medverkade flitigt i många av den tidens filmer (som vi då och då får se i TV-repriser ) och spelade på teatrar som Oscars, Blanche, Svenska Teatern i Åbo och hon deltog inte minst i Riksteaterns turnéer under andra världskriget.</p>
								<br />
								<p>Men livet har för Inga-Bodil Vetterlund-Gadelius också haft en annan, mindre offentlig sida som hustru till en affärsman och värdinna i ett krävande hushåll i Japan där handelsfirman Gadelius & Co kom att få sin största verksamhet.</p>
								<br />
								<p>Som utlandssvensk och kvinna har Inga-Bodil Vetterlund mycket att säga om Japan och levnadsförhållandena där omedelbart efter kriget. Från sitt internationella perspektiv tycker hon också åtskilligt om Sverige och om utvecklingen de senaste årtiondena. Slutvinjetten blir en kärleksförklaring till svensk natur och genuin svensk folklighet - så som Inga-Bodil och hennes familj funnit den i sitt älskade Nordmaling.</p>
								<br />
								<p><strong>Bredvik, Nordmaling</strong></p>
								<p>Av en ren slump har vi numera hamnat i Bredvik, Nordmaling. En bra motvikt till Tokyo. Någonstans i mitt bakhuvud har alltid funnits drömmen om en liten stuga på landet, ett torp, en gammal järnvägsstation eller skola. Vadsomhelst, men helst i Halland.</p>
								<br />
								<p>Och så blev det Norrland. Äldsta dottern Anne-Chatherine, hemma på besök från USA, var också entusiastisk inför tanken på någon stuga här. </p>
								<br />
								<p>Genom en gemensam vän, vars föräldrar bjöd oss på middag i Umeå, fann vi platsen. Hans mamma var född i den lilla byn Bredvik och talade om hur sorgligt det var att hennes barndomsby avfolkades. Ödegård vid ödegård var vad hon berättade om. Det lät intressant tyckte vi, och hon erbjöd oss att kontakta <i>"En Hilmar"</i>, som den norrländska termen lyder. </p>
								<br />
								<p>En Hilmar visade hus och ett av dem låg på en öppen ängssluttning med både lada och härbre som hörde till. Huset hade inte varit bebott på sex år och såg naturligtvis ut därefter. Men vinden var stor och hög i tak, och att det skulle bli ett jättefint rum såg vi.</p>
								<br />
								<p><i>– Hur är det med husbock?</i> frågade jag och försökte låta erfaren.</p>
								<p><i>– Husbock,</i> sade Hilmar, <i>finns int i Norrland.</i></p>
								<p><i>– Vad skulle det kosta?</i> undrade jag mest på skoj.</p>
								<p><i>– Hä int dyrt,</i> sade Hilmar. </p>
								<p><i>– Jamen hur mycket är int dyrt?</i></p>
								<p><i>– Ho kan få det för en krona kvadraten, men ho får ju ingen skog, bara lite strövområde.</i></p>
								<p><i>– En krona,</i> sade jag och tänkte på trettiofyra år tidigare när jag blev erbjuden tomt i Haverdal i Halland för det priset… <i>En krona men husen då?</i> frågade jag.</p>
								<p><i>– Husen,</i> sade Hilmar och kliade sig i huuvudet, <i>jaa di är gratis.</i></p>
								<br />
								<p>Fortsättning följer...</p>
							</div>
						</div>

					</div>

				</section>

				<section id="befolkning" className="story-section">
					<h2>Befolkning</h2>
				</section>

				<section id="natur" className="story-section">
					<h2>Natur</h2>
				</section>

				<section id="jakt" className="story-section">
					<h2>Jakt</h2>
				</section>

				<section id="fiske" className="story-section">
					<h2>Fiske</h2>
				</section>

				<section id="fritid" className="story-section">
					<h2>Fritid</h2>
				</section>

				<section id="jordbruk" className="story-section">
					<h2>Jordbruk</h2>
				</section>

				<section id="skogsbruk" className="story-section">
					<h2>Skogsbruk</h2>
				</section>

				<section id="hantverk" className="story-section">
					<h2>Hantverk</h2>
				</section>

				<section id="it" className="story-section">
					<h2>IT</h2>
				</section>
			</main>
		);
	}
}

export default Communities;