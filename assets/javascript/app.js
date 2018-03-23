
  /*DU Web Dev Bootcamp 2018 
    Natalya Garusova, Sarah Gilbert,Mark Rubesyle, Diana Schiele
    Project 1*/


/* global moment firebase */
// Initialize Firebase


    
  
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


$(document).ready(function(){
     
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
            var christmasImage = $('<img style="width: 473px;">');
            // create a new image element
            christmasImage.attr("src", imageUrl);
            $("#images").empty();
            $("#images").prepend(christmasImage);
           
        }); //response function close
    }); //on click function close


   //Audio Element
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "assets/music/WhiteChristmas.mp3");
     
    // music play button
      $("#musicPlay").on("click", function() {
       audioElement.play();                                    
          });
      //music pause button
      $("#musicPause").on("click", function() {
           audioElement.pause();
           // audioElementV.pause();
         });


 
$("#eventLocator").hide();
$("#options-container").hide();
$("#data-container").hide();
$("#verifyP").hide();
$("#new-password").hide();
$(".linkNotUser").on ("click",function(event){
$(".linkNotUser").hide();
$("#password").hide();
$("#verifyP").show();
$("#new-password").show();

})

//On click function
    $('#submit-user-btn').on("click", function(event) {
    event.preventDefault();
   
     //Hide start container
     $("#start-container").hide();

    //Show options container
    $("#options-container").show();
    $("#viewPartyDeets").hide();
    $("#viewSecretSantaDeets").hide();

        console.log("button");

    // Grabs user unput
    var userName = $("#name-input").val().trim();
    var password = $("#password-input").val().trim();
    var newPassword =$("#newPassword-input").val().trim();
    var varifyPassword=$("#verifyPassword-input").val().trim();                                  
  
    // Creating local "temporary" object for holding user data

    var newUser ={
        name: userName,
        passw: password,
        newPassw: newPassword,
        varifPassw: varifyPassword,  
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
      


}); //on click function close

 // Create Firebase event for adding train to the database and a row
 database.ref().on("child_added", function(childSnapshot, prevChildKey){
    console.log(childSnapshot.val());

    //Store everything into a variable.
    var userName = childSnapshot.val().name;
    var password = childSnapshot.val().passw;
    var newPassword = childSnapshot.val().newPassw;
    var varifyPassword = childSnapshot.val().varifPassw;
    
    console.log(userName);
    console.log(password);
   
 
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

      
   
   })


   
    
     
});  //Document ready function close









