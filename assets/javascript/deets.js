$(document).ready(function(){
//
// function Guest(name, pw, gifts, budget, date) {
//   this.name = name;
//   // this.pw = pw;
//   this.gifts = gifts;
//   this.budget = budget;
//   this.date = date;
// }

var minAmt = $('#min').val().trim();
var maxAmt = $('#max').val().trim();
var budget = [minAmt, maxAmt];
var date = $('#dateDeet').val().trim();


// var user = new Guest(name,  gifts, budget, date);

$('#sendIt').click(function() {
  var userName = $("#name").val();
  // var pw = $("#password-input").val();
  var gift1 =$('#gift1').val().trim();
  var gift2 =$('#gift2').val().trim();
  var gift3 =$('#gift3').val().trim();
  var gifts = [gift1, gift2, gift3];
  console.log('name: ', userName);
  console.log('gift array: ', gifts);
  // console.log('is this working???', user);

})

});
