// Script JavaScript simple pour le projet de test GitHub
console.log('Projet GitHub test - script.js chargé !');

// Fonction pour afficher un message quand on clique sur le bouton
function showMessage() {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = 'Bravo ! Le projet fonctionne correctement. 🎉';
    messageDiv.style.color = '#2ecc71';
    
    // Ajouter un effet visuel
    messageDiv.style.transform = 'scale(1.05)';
    setTimeout(() => {
        messageDiv.style.transform = 'scale(1)';
    }, 300);
}

// Attacher l'événement au bouton quand la page est chargée
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('testButton');
    if (button) {
        button.addEventListener('click', showMessage);
    }
    
    // Afficher un message dans la console
    console.log('DOM chargé - prêt pour les interactions');
});

// Fonction utilitaire pour afficher l'heure actuelle
getCurrentTime = function() {
    const now = new Date();
    return now.toLocaleTimeString();
};

console.log('Heure actuelle :', getCurrentTime());