var excuses = [
	'Im just behind schedule today. missed the train that I usually take. The next one is 20 minutes later.',
	'At the clinic right now, they\'re late so I might be late too.',
	'WFH in the morning, a plumber is coming to fix water pipe, will come to office around noon.',
	'Running late. Be there at 10:10.',
	'Doctor appointment in the morning, will arrive past 10.',
	'sooo much traffic, working from breakfast place',
	'Missed my train, WFH now waiting for the next train service, will be in later than usual.',
	'Picking up some meds. Will be in around 10:30.',
	'AMT worker strike caused Deux-Montages line stop. WFH.',
	'I\'ll be a bit tardy. Tire change.',
	'Will be in later. Waiting for my UPS to deliver my PS4 stuff.',
	'My son is having tonsil and adenoid removal today, so I will be afk depending on how things go. I\'ll check in when i can.',
	'Bixi trouble, might be a bit late.',
	'Swapping tires this morning. I\'ll be in a bit late.',
	'Sorry. I saw a cute cat on the street. Will arrive a bit late.',
	'Will be in a bit later. Osteopathe for lower back. Should be in for standup.',
	'Blooooooooody Mary is back. Need to go to the clinic. Will arrive a bit later.',
	'My kid missed the school bus. I have to drive him to school. Will arrive a bit later.',
	'My dog ate my bus pass. Walking to work. Will arrive later than usual.',
	'Will be arrive late today. Because reasons.',
	'A lot of traffic in Laval. Will arrive later.',
	'Traffic jam in the south shore. Will arrive a bit later.',

]


function newExcuse() {
	var randomNumber = Math.floor(Math.random() * (excuses.length));
	document.getElementById('excuseDisplay').innerHTML = excuses[randomNumber];
}