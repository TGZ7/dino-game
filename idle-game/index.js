
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
var nUpgrade1 = 0
var addition_upgrade1 = 0
function buyUpgrade1() {
    console.log('clickaste')
    if (balance >= upgrade1Cost) {
        nUpgrade1 += 1
        balance -= upgrade1Cost
        addition_upgrade1 += upgrade1Salary + Math.round(nUpgrade1 * 0.2)
        addition += upgrade1Salary + Math.round(nUpgrade1 * 0.2)
        upgrade1Cost = Math.round(upgrade1Cost * 1.15)
        document.getElementById("nUpgrade1").innerHTML = nUpgrade1
        document.getElementById("balance").innerHTML = balance
        document.getElementById("upgrade1").innerHTML = upgrade1Cost
        document.getElementById("speed").innerHTML = addition
        document.getElementById("addition_upgrade1").innerHTML = addition_upgrade1
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



