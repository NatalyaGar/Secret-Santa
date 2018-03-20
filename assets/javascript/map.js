
var partyAddress;
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
var newAddress = {
    address: "1074 E 1st Pl, Denver CO"
};

database.ref().push(newAddress);

database.ref().limitToLast(1).on("child_added", function (snapshot) {
    partyAddress = snapshot.val().address.replace(/ /g, "+");
    console.log(partyAddress);

})


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
    initMap();
});

function initMap() {
    if(lat ==undefined){
        lat = 39.7457833;
    }
    if (long ==undefined){
        long = -104.9857172
    }
    var centerCity = { lat: lat, lng: long };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: centerCity
    });
    var marker = new google.maps.Marker({
        position: centerCity,
        map: map
    });
}
