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


// <--- Account Creation Form --->
$(document).ready(function() {
  $("#bank-account-creation").submit(function(event){
    event.preventDefault();

    var userName = $("#user-name").val();
    var userInitialDeposit = parseFloat($("#user-initial-deposit").val());

    newAccount = new Account(userName, userInitialDeposit);

    console.log(newAccount)

    $(".display-balance").text(newAccount.balance);
    $(".display-name").text(newAccount.name);
    $(".current-balance").show();

  });


// <--- Transfer Form --->
  $("#bank-account-transfer").submit(function(event){
    event.preventDefault();

    var userDeposit = parseFloat($("#user-deposit").val());
    var userWithdraw = parseFloat($("#user-withdraw").val());

    // newAccount.balance.Withdraw(userWithdraw);
    newAccount.deposit(userDeposit);
    newAccount.withdraw(userWithdraw);


    $(".display-balance").text(newAccount.balance);
    $(".display-name").text(newAccount.name);

    console.log(newAccount)
  });

});
