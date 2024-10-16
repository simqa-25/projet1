const prompt = require('prompt-sync')()

let choice = prompt("Veuillez choisir soit l'épée soit l'arc en tapant e pour l'épée et a pour l'arc ")
while ((choice != "a") && (choice != "e")) {
    choice = prompt("Veuillez choisir soit l'épée soit l'arc en tapant e pour l'épée et a pour l'arc ")

if (choice === "e") {
    console.log("Vous avez choisi l'épée etes vous sure de votre choix tapez Y pour confirmez et tapez N pour annuler");
    choice = prompt(" Y/N ")
}
if (choice === "Y") {
    console.log(" Vous vous emparez de l'épée ");
    break;
} else if (choice === "N") {
    choice = prompt("Vous n'avez pas choisi l'épée ,veuillez choisir soit l'épée soit l'arc en tapant a pour l'épée et e pour l'arc ")
}
if (choice === "a") {
    console.log("Vous avez choisi l'arc etes vous sure de votre choix tapez Y pour confirmez et tapez N pour annuler");
    choice = prompt(" Y/N ")
}
if (choice === "Y") {
    console.log(" Vous vous emparez de l'arc ");
    break;
} else if (choice === "N") {
    choice = prompt("Vous n'avez pas choisi l'arc ,veuillez choisir soit l'épée soit l'arc en tapant a pour l'épée et e pour l'arc ")
}
}
console.log("Bravo vous etes maintenant equipe d'une arme, vous arrivez à un croisement avec 3 chemins, chemin 1 : il mene vers un village dans une route sinueuse, chemin 2 : il mene a une mine, chemin 3 :  il mene à une foret, chemin. ");
choice = prompt("Quel chemin prenez 1, 2 ou 3 ?")
if (choice === "1") {
    console.log("Vous empruntez à peine le chemin au village et vous apercevez un trésor . Vous vous approchez du coffre, commencez à l'ouvrir et vous vous apercevez qu'il est bel et bien vide. C'etait un piege, des ennemis sortent des buissons et vous capture. C'est la fin pour vous. ");
}
else if (choice === "2") {
    console.log("Vous entrez dans une mine sombre,vous entendez des craquements sous vos pieds mais vous avez du mal à apercevoir ce qui s'y passe, et la surgit de nulle une araignée immense se jette sur vous avec des miliers d'autres araignées, le bruit des craquements etait en fait le son de vous ecrasant les araignées au sol, malheuresemnt face à une telle creature vous n'echappez pas une mort certaine. C'est la fin pour vous. ");
}
else if (choice === "3") {
    console.log("Vous empruntez le chemin se dirgeant vers la foret, et la vous voyez au loin des ennemis avec ce qui semble etre des armures legeres . "); 
choice =prompt("Vous parvenez  a terassez vos ennemis, et vous poursuivez votre chemin pour arriver dans un village ou se trouve un marchand, un druide et un sorcier, tapez m pour allez voir le marchand, tapez d pour aller voir le druide et tapez s pour allez voir le sorcier.  ");
    }
if (choice === "d") {
    console.log("Vous vous dirigez chez le druide, et vous vous rendez compte que ce druide n'a plus toute sa tete, mais malgre vous lui faites confiance et buvez son brevage, vous vous sentez revivifier, vous poursuivez votre aventure et arrivez a la dernire bataille, l'ogre qui detient votre famille. Ni une ni deux vous engagez le combat, malheuresemnt les effets de la potion du druide s'estompent, en fait le druide avait inverse 2 ingredients du coup vous etes pris soudainemnt d'une fatigue extreme, votre tete tourne et vous tombez raid de sommeil, quand vous revenez a vous, vous avez chaud et  vous vous apercevez que vous etes ligotes avec votre famille au dessus d'un feu. C'est la fin pour vous. ");
}
if (choice === "s") {
    console.log("Vous vous dirigez vers l'antre du sorcier, il vous met a l'aise vous prepare une potion, et vous fait signe de la boire en vous promettant force et vitalite, malheursement pour vous tous les sorciers sont des charlatans, c'etait une potion pour vous transformez en un etre depourvu de toute volonte et de capacite a reflechir, vous servez maintenant le sorcier et ce jusqu'au sacrifice. C'est la fin pour vous. ");
}
if (choice === "m") {
    console.log("Vous entrez dans le commerce du marchand, vous voyez une relique avec plein de poussieres, vous pensez reconnaitre la triforce mais vous restez de marbre pour ne pas montrez votre interet pour cette relique, vous faites quelques achats et vous demandez sans montrez une quelconque importance si le marchand veut bien se debarasser de la relique, par chance le marchand ne montre aucun interet pour cette relique et accepte de vous la vendre a un bon prix. Vous ressortez tout fier de votre achat et vous dirigez vers l'antre de l'ogre, l'endroit il detient votre famille. Avec desormais cette relique legendaire, plus aucun ennemis ne peut vous tenir tete, vous le terassez rapidement, libérez votre famille et rentrez au bercail. Bravo vous avez reussi.  ");
}