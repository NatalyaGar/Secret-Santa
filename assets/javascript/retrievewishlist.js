// Initialize Firebase
// var config = {
//     apiKey: "AIzaSyDv2FsrJadHox9lm9ccXWDfqKtAipU4u_M",
//     authDomain: "secretsantaprototype-1ea82.firebaseapp.com",
//     databaseURL: "https://secretsantaprototype-1ea82.firebaseio.com",
//     projectId: "secretsantaprototype-1ea82",
//     storageBucket: "secretsantaprototype-1ea82.appspot.com",
//     messagingSenderId: "462928145575"
// };

// firebase.initializeApp(config);
// var database = firebase.database();
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
           // database.ref().on(“child_added”, function (childSnapshot) {
           //set snapshot variable to hold participant names from firebase
           var sv1 = childSnapshot.val().recipientGifts.item1;
           var sv2 = childSnapshot.val().recipientGifts.item2;
           var sv3 = childSnapshot.val().recipientGifts.item3;

                        $("#buy1").data("gift", sv1);
                        $("#buy2").data("gift", sv2);
                        $("#buy3").data("gift", sv3);

                        var l = "https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=";

                        $("#amazonPanel").on("click", "#buy1", function() {
                            let getName = $("#buy1").data("gift");
                            window.open(l + getName);
                        })
                        $("#amazonPanel").on("click", "#buy2", function() {
                            let getName = $("#buy2").data("gift");
                            window.open(l + getName);
                        })
                        $("#amazonPanel").on("click", "#buy3", function() {
                            let getName = $("#buy3").data("gift");
                            window.open(l + getName);
                        })
           $("#giftsTbl > tbody").empty();
           $("#giftsTbl > tbody")
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
