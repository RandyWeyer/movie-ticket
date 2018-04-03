// business logic

// var newAccount;
//
// function Account(name, balance) {
//   this.name = name;
//   this.balance = balance;
// }
//
// Account.prototype.deposit = function(amount) {
//   return this.balance += amount;
// }
//
// Account.prototype.withdraw = function(amount) {
//   return this.balance -= amount;
// }





// user interface logic


// <--- Movie Form --->

$(document).ready(function() {
  $("#movie-form").submit(function(event){
    event.preventDefault();
    var moviePreference = document.querySelector('input[name = "movie"]:checked').value;
    var showTimes = $("#show-times").val();
    var age = $("#age-input").val();


    // Set Base price for the movie
    if (moviePreference == "a-few-goodmen") {
      var finalPrice = 12;
    }
    if (moviePreference == "harry-otter") {
      var finalPrice = 18;
    }
    if (moviePreference == "harry-met-sully") {
      var finalPrice = 10;
    }
    if (moviePreference == "home-alone") {
      var finalPrice = 25;
    }

    if (showTimes<18) {
      finalPrice *= .85;

    }
    if (age<=12) {
      finalPrice *= .5;

    }
    if (age>=60) {
      finalPrice *= .7;

    }
    console.log(finalPrice);

    $("#ticket-price").text(finalPrice);
    $(".results").show();
  });
});
