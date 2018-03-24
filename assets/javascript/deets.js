$(document).ready(function(){

  // ajax request for map API & currency API (& calendar?)
  // $.ajax({
  //   url: '',
  //   method: 'GET'
  // }).then(function(response) {
  //   console.log(response);
  // })

  var config = {
    apiKey: "AIzaSyDwUh8oQG_IpoQ5kj6IvxYW8tGNXoZbU7M",
    authDomain: "testproject-56e43.firebaseapp.com",
    databaseURL: "https://testproject-56e43.firebaseio.com",
    projectId: "testproject-56e43",
    storageBucket: "testproject-56e43.appspot.com",
    messagingSenderId: "628909235262"
  };

  firebase.initializeApp(config);
  var database = firebase.database();

//NOTE add properties to Guest constructor thru protype?????
  // function logIt(name, pw) {
  //
  // }

  //.................uncomment this from here.......................
  function Guest(
    // name, gifts,
    budget, date) {
    // this.name = name;
    // this.gifts = gifts;
    this.budget = budget;
    this.date = date;
  }

  $("#dateDeet").keypress(function(e) {
    if (e.which == 13) {
      $('#sendIt').trigger('click');
    }
  });

$('#sendIt').click(function() {
    console.log('button clicked!');
    // var name = $("#name").val().trim();
    // var gift1 =$('#gift1').val().trim();
    // var gift2 =$('#gift2').val().trim();
    // var gift3 =$('#gift3').val().trim();
    // var gifts = [gift1, gift2, gift3];
    var minAmt = $('#min').val().trim();
    var maxAmt = $('#max').val().trim();
    var budget = [minAmt, maxAmt];

    console.log('clickIt budget before isValidAmt(): ', budget);
    isValidAmt(budget);
    console.log('clickIt budget after isValidAmt(): ', budget);

    var date = $('#dateDeet').val().trim();
    isValidDate(date);

    // if ((name == '') || (gift1 == '') || (maxAmt == '') || (date == '')) {
    //
    //   console.log('Please enter all of the following info: name, gift, max amount, date');
    // // } else if ( date === 'number') {
    // //   console.log('please enter a valid date');
    // } else {
      // sendIt(name, gifts, budget, date);
      sendIt(budget, date);
    // }
    //.................uncomment this to here.......................
  })

  function isValidAmt(budget) {
    if (isNaN(budget[0])) {
      console.log('min number is NOT valid, please enter a number');
    } else if (isNaN(budget[1])) {
      console.log('max number is NOT valid, please enter a number');
    }
    if (budget[0] == '') {
      console.log('min budget not listed ');
      return budget[0] = '0';
    } else if (budget[1] == '') {
      console.log('max budget not listed ');
      return budget[1] = '0';
    }
    if (budget[0] > budget[1]) {
      console.log('please check that your maximum budget is larger than your minimum budget');
    }
  }

  function isValidDate(date) {
    console.log('validating date in isValidDate(): ', date);
    let now = new Date();
    if (moment(date).isValid()) {
      let pickDate = new Date(date);
      if (pickDate > now) {
        $("#name").val('');
        $("#gift1").val('');
        $("#gift2").val('');
        $("#gift3").val('');
        $("#min").val('');
        $("#max").val('');
        $("#dateDeet").val('');
      } else {
        console.log('Time travel has not been invented yet. Please enter a future date!');
      }
    } else {
      console.log('date is NOT valid');
    }
  }

  // var newUser ={
  //     name: userName,
  //     // passw: password,
  //     // newPassw: newPassword,
  //     // varifPassw: varifyPassword,
  // };
  //
  //     //Upload user data to the database
  //     database.ref().push(newUser);

    function avgIt(budget) {
      console.log('avgIt budget: ', budget);
//.................uncomment this from here.......................
      // if (budget[0] > 0 && budget[1] > 0) {
      //   console.log('budget is valid');
      // }
      // if (budget[0] <= budget[1]) {
      //   let avg = budget[1] - budget[0];
      //   console.log('the Guests budget avg is: ', avg);
      //   return budget.push(avg);
      //   //   console.log('min budget < max budget, good job!');
      //   // } else if () {
      //   //   console.log('please enter min/max budgets in correct order');
      // }
//................uncomment this to here....................
    }

//.................uncomment this from here.......................
  // function sendIt(name, gifts, budget, date) {
  //   var user = new Guest(name, gifts, budget, date);
  //   console.log('guest profile deets:::', user);
  //   database.ref().push(user);
  // }
//................uncomment this to here....................

  function sendIt(budget, date) {
    console.log('sendIt budget: ', budget);
    avgIt(budget);
    var user = new Guest(budget, date);
    console.log('guest profile deets:::', user);
    database.ref().push(user);
  }

});
