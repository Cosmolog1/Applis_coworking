
// Citations 

const citations = ["Nouvelle technique : on passe pour des cons, les autres se marrent, et on frappe. C'est nouveau.",
    "Moi j'ai appris à lire, ben je souhaite ça à personne.",
    "Ah, le printemps ! La nature se réveille, les oiseaux reviennent, on crame des mecs.",
    "C'est pas faux.", "Sire, Sire ! On en a gros !", "C'est pas moi qu'explique mal, c'es les autres qui sont cons !",
    "C'est vrai que c'est curieux cette manie de pas vouloir torturer; ça vient d'ou ?",
    "Ma parole, des engins comme vous, ça devrait être fourni avec une notice ! ",
    "Décarre tes troupes de chez moi ou je crame ton pays. C'est assez simple comme vocabulaire ?",
    "Ça vous fait pas mal à la tête de glandouiller 24h / 24 ?", "Le gras c'est la vie !",
    "Ces conneries de gauche et de droite ! Ça veut rien dire ces machins ! Selon comme on est tourné ça change tout !",
    "Je ne mange pas de graines !!",
    "Vous avez été marié comme moi ; vous savez que la monstruosité peut prendre des formes diverses.",
    "Je lui rembourse mes genoux, et si il a filé la vérole à mes bêtes, chuis un marteau moi !",
    "Ces bourgeois, ils savent plus quoi inventer ! A force de lire et d'écrire, ils deviennent tous plus cons les uns qu'les autres.",
    "C'est au sujet que je vais vous mettre un pain dans la gueule ",
    "Je gueule, je gueule, j'pourrais gueuler dans le cul d'un poney ce serait pareil !",]
    

    let aleatoire = null;
    let hashtag = "citation";

    document.getElementById('generer').addEventListener("click", function() {
		aleatoire = Math.floor(Math.random() * citations.length);

        document.querySelector('.quote').innerHTML = citations[aleatoire];
	});

// Pierre papier ciseaux

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    const joueur = buttons[i].innerHTML;
    const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    let resultat = "";
    
    if (joueur===robot) {
      resultat = "Egalité";
    }
    else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Ciseaux" && robot === "Feuilles") || (joueur === "Feuilles") && (robot === "Pierre")) {
      resultat = "Gagné";
    }
    else {
      resultat = "Perdu";
    }
  document.querySelector(".resultat").innerHTML = `
  Joueur : ${joueur} </br>
  Robot : ${robot} <br/>
  Résultat : ${resultat}
`  ;
    
  });
  
  
}