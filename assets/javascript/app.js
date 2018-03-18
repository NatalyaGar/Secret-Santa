
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

    // Button for adding Users
$(document).ready(function(){
//   $("#current-user-container").hide();

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

    $('#add-user-btn').on("click", function(event) {
       
         //Hide start container
        //  $("#start-container").hide();

        //Show current user container
        // $("#current-user-container").show();

        
            console.log("button");
        event.preventDefault();

       
        // return;

        // Grabs user unput
        var userName = $("#name-input").val().trim();
        var password = $("#password-input").val().trim();
        // var wishlistOne =$('#wishlist-input-one').val().trim();
        // var wishlistTwo =$('#wishlist-input-two').val().trim();
        // var wishlistThree =$('#wishlist-input-three').val().trim();
       
        // Creating local "temporary" object for holding user data

        var newUser ={
            name: userName,
            passw: password,
            // wishLOne: wishlistOne,
            // wishLTwo: wishlistTwo,
            // wishLThree: wishlistThree,
           
            
        };

            //Upload user data to the database
            database.ref().push(newUser);

            console.log(newUser.name);
            console.log(newUser.passw);
            // console.log(newUser.wishLOne);
            // console.log(newUser.wishLThree);

            //Clears all of the text-boxes
           
            $("#name-input").val("");
            $("#password-input").val("");
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
}) //Document ready function close
