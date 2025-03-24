import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
		<main>
			<div class = "videocontainer">
				<video class = "backgroundvideo" autoplay muted loop>
					<source src = "../img/kor.mp4" type = "video/mp4"/>
				</video>
			</div>

			<div class="spacer"></div>

			<div class = "infocontainer">
				<div class = "imagecontainer-index">
					<div class = "date-index">
						<img src="../img/event/date_index.png" alt="Datum för eventet"/>
					</div>
					<div class = "image-index">
						<img src = "../img/event/knytkalas.png" alt = "Knytkalas på Bäcknäset"/>
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