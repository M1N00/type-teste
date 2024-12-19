paragraphe = document.getElementById("text");
paragraphe2 = document.getElementById("curseur");
text1 = "Saviez-vous que le coeur humain, infatigable, bat environ 3,5 milliards de fois au cours d'une vie moyenne ? De plus, il est capable de pomper suffisamment de sang pour remplir un camion-citerne entier chaque année.En parlant de records, Central Park à New York, souvent appelé le poumon de la ville, abrite environ 9 mille bancs.Fait surprenant, vous pouvez faire graver votre nom sur l'un de ces bancs en échange d'une contribution financière.Dans un autre registre, le terme SOS, utilisé internationalement comme signal de détresse, ne signifie en réalité rien du tout.Il a été choisi pour sa simplicité en code Morse : trois points, trois traits, trois points (· · · — — — · · ·), facilement reconnaissable même en présence d'interférences. Enfin, il est étonnant de constater que seulement 66 ans séparent le premier vol en avion réalisé par les frères Wright en 1903 et le premier pas de l'homme sur la Lune en 1969.Cette progression fulgurante illustre l'incroyable rapidité des avancées technologiques humaines au cours du XXe siècle. "
paragraphe.innerHTML = text1;

let nbr_mot = 0;

let timerElement = document.getElementById("timer");
let seconds = 60;


function startTimer() {
    setInterval(() => {
        
        

        if(seconds === 0)
        {
            console.log("ton total est de" + nbr_mot);
            paragraphe.innerHTML = "Vous avez écrit : "+nbr_mot+" lettre en 60 sec";
            paragraphe2.innerHTML = ""; 
        }
        else
        {
            seconds = seconds-1;
            timerElement.innerHTML = `Temps restrant : ${seconds} secondes`;
        }
    }, 1000);
}

document.addEventListener('keydown', (event) => {
    console.log(`La touche "${event.key}" a été appuyée.`);
    if(text1[0]=== event.key)
    {
        console.log(`Bonne touche`);
        paragraphe2.innerHTML =  paragraphe2.innerHTML +text1[0];
        text1 = text1.slice(1);
        paragraphe.innerHTML = text1;

        console.log(nbr_mot);

        nbr_mot ++;
    }
    else
    {
        console.log(`mauvaise touche`);
    }
        
    if (paragraphe2.innerHTML === "S") {
        startTimer();
    }
});


