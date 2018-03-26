/*DU Web Dev Bootcamp 2018
  Diana Schiele, Sarah Gilbert, Mark Rubesyle, Natalya Garusova,
  Project 1
*/

// var config = {
//   apiKey: "AIzaSyCM6gXwrnT1NUttrDF8qw1dAjI6qd0JpXE",
//   authDomain: "secret-santa-efc15.firebaseapp.com",
//   databaseURL: "https://secret-santa-efc15.firebaseio.com",
//   projectId: "secret-santa-efc15",
//   storageBucket: "",
//   messagingSenderId: "451980576303"
// };
// firebase.initializeApp(config);


//Template variable clones the div to dynamically add new participants
var config = {
	apiKey: "AIzaSyDv2FsrJadHox9lm9ccXWDfqKtAipU4u_M",
	authDomain: "secretsantaprototype-1ea82.firebaseapp.com",
	databaseURL: "https://secretsantaprototype-1ea82.firebaseio.com",
	projectId: "secretsantaprototype-1ea82",
	storageBucket: "secretsantaprototype-1ea82.appspot.com",
	messagingSenderId: "462928145575"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();



$(document).ready(function(){
  $("#deets-container").hide();
  $("#containerSeeRecipient").hide();
     //Christmas Cheer button
     $("#Christmas-button").on("click", function() {
        console.log("Hello");
          // define variable for the api url
          var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=Christmas";
          // get the random  image make the ajax call to the queery URL using jQuery
                  $.ajax({
                  url: queryURL,
                  method: "GET"
                  })
          // stick the image on the screen 
          .then(function(response) {
              console.log(response);
              // var imageUrl = response.data.image_original_url;
              var imageUrl = response.data.images.fixed_height_downsampled.url
              // make a variable, to get the data back from the api 
              // var christmasImage = $('<img style="width: 460px;">');
              var christmasImage = $('<img style="width:100%;">');
              // create a new image element
              christmasImage.attr("src", imageUrl);
              $("#images").empty();
              $("#images").prepend(christmasImage);
             
          }); //response function close
      }); //on click function close
  

       //Audio Element
       var audioElement = document.createElement("audio");
       audioElement.setAttribute("src", "music/WhiteChristmas.mp3");
      
     // music play button
       $("#musicPlay").on("click", function() {
        audioElement.play();                                    
           });
       //music pause button
       $("#musicPause").on("click", function() {
            audioElement.pause();
            // audioElementV.pause();
          });
 
 

    function Guest(name, pw, gifts, budget, date) {
      this.name = name;
      // this.pw = pw;
      this.gifts = gifts;
      this.budget = budget;
      this.date = date;
    }

    
      $('#sendIt').on("click", function(event) {
      event.preventDefault();
   
      console.log("click");
      //Modal message show when click submit button
      $('#myModal').modal(); 
      $("#modalContainer").show()
         
   
      var name = $("#name").val();
      // var pw = $("#password-input").val();
      var gift1 =$('#gift1').val().trim();
      var gift2 =$('#gift2').val().trim();
      var gift3 =$('#gift3').val().trim();
      var gifts = [gift1, gift2, gift3];
      var minAmt = $('#min').val().trim();
      var maxAmt = $('#max').val().trim();
      var budget = [minAmt, maxAmt];
      var date = $('#dateDeet').val().trim();
      console.log('name: ', userName);
      console.log('gift array: ', gifts);
      console.log('budget: ', budget);
      console.log('date chosen: ', date);
    
      sendIt(name, gifts, budget, date);
    
    })
    
    function sendIt(name, gifts, budget, date) {
      var user = new Guest(name, gifts, budget, date);
      console.log('is this working???', user);
      console.log('date: ', date);
    }

    $('#haveGroupBtn').on("click", function(event) {
      event.preventDefault();
         //show deets-container on click submit button
    //  $("#deets-container").hide();
    $("#deets-container").show()
    //  $("#containerSeeRecipient").show();
     


      //hide deets section on click submit button
     $("#deetsLeftContainer").hide();
     $("#haveGroupPanel").hide();



    });

    //modal if any of the fields underined show error message, else show next page and thank message
    // if ((name == undefined) || (gif1 == undefined) || (gif2 == undefined) || (gif3 == undefined) || (minAmt == undefined) || (maxAmt == undefined) || (date == undefined)){
    //   console.log("if block")
    //   $("#myModalError").modal();
    //   $("#modalContainerError").show();
    //   $("#deetsLeftContainer").show();
     
    // }
    // else{
    //   $('#myModal').modal(); 
    //   $("#modalContainer").show()
    //   $("#deetsLeftContainer").hide();
    //   $("#deets-container").show();
    // }


    $("#addMebtn").on("click", function(event) {
      event.preventDefault();
   
      console.log("addMe");
      //Modal message show when click Add button
      $('#myModalAdd').modal(); 
      $("#modalContainerAdd").show()
    });


    $("#submitMe").on("click", function(event) {
      event.preventDefault();
   
      console.log("Pair");
      //Modal message show when click Pair button
      $('#myModalPair').modal(); 
      $("#modalContainerPair").show()
    });

    $("#haveGroupBtn").on("click", function(event) {
      event.preventDefault();
   
      console.log("LogIn");
      //Modal message show when click Log in to view who's Santa you are button
      $('#myModalLogIn').modal(); 
      $("#modalContainerLogIn").show()
    });



   //Mark's code for Participant's names and wish list start

    var template = $('#sections').clone();

    var sectionsCount = 0;
    
    var userName = [];
    
    var indexID = -1;
    
    
    // When user clicks .addMe button, adds new participant
    $('body').on('click', '.addMe', function () {
      sectionsCount++;
    
      // Loop through each input
      var section = template.clone().find(':input').each(function () {
        var newId = this.id.slice(0, -1) + sectionsCount;
        this.id = newId;
        $(this).attr('name', newId);
        $(this).attr('first', newId);
        $(this).attr('second', newId);
        $(this).attr('third', newId);
      }).end()
        .appendTo('#sections');
      return false;
    });
    
    //Main function for Secret Santa web app/////////////////////////////////////////////////////
    // Stores data from form in array and uses that data to pair participants
    $('#submitMe').on('click', function () {
      event.preventDefault();
      var participants = [];
      var participantsNotShuffled = [];
      var gifts1 = [];
      var gifts2 = [];
      var gifts3 = [];
    
    
    
      // Create an array for each participant within the participants array
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
          recipientGifts: gifts
    
        });
      }
    })
    
    
    /**
     * Function that will randomly shuffle an array. 
     */
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
    
    // Function to match participants with recipients 
    // Matches current participant in array with the next participant in array
    // Unless they are the last, in which case matches them with the first participant in array
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
    
    
    function functiontofindIndexByKeyValue(arraytosearch, valuetosearch) {
    
      for (var i = 0; i < arraytosearch.length; i++) {
    
        if (arraytosearch[i] == valuetosearch) {
          return i;
        }
      }
      return null;
    }; 
    //Mark's code for Participant's names and wish list close




