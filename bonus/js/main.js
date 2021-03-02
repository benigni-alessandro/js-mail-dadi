var dadoutente = Math.floor(Math.random() * 6) + 1;
console.log(dadoutente);
var dadocpu = Math.floor(Math.random() * 6) + 1;
console.log(dadocpu);

if (dadoutente > dadocpu) {
  console.log("Hai vinto!!!");
} else if (dadoutente < dadocpu) {
  console.log("Hai perso :(");
} else {
  console.log("Pareggio");
}
