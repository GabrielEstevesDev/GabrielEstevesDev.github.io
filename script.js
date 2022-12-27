var txtAnim = document.getElementById("txtAnim");

var typewriter = new Typewriter(txtAnim, {
  //loop: true,
  delay: 0,
});

typewriter
  .typeString("<h2>Gabriel ESTEVES<h2>")
  .pauseFor(1000)
  .typeString("<h1>Étudiant en deuxième année d'informatique</h1>")
  .typeString("<a href='#mesprojets'><button>MES PROJETS</button></a>")
  .typeString("<br>")
  .start();
