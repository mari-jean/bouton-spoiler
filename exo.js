let hidden = true; // Variable pour suivre l'état du message (caché ou affiché)

function toggleSpoiler() {
    let messageElement = document.getElementById('message');
    let spoilerButton = document.getElementById('spoilerButton');

    if (hidden){
        messageElement.classList.remove('hidden');// Supprime la classe "hidden" pour afficher le message
        spoilerButton.textContent ="Cacher";// Met à jour le texte du bouton
        hidden = false;// Met à jour l'état du message à affiché
    }else{
        messageElement.classList.add('hidden');// Ajoute la classe "hidden" pour cacher le message
        spoilerButton.textContent = "Afficher";// Met à jour le texte du bouton
        hidden = true;// Met à jour l'état du message à caché
    }
}
let spoilerButton = document.getElementById('spoilerButton');
spoilerButton.addEventListener('click', toggleSpoiler);