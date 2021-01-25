
function deposit(money, depo) {
    new_balance = money + depo
    return "You have successfully deposited " + depo + " birr \nNow your account balance is " + new_balance + " birr"
}
function withdraw(money, withd) {
    new_balance = money - withd
    return "You have successfully withdrawal " + withd + " birr \nNow your account balance is " + new_balance + " birr"
}
function balance(money) {
    return "Your account balance is " + money
}
function transfer(money, trans) {
    new_balance = money - trans
    return "You have successfully withdrawal " + trans + " birr \nNow your account balance is " + new_balance + " birr"
}
(function () {
    let service = parseInt(prompt("What do you want to do?: \n 1: Deposit \n 2: Withdraw \n 3: Balance \n 4: Transfer \n   "));
    let money = 1500000;
    switch (service) {
        case 1:
            let depo = parseInt(prompt("How much do you want to deposit?: "))
            alert(deposit(money, depo))
            break;
        case 2:
            let withd = parseInt(prompt("How much do you want to withdraw?: "))
            if (withd >= 50000 || withd <= 100) {
                alert("Sorry you can not withdraw this amount of money please contact your bank! ")
            }
            else {
                alert(withdraw(money, withd))
            }

            break;
        case 3:
            alert(balance(money))
            break;
        case 4:
            let account = prompt("Enter the bank account that you want to transfer to?: ")
            let trans = parseInt(prompt("How much do you want to transfer: "))
            alert(withdraw(money, trans))
            break;
        default:
            alert("Invalid input")
            break;
    }

})();

