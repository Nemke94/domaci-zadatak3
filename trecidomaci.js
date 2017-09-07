var stanjeRacuna = prompt("Koliko imate para na racunu? ");

var proizvod = prompt("Koliko kosta proizvod koji zelite da kupite? ");

var staProiz = stanjeRacuna / proizvod;

var okruglo = Math.floor(staProiz)

alert("Broj proizvoda koji mozete kupiti: " + okruglo);