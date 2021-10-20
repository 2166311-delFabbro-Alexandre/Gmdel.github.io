let message="Hello outer world!";

alert (message);
console.log("del was here");

/*
//let nom + prompt
let nom = prompt("Quel est votre nom?");
alert ("Bonjour " + nom);
*/

//confirm + if
let resultat = confirm("Voulez-vous continuer?");

if (resultat == true) {
    alert("Nice!");
}
else {
    alert("Booo");
}

function getSatisfaction() {
    //confirm + if
let resultat = confirm("Voulez-vous continuer?");

if (resultat == true) {
    alert("Nice!");
}
else {
    alert("Booo");
}
    
}


//let message2="Hello à la console";
//console.log(message2);
//message2 = 2;
//alert (message2 + 3);

/*
//On peut déclarer une constante (en MAJUSCULE)
const message3="constante";
const COULEUR_ORANGE= "#ffaa00"; //hardcoded
*/

/*
COULEUR_ORANGE = "#ffffff"; //provoque une erreur
*/

//les variables sur sensibles à la casse



