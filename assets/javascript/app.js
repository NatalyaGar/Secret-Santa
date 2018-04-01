

  /*DU Web Dev Bootcamp 2018
    Diana Schiele, Sarah Gilbert, Mark Rubesyle, Natalya Garusova
    Project 1*/


$(document).ready(function(){
    $("#ChristmasTwo-button").hide();
    $("#options-container").hide();
    $("#data-container").hide();
    $("#verifyP").hide();
    $("#new-password").hide();

   //Christmas Cheer button
    $("#Christmas-button").on("click", function() {
        $("#Christmas-button").hide();
        $("#ChristmasTwo-button").show();
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
            // var christmasImage = $('<img style="width: 473px;">');
            var christmasImage = $('<img style="width: 100%">');
            // create a new image element
            christmasImage.attr("src", imageUrl);
            $("#images").empty();
            $("#images").prepend(christmasImage);

        }); //response function close
    }); //on click function close

    //Christmas Cheer button
    $("#ChristmasTwo-button").on("click", function() {
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
            // var christmasImage = $('<img style="width: 473px;">');
            var christmasImage = $('<img style="width: 100%">');
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
    }); //on click function close;

    $("#logInBtn").on("click", function(event){
        $("#start-container").hide();
        $("#options-container").show();
        $("#keycode").hide();
    })

    $("#logInBtnTop").on("click", function(event){
        $("#start-container").hide();
        $("#options-container").show();
    })


    $('#keycode-submit-btn').on("click", function(event) {
        event.preventDefault();
        //Hide start container
        $("#start-container").hide();

        //Hide options containers
        $("#options-container").hide();
        $("#headingTextStart").hide();
    });

    $('input[name="Group"]').on("click", function(event) {
      let radioVal = $('input[name="Group"]:checked').val();
      if (radioVal === "new") {
        $("#keycode").hide();
      }
      if (radioVal === "haveGroup") {
        $("#keycode").show();
      }
    })

    var userKey = "xmas";
    $("#keycode-input").keyup(function(event) {
      if (event.keyCode === 13) {
          $("#submitInBtnOption").click();
      }
    });

    $("#submitInBtnOption").on("click", function(event) {
      var keyInput = $("#keycode-input").val();
      if (keyInput === userKey) {
        console.log(keyInput);
        sessionStorage.setItem('userKey', userKey);
        location.href='assets/deets.html';
      } else if (keyInput == ""){
        $("#keycode-input")[0].placeholder = "Please enter a keycode"
      } else if (keyInput !== userKey) {
        $("#keycode-input").val('');
        $("#keycode-input")[0].placeholder = "Keycode incorrect. Please try again"
      } else if (keyInput == null) {
        event.preventDefault();
      }
      if (!keyInput) {
        location.href='assets/deets.html';
      }
    })

    $('#wishListSubmit-btn').on("click", function(event) {
        console.log("button");
        event.preventDefault();
    }); //on click function close

});  //Document ready function close
