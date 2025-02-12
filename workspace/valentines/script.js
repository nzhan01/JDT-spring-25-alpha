
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

let yesScale = 1;
let noScale = 1;

const messages = [
    "Are you sure?",
    "Really sure?",
    "Pookie Please?",
    "I'm going to cry... :(",
    "You're breaking my heart!",
    "REALLY sure?",
    "please?",
    "pretty please?",
    "PLEASE?",
    "PRETTY PLEASE?",
    "PLEASE PLEASE PLEASE?",
    "PLEASE PLEASE PLEASE PLEASE PL",
    "stop",
    "STOP",
    ":(",
    ":( :(",
    ":( :( :(",
    "I'm sad now",
    "No",
    "No",
    "No",
    "No",
 ];
 
 let currentMessageIndex = 0;


yesButton.addEventListener('click', ()=>{

        document.getElementById("cat").src = "data:image/jpeg;base64,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 " ; /*change the image shown 
        
        NEED to add new images sources
        */


        yesButton.textContent= "yay!!!!!!";
        noButton.style.display = "none";
        yesButton.style.transform = "scale(1.6)";
        yesButton.classList.add('shake');
        }
    )

noButton.addEventListener('click', ()=>{
    yesScale += 0.1;
    yesButton.style.transform = `scale(${yesScale})`;

    noScale -= 0.05;
    noButton.style.transform = `scale(${noScale})`;

    teleportButton(noButton);

    noButton.textContent = messages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex+1) % messages.length;
} 
)

function teleportButton(button) {
    const screenWidth = window.innerWidth; // Get the width of the screen
    const screenHeight = window.innerHeight; // Get the height of the screen
    const card = document.querySelector('.card'); // Get the card element
    const cardRect = card.getBoundingClientRect(); // Get the card's position and size
    // Define padding to keep the button within the screen and away from the card
    const padding = 20;
    // Calculate safe boundaries for the button
    const minX = padding;
    const maxX = screenWidth - button.offsetWidth - padding;
    const minY = padding;
    const maxY = screenHeight - button.offsetHeight - padding;
    // Ensure the button doesn't overlap with the card
    let randomX, randomY;
    do {
        randomX = minX + Math.random() * (maxX - minX);
        randomY = minY + Math.random() * (maxY - minY);
    } while (
        // Check if the button overlaps with the card
        randomX + button.offsetWidth > cardRect.left - padding &&
        randomX < cardRect.right + padding &&
        randomY + button.offsetHeight > cardRect.top - padding &&
        randomY < cardRect.bottom + padding
    );
    // Apply the new position
    button.style.position = 'absolute'; // Ensure the button can move freely
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}


