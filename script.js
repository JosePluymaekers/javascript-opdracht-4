// this is my 3rd javascript code!

console.log("mag jij wel naar binnen?")

//de if statement

const leeftijdcheck = 52
const isFemale = true
const driverStatus = "zuiperd"
const name = "Piet"
const totalAmount = 100.50


if (leeftijdcheck >= 18) {
    console.log("Je mag naar binnen. Welkom in onze kroeg")
} else {
    console.log("helaas, jij moet buiten blijven")
}


if (isFemale) {
    console.log("jij bent een vrouw, welkom op ons feest")
} else {
    console.log("Weg jij vieze vent die je bent. Het is ladies only")
}



if (driverStatus === "bob") {
    console.log("heel verstandig")
} else {
    console.log("we bellen graag een taxi voor je")
}

if (leeftijdcheck >= 18 && leeftijdcheck <= 25) {
    console.log("Je krijgt 50% korting op bier")
} else {
    console.log("jij krijgt geen korting. tip: zoek een vriend tussen 18 en 25 jaar oud ")
}


if (name === "Bram" || name === "Sarah") {
    console.log("jij krijg een biertje op onze kosten")
} else {
    console.log("jij moet gewoon betalen voor je bier")
}

if (totalAmount >= 25.00 && totalAmount <= 49.99) {
    console.log("je krijgt een portie (vega)bitterballen van ons")
}
if (totalAmount >= 50.00 && totalAmount <= 99.99) {
    console.log("je krijgt een portie nachos van ons")
}
if (totalAmount >= 100.00) {
    console.log("je krijgt een fles champagne van ons")
}