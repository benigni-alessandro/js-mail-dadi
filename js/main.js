var emailutente = prompt("Inserisci la tua email");
// document.getElementById('emailutente').innerHTML = "Nome: " + nome;
console.log(emailutente);

var listaemail = ("pincopallo@gmail.com", "gianluca@gmail.com", "alessandro@gmail.com", "marco@gmail.com", "paolo@gmail.com" );
var soldatino = false;

for (var i = 0; i < listaemail.length; i++) {
  if (listaemail[i] == emailutente) {
    soldatino = true;
  }
}

if (soldatino) {
  console.log("Accesso negato");
} else {
  console.log("Accesso consentito");
}
