const basicInfo = {};
const cardInfo = {};
const preferences = {};

//prevents the user to toggle signup and login at the same time
$(".signup").click(function() {
  $(".login").attr('disabled', function(_, attr) {
    return !attr;
  });
});

$(".login").click(function() {
  $(".signup").attr('disabled', function(_, attr) {
    return !attr;
  });
});

//no back-end required for p6, so form data will be stored in a local array instead
//of a js object

//basic info from home page
$(".home-button").click(function() {
  for (var i = 0; i < $(".form-signup input").length; i++){
    basicInfo.push($(".form-signup input")[i].value);
  }
  localStorage.setItem('firstName', basicInfo[0]);
});

//credit card info
$("credit-submit").click(function() {
  for (var i = 0; i < $(".card-number-info input").length; i++){
    cardInfo.push($(".card-number-info input")[i].value);
  }
});

//preferences info
$(".finish button").click(function() {
  for (var i = 0; i < $("input").length; i++){
    preferences.push($("input")[i].value);
  }
});

//adds the user's first name to the preferences page
$(".preferences-heading h1").html("Add Your Preferences", localStorage.getItem('firstName'));

$(".profile-image").height($(".profile-information").height() - 32);
