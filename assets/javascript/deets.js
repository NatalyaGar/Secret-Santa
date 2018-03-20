$(document).ready(function(){

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
  var user = new Guest(name, budget);
  console.log('is this working???', user);

}


});
