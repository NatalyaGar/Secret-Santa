

// if name === #name-input from logIn page, display deets


var config = {
    apiKey: "AIzaSyCM6gXwrnT1NUttrDF8qw1dAjI6qd0JpXE",
    authDomain: "secret-santa-efc15.firebaseapp.com",
    databaseURL: "https://secret-santa-efc15.firebaseio.com",
    projectId: "secret-santa-efc15",
    storageBucket: "",
    messagingSenderId: "451980576303"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();
// Button for adding Users
$(document).ready(function(){
  $("#eventLocator").hide();
  //   $("#current-user-container").hide();
  $("#options-container").hide();
  $("#data-container").hide();
  $("#verifyP").hide();
  $("#new-password").hide();
  //   $("#pNotUser").on ("click",function(event){
  $(".linkNotUser").on ("click",function(event){
    $(".linkNotUser").hide();
    $("#password").hide();
    $("#verifyP").show();
    $("#new-password").show();



// $("#verifyP").toggle();

})

$('#submit-user-btn').on("click", function(event) {

     //Hide start container
     $("#start-container").hide();

    //Show options container
    $("#options-container").show();
    // $("#keycode").hide();
    $("#viewPartyDeets").hide();
    $("#viewSecretSantaDeets").hide();


        console.log("button");
    event.preventDefault();


    // return;


    // Creating local "temporary" object for holding user data

    var newUser ={
        name: userName,
        passw: password,
        newPassw: newPassword,
        varifPassw: varifyPassword,
        // wishLOne: wishlistOne,
        // wishLTwo: wishlistTwo,
        // wishLThree: wishlistThree,


    };

        //Upload user data to the database
        database.ref().push(newUser);

        console.log(newUser.name);
        console.log(newUser.passw);
        console.log(newUser.newPassw);
        console.log(newUser.verifPassw);
        // console.log(newUser.wishLOne);
        // console.log(newUser.wishLThree);

        //Clears all of the text-boxes

        $("#name-input").val("");
        $("#password-input").val("");
        $("#newPassword-input").val("");
        $("#verifyPassword-input").val("");
        // $('#wishlist-input-one').val("");
        // $('#wishlist-input-two').val("");
        // $('#wishlist-input-three').val("");



    //  if (!(userName == '' || password == '' || wishlistOne == '' || wishlistTwo == '' || wishlistThree == '')){
    //         $('#users-table').empty();
    //         $('#users-table > tbody')
    //         .append(`<tr>
    //                     <td>${userName}</td>
    //                     <td>${wishlistOne}</td>
    //                     <td>${wishlistTwo}</td>
    //                     <td>${wishlistThree}</td>

    //                 </tr>`)
    // }
    //   else{
    //     $('#myModal').show();

    //     $("#modalBtn").click(function(){
    //     $("#myModal").hide();

    //  })
    // }
    //   }),



}); //on click function close

 // Create Firebase event for adding train to the database and a row
 database.ref().on("child_added", function(childSnapshot, prevChildKey){
    console.log(childSnapshot.val());

    //Store everything into a variable.
    var userName = childSnapshot.val().name;
    var password = childSnapshot.val().passw;
    var newPassword = childSnapshot.val().newPassw;
    var varifyPassword = childSnapshot.val().varifPassw;

    // var wishlistOne = childSnapshot.val().wishLOne;
    // var wishlistTwo = childSnapshot.val().wishLTwo;
    // var wishlistThree = childSnapshot.val().wishLThree;

    console.log(userName);
    console.log(password);
    // console.log(wishlistOne);
    // console.log(wishlistThree);


     // Current Time
    //  var currentTime = moment().format("MMM Do YYYY hh:mm A");
    //  console.log("CURRENT TIME: " + currentTime);
    //Add data into the table
//     $('#users-table > tbody')
//     .append(`<tr>
//                 <td>${userName}</td>
//                  <td>${wishlistOne}</td>
//                  <td>${wishlistTwo}</td>
//                  <td>${wishlistThree}</td>
//                  <td>${currentTime}</td>
//             </tr>`)

//  },
 },


 function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

$('#keycode-submit-btn').on("click", function(event) {
    event.preventDefault();
    $("#eventLocator").show();
     //Hide start container
     $("#start-container").hide();

    //Hide options containers
    $("#options-container").hide();
    $("#data-container").show();
    $("#headingTextStart").hide();
    // $(".container").hide();



});
$('#wishListSubmit-btn').on("click", function(event) {
    console.log("button");
    event.preventDefault();

      // Grabs user unput
      var userName = $("#name-input").val().trim();

      var wishlistOne =$('#wishlist-input-one').val().trim();
      var wishlistTwo =$('#wishlist-input-two').val().trim();
      var wishlistThree =$('#wishlist-input-three').val().trim();
      var wishlistFour = $('#wishlist-input-four').val().trim();

      // Creating local "temporary" object for holding user data

      var newUser ={
          name: userName,

          wishLOne: wishlistOne,
          wishLTwo: wishlistTwo,
          wishLThree: wishlistThree,
          wishLFour: wishlistFour,

      };

          //Upload user data to the database
          database.ref().push(newUser);

          console.log(newUser.name);

          console.log(newUser.wishLOne);
          console.log(newUser.wishLThree);

          //Clears all of the text-boxes

          $("#name-input").val("");

          $('#wishlist-input-one').val("");
          $('#wishlist-input-two').val("");
          $('#wishlist-input-three').val("");
          $('#wishlist-input-four').val("");



      //  if (!(userName == '' || password == '' || wishlistOne == '' || wishlistTwo == '' || wishlistThree == '')){
      //         $('#users-table').empty();
      //         $('#users-table > tbody')
      //         .append(`<tr>
      //                     <td>${userName}</td>
      //                     <td>${wishlistOne}</td>
      //                     <td>${wishlistTwo}</td>
      //                     <td>${wishlistThree}</td>

      //                 </tr>`)
      // }
      //   else{
      //     $('#myModal').show();

      //     $("#modalBtn").click(function(){
      //     $("#myModal").hide();

      //  })
      // }
      //   }),



  }); //on click function close

   // Create Firebase event for adding a wish to the database and a row
   database.ref().on("child_added", function(childSnapshot, prevChildKey){
      console.log(childSnapshot.val());

      //Store everything into a variable.
      var userName = childSnapshot.val().name;

      var wishlistOne = childSnapshot.val().wishLOne;
      var wishlistTwo = childSnapshot.val().wishLTwo;
      var wishlistThree = childSnapshot.val().wishLThree;
      var wishlistFour = childSnapshot.val().wishLFour;


      console.log(userName);

      console.log(wishlistOne);
      console.log(wishlistThree);


       // Current Time
      //  var currentTime = moment().format("MMM Do YYYY hh:mm A");
      //  console.log("CURRENT TIME: " + currentTime);
      //Add data into the table
  //     $('#users-table > tbody')
  //     .append(`<tr>
  //                 <td>${userName}</td>
  //                  <td>${wishlistOne}</td>
  //                  <td>${wishlistTwo}</td>
  //                  <td>${wishlistThree}</td>
  //                  <td>${currentTime}</td>
  //             </tr>`)

  //  },
   })



});  //Document ready function close
