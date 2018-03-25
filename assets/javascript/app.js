
  
  /*DU Web Dev Bootcamp 2018 
    Natalya Garusova, Sarah Gilbert,Mark Rubesyle, Diana Schiele
    Project 1*/


/* global moment firebase */
// Initialize Firebase


    
$(document).ready(function(){

    $("#eventLocator").hide();
    $("#options-container").hide();
    $("#data-container").hide();
    $("#verifyP").hide();
    $("#new-password").hide();
     
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


   //Audio Element open
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
     //Audio Element close

 
   

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
    }); //on click function close


    $("#logInBtn").on("click", function(event){
        $("#start-container").hide();
        $("#options-container").show();
    })

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
    }); //on click function close

});  //Document ready function close







