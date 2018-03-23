/*DU Web Dev Bootcamp 2018
    Diana Schiele, Natalya Garusova, Sarah Gilbert,Mark Rubesyle, 
    Project 1
*/


$(document).ready(function(){
  $("#deets-container").hide();
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
              var christmasImage = $('<img style="width: 460px;">');
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
    
    $('#sendIt').click(function() {
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
    
    
    });
    