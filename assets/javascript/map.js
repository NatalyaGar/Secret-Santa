
$(document).ready(function () {

    var config = {
      apiKey: "AIzaSyDLN3xvbcjFVqcg9yDl2-0sBaR_CNt0SvY",
      authDomain: "mapapi-f40ea.firebaseapp.com",
      databaseURL: "https://mapapi-f40ea.firebaseio.com",
      projectId: "mapapi-f40ea",
      storageBucket: "mapapi-f40ea.appspot.com",
      messagingSenderId: "890218358654"
    };

    // var config = {
    //     apiKey: "AIzaSyDv2FsrJadHox9lm9ccXWDfqKtAipU4u_M",
    //     authDomain: "secretsantaprototype-1ea82.firebaseapp.com",
    //     databaseURL: "https://secretsantaprototype-1ea82.firebaseio.com",
    //     projectId: "secretsantaprototype-1ea82",
    //     storageBucket: "secretsantaprototype-1ea82.appspot.com",
    //     messagingSenderId: "462928145575"
    // };

    firebase.initializeApp(config);
    var database = firebase.database();
    getMap();
  
    $('#locationSubmitBtn').on('click', function () {
      var newAddress = $('#location').val().trim();
      database.ref().set(newAddress);
      getMap();
    })
  
     function getMap() {
      var partyAddress;
      database.ref().once('value', function(snapshot) {
      // database.ref().limitToLast(1).on("value", function (snapshot) {
        console.log(snapshot.val());
        partyAddress = snapshot.val().replace(/ /g, "+");      
        console.log(partyAddress);
  
        var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + partyAddress + "&key=AIzaSyB8ykdYPnNswf6X7Hd5qHz4RT4WicH5NhE";
        var lat;
        var long;
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function (response) {
          console.log(response.results[0].geometry.location.lat);
          console.log(response.results[0].geometry.location.lng);
          lat = response.results[0].geometry.location.lat;
          long = response.results[0].geometry.location.lng;
          console.log(typeof(lat));
          console.log(typeof(long));
          initAutocomplete(lat, long)
      });
           
      });
  
    }
  
  
    function initAutocomplete(lat, long) {
      console.log(lat);
      console.log(long);
      var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: lat, lng: long },
        zoom: 17 ,
        mapTypeId: 'roadmap'
      });
  
      var marker = new google.maps.Marker({
        position: { lat: lat, lng: long },
        map: map
    });
    }
  })
  