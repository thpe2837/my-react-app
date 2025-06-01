import React, { useState, useEffect } from 'react';

function EventInterest() {
	const [interested, setInterested] = useState(0);
	const [going, setGoing] = useState(0);

	useEffect(() => {
		const storedInterested = localStorage.getItem("interestedCount");
		const storedGoing = localStorage.getItem("goingCount");
		if (storedInterested) setInterested(parseInt(storedInterested));
		if (storedGoing) setGoing(parseInt(storedGoing));
	}, []);

	const handleInterested = () => {
		const newCount = interested + 1;
		setInterested(newCount);
		localStorage.setItem("interestedCount", newCount);
	};

	const handleGoing = () => {
		const newCount = going + 1;
		setGoing(newCount);
		localStorage.setItem("goingCount", newCount);
	};

	return (
		<div style={{ marginTop: "30px", textAlign: "center"}}>
			<h3>Kommer du på knytkalaset?</h3>
			<button className="event-button" onClick={handleInterested}>
				 Inresserad ({interested})
			</button>
			<button className="event-button" onClick={handleGoing}>
				 Jag kommer ({going})
			</button> 
		</div>
	);
}

export default EventInterest;