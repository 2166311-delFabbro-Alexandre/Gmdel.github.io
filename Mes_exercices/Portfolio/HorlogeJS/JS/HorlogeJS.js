function horlogeJS() {

//récupérer date et heure dans une variable
let dateActuel = new Date();

//Isoler une partie de la date ou de l'heure
let heure = dateActuel.getHours();
let minute = dateActuel.getMinutes();
let seconde = dateActuel.getSeconds();
let jour = dateActuel.getDay();
let date = dateActuel.getDate();
let mois = dateActuel.getMonth()+1;
let annee = dateActuel.getFullYear();
let ampm = (dateActuel.getHours() >= 12) ? "PM" : "AM";

//définir les variables
heure = amPM(heure);
heure = updateTime(heure);
minute = updateTime(minute);
seconde = updateTime(seconde);


//définir la journée
const journee = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];

document.getElementById("date").innerText = journee[jour] + "  " + annee + " - " + mois + " - " + date;
document.getElementById("clock").innerText = heure + " : " + minute + " : " + seconde + "  " + ampm;
}

let t = setInterval(function(){horlogeJS()}, 1000);

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

function amPM(m) {
    if (m == 0) {
        return 12;
    }
    else if (m > 12) {
        return m - 12;
    }
    else {
        return m;
    }
}

function onOff1() {
    var onOff = document.getElementById("btn1");
    onOff.classList.toggle("btn1");
 }

 function onOff2() {
    var onOff = document.getElementById("btn2");
    onOff.classList.toggle("btn2");
 }

horlogeJS();