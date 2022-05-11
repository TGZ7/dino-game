
var balance = 0
var addition = 0
var clickforce = 1

function aclick() {
    balance += clickforce
    console.log(balance)
    document.getElementById("balance").innerHTML = balance
}

var upgrade1Cost = 10
var upgrade1Salary = 1
function buyUpgrade1() {
    console.log('clickaste')
    if (balance >= upgrade1Cost) {
        balance -= upgrade1Cost
        addition += upgrade1Salary
        document.getElementById("balance").innerHTML = balance
        document.getElementById("speed").innerHTML = addition
    }
}

function pay() {
    balance += addition
}


function updater() {
    pay()
    document.getElementById("balance").innerHTML = balance
    document.getElementById("speed").innerHTML = addition
}

setInterval(updater,1000)