//Mark's code Pair the recipients start

   

var fbparticipant = [];
var count = "";



$('body').on('click', '.getMe', function () {
    event.preventDefault();
    var userName = $("#name").val().trim();
    var recipient = "";

    database.ref().orderByChild("name").equalTo(userName).on("child_added", function (childSnapshot) {
        // database.ref().on("child_added", function (childSnapshot) {
        //set snapshot variable to hold participant names from firebase
        var sv = childSnapshot.val().recipientPair[1];
        recipient = sv;
        $('#giftRecipient').text("You are the Secret Santa For: " + recipient );
        $('#describeRecipient').text("Here is " + recipient +"'s wish list:" );
        getGifts(recipient);
    })

    function getGifts(recipient) {
        database.ref().orderByChild("name").equalTo(recipient).on("child_added", function (childSnapshot) {
            // database.ref().on("child_added", function (childSnapshot) {
            //set snapshot variable to hold participant names from firebase
            var sv1 = childSnapshot.val().recipientGifts.item1;
            var sv2 = childSnapshot.val().recipientGifts.item2;
            var sv3 = childSnapshot.val().recipientGifts.item3;
            var l = "https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords="
            var link ="<a href="+l+sv1+ "</a>";
            $('#giftsTbl tbody').empty();
            $('#giftsTbl > tbody')
            .append(`<tr>
                            <td>${sv1}</td>
                            <td>${sv2}</td>
                            <td>${sv3}</td>
                    </tr>`)
        })
    }


    function getCount() {
        console.log("Here's the current count:" + count);

    }

});
//Mark's code Pair the recipients close




    
    });
    