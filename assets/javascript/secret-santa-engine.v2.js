//Firbase config block
var config = {
	apiKey: "AIzaSyDv2FsrJadHox9lm9ccXWDfqKtAipU4u_M",
	authDomain: "secretsantaprototype-1ea82.firebaseapp.com",
	databaseURL: "https://secretsantaprototype-1ea82.firebaseio.com",
	projectId: "secretsantaprototype-1ea82",
	storageBucket: "secretsantaprototype-1ea82.appspot.com",
	messagingSenderId: "462928145575"
};
firebase.initializeApp(config);

//set up variables used throughout the script
var database = firebase.database();
//Template variable clones the div in the form to dynamically add new participants
var template = $('#sections').clone();
var sectionsCount = 0;
var userName = [];
var indexID = -1;
// For demo purposes, use time in milliseconds as a unique identifier for each group submission
var d = new Date();
var groupID = d.getTime();
console.log('groupID ', groupID);

// When user clicks .addMe button, adds new participant
$('.addMe').on('click', function () {
	sectionsCount++;

	// Loop through each input
	var section = template.clone().find(':input').each(function () {
		var newId = this.id.slice(0, -1) + sectionsCount;
		console.log(this.id);
		this.id = newId;
		console.log(newId);
		$(this).attr('name', newId);
		$(this).attr('first', newId);
		$(this).attr('second', newId);
		$(this).attr('third', newId);
	}).end()
		.appendTo('#sections');
	return false;
});

// Store data from form in array and use that data to pair participants
$('#submitMe').on('click', function () {
	event.preventDefault();
	var participants = [];
	var participantsNotShuffled = [];
	var gifts1 = [];
	var gifts2 = [];
	var gifts3 = [];

	// grab each participant and gifts from the form and put their values into respective arrays
	$('#secretSantaForm').find(".section").each(function () {
		indexID++;
		var participant = [
			$(this).find(".nameInput").val()
		];
		var gift1 = [
			$(this).find(".giftInput1").val()
		];
		var gift2 = [
			$(this).find(".giftInput2").val()
		];
		var gift3 = [
			$(this).find(".giftInput3").val()
		];
		participants.push(participant);
		participantsNotShuffled.push(participant[0]);
		gifts1.push(gift1);
		gifts2.push(gift2);
		gifts3.push(gift3);

		// console.log(gifts1);
		// console.log(gifts2);
		// console.log(gifts3);
		// console.log("Unshuffled Participant Array");
		console.log(participantsNotShuffled);
		console.log("Individual Participant: ");
		// getIndex(participantsNotShuffled,indexID);
		console.log(participantsNotShuffled[indexID]);

	});

	console.log("Here's the  aray: " + participants);
	participants = shuffle(participants);
	console.log("Here's the  shuffled aray: " + participants);
	participants.forEach(matchParticipants);
	console.log("Here are the matched participants");
	console.log(participants);


	//get the results from matched participants array
	//return 1st participant in matched group and pair that participant with their gift list
	//package those values up & push into Firebase
	//use global groupID for group identifier
	for (i = 0; i < participants.length; i++) {
		var name = participants[i][0];
		var matched = participants[i];


		if (participants[0][i] === undefined) {
			console.log(participants[i][0]);
			var index = functiontofindIndexByKeyValue(participantsNotShuffled, participants[i][0]);
			var gifts = { item1: gifts1[index], item2: gifts2[index], item3: gifts3[index] };

		} else {
			console.log(participants[0][i]);
			var index = functiontofindIndexByKeyValue(participantsNotShuffled, participants[i][0]);
			var gifts = { item1: gifts1[index], item2: gifts2[index], item3: gifts3[index] };
		}

		database.ref().push({
			name: name,
			recipientPair: matched,
			recipientGifts: gifts,
			groupId: groupID
		});
	}
})

// Function that will randomly shuffle an array.
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};

/*
--Function to match participants with recipients
--Matches current participant in shuffled array with the next participant in suffled array
--unless they are in the last position, in which case matches them with the first participant in array
*/
function matchParticipants(participant, index, array) {
	//IF block handles ALL index items excluding the last index item
	if (index === array.length - 1) {
		participant.push(array[0][0]);
		// console.log("If Block: " + index);
	}
	//else block grabs last index item in array and pairs with first item in array
	else {
		participant.push(array[index + 1][0]);
		// console.log("Else Block: " + index);
	}
};

//This function is used self explanatory by the name of the function
//It is excuted/used to get participant from 2 dimension array in order to match up that participant with their gift list
function functiontofindIndexByKeyValue(arraytosearch, valuetosearch) {

	for (var i = 0; i < arraytosearch.length; i++) {

		if (arraytosearch[i] == valuetosearch) {
			return i;
		}
	}
	return null;
};
