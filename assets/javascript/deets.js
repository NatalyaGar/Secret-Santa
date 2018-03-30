 /*Diana Schiele, Sarah Gilbert, Mark Rubesyle, Natalya Garusova
  Project 1
*/


$(document).ready(function(){
  $("#deets-container").hide();
  $("#containerSeeRecipient").hide();
   $("#ChristmasTwo-button").hide();
  
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
              // var christmasImage = $('<img style="width: 460px;">');
              var christmasImage = $('<img style="width:100%;">');
              // create a new image element
              christmasImage.attr("src", imageUrl);
              $("#images").empty();
              $("#images").prepend(christmasImage);
             
          }); //response function close
      }); //on click function close


         //Christmas Cheer button
     $("#ChristmasTwo-button").on("click", function() {
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

    
      $('#sendIt').on("click", function(event) {
        event.preventDefault();
        console.log("click");
        //Modal message show when click submit button
        $('#myModal').modal(); 
        $("#modalContainer").show()
         
      })
    

    $('#haveGroupBtn').on("click", function(event) {
      event.preventDefault();
      //show deets-container on click submit button
      $("#deets-container").show()
      //hide deets section on click submit button
      $("#deetsLeftContainer").hide();
      $("#haveGroupPanel").hide();

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


    

  });
  
