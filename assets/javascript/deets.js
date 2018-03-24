$(document).ready(function(){

  //NOTE ajax request for map API & currency API (& calendar?)
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


    // var newUser ={
    //     name: userName,
    //     // passw: password,
    //     // newPassw: newPassword,
    //     // varifPassw: varifyPassword,
    // };
    //
    //     //Upload user data to the database
    //     database.ref().push(newUser);

//NOTE add properties to Guest constructor thru protype?????
  // function logIt(name, pw) {
  //
  // }

  function Guest(name, gifts, budget, date) {
    this.name = name;
    this.gifts = gifts;
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
    var name = $("#name").val().trim();
    var gift1 =$('#gift1').val().trim();
    var gift2 =$('#gift2').val().trim();
    var gift3 =$('#gift3').val().trim();
    var gifts = [gift1, gift2, gift3];
    var minAmt = $('#min').val().trim();
    var maxAmt = $('#max').val().trim();
    var budget = [minAmt, maxAmt];

    console.log('clickIt budget before isValidAmt(): ', budget);
    isValidAmt(budget);
    console.log('clickIt budget after isValidAmt(): ', budget);

    var date = $('#dateDeet').val().trim();
    isValidDate(date);

    if ((name == '') || (gift1 == '') || (date == '')) {
      console.log('Please enter all of the following info: name, gift, date');
    } else {
      sendIt(name, gifts, budget, date);
    }
  })

  function isValidAmt(budget) {
    if (isNaN(budget[0])) {
      console.log('min number is NOT valid, please enter a number');
      //NOTE need to stop code here if number is not valid
      $('#minAmt').text('min number is NOT valid, please enter a number');
      return;
    }
    if (isNaN(budget[1])) {
      console.log('max number is NOT valid, please enter a number');
      //NOTE need to stop code here if number is not valid
      $('#maxAmt').text('max number is NOT valid, please enter a number');;
      return;
    }
    if (budget[0] == '') {
      console.log('min budget not listed ');
      return budget[0] += budget[1].toString();
    } else if (budget[1] == '') {
      console.log('max budget not listed ');
      return budget[1] += budget[0].toString();
    }
    if (budget[0] > budget[1]) {
      console.log('please check that your maximum budget is larger than your minimum budget');
      //NOTE need to stop code here if budget is not valid
      return;
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
        //NOTE need to stop code here if date is not valid
        return;
      }
    } else {
      console.log('date is NOT valid');
      //NOTE need to stop code here if date is not valid
      return;
    }
  }

  function avgIt(budget) {
    console.log('avgIt budget: ', budget);
      let avg = ((parseInt(budget[0]) + parseInt(budget[1])) / budget.length).toString();
      console.log('the Guests budget avg is: ', avg);
      return budget.push(avg);
  }

  function sendIt(name, gifts, budget, date) {
    console.log('sendIt budget: ', budget);
    avgIt(budget);
    var user = new Guest(name, gifts, budget, date);
    console.log('guest profile deets:::', user);
    database.ref().push(user);
  }

});
