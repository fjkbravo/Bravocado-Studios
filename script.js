//h3 disappear and appear cycle
window.onload = function () {
    const welcomeMessage = document.querySelector('h3');

    function toggleVisibility() {
        setTimeout(() => {
            welcomeMessage.style.opacity = '0';
        }, 6000);

        setTimeout(() => {
            welcomeMessage.style.opacity = '1';
        }, 14000);
    }
    toggleVisibility();
    setInterval(toggleVisibility, 16000);
};

//Makes the content from Bio div show and disappear when clicking on Bio/intro link
document.getElementById("Link1").addEventListener("click", function (event) {
    event.preventDefault();
    const content = document.getElementById("Link1content");
    
    if(content.classList.contains("visible")){
        content.classList.remove("visible");
    } else{
        content.classList.add("visible");

    setTimeout(() =>{
        smoothScrollTo(content.offsetTop, 2000);
        }, 200);
    }
});

//Scroll function to have content appear for user while opening Link1,2,3
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition - 50;
    let startTime = null;

    function animationStep(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        window.scrollTo(0, startPosition + distance * progress);

        if (timeElapsed < duration) {
            requestAnimationFrame(animationStep);
        }
    }

    requestAnimationFrame(animationStep);
}

//Makes the content from Hobbies div show and disappear when clicking on Hobbies link
document.getElementById("Link2").addEventListener("click", function (event) {
    event.preventDefault();
    const content = document.getElementById("Link2container");
    const playlist = document.getElementById("playlistContent");
    content.classList.toggle("visible")
    if (content.classList.contains("visible")) {
        const targetPosition = content.getBoundingClientRect().top + window.scrollY;
        smoothScrollTo(targetPosition, 2000); 
    }
});

document.getElementById("playlist").addEventListener("click", function (event) {
    event.preventDefault();
    const playlist = document.getElementById("playlistContent");
    playlist.classList.toggle("visible");
    if (playlist.classList.contains("visible")) {
        const targetPosition = playlist.getBoundingClientRect().top + window.scrollY - 200;
        smoothScrollTo(targetPosition, 1500); 
    }
});

//Makes all content under Feature appear when clicking on Feature link, then disappear along with Magic8Ball if opened as well
document.getElementById("Link3").addEventListener("click", function (event) {
    event.preventDefault();
    const link3Content = document.getElementById("Link3content");
    const magic8BallContainer = document.getElementById("magic8ball")
    if(link3Content.classList.contains("visible")){
        link3Content.classList.remove("visible");
        magic8BallContainer.classList.remove("visible");
    } else{
        link3Content.classList.add("visible");
        const targetPosition = link3Content.getBoundingClientRect().top + window.scrollY;
        smoothScrollTo(targetPosition, 1000); 
    }
});

//Answers produced by magic8ball
const possibleAnswers = [
    "Concentrate and ask again...", 
    "It is certain!",
    "It is decidedly so!",
    "Without a doubt!",
    "Yes, definitely!",
    "You may rely on it!",
    "As I see it, yes!",
    "Most likely!",
    "Outlook good!",
    "Yes!",
    "Signs point to yes!",
    "Reply hazy, try again...",
    "Ask again later...",
    "Better not tell you now...",
    "Cannot predict now...",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
   
];

//Opens black circle and all contents when magic8ball link is clicked
document.getElementById("magic8ballLink").addEventListener("click", function (event) {
    event.preventDefault();
    const content = document.getElementById("magic8ball");
    if(content.classList.contains("visible")){
        content.classList.remove("visible");
    } else{
        content.classList.add("visible");
        const targetPosition = content.getBoundingClientRect().top + window.scrollY + 370;
        smoothScrollTo(targetPosition, 800); 
    }
});

//Spin the magic 8 ball button instructions > Spins 8 > Transition to blue color, then answer provided after circle is blue
document.getElementById("questionBoxbutton").addEventListener("click", function (event) {
    event.preventDefault();
    const magic8Ball = document.getElementById("Magic8ballcontent");

    magic8Ball.classList.remove("shake");
    void magic8Ball.offsetWidth;
    magic8Ball.classList.add("shake");

    magic8Ball.classList.remove("blue-circle", "show-answer");

    magic8Ball.addEventListener("animationend", function () {
        const randomAnswer = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)]
        magic8Ball.classList.add("blue-circle");
        magic8Ball.setAttribute("data-answer", randomAnswer);
        setTimeout(() => {
            magic8Ball.classList.add("show-answer");
        }, 1500);
    }, { once: true });
});

//Reset button instructions > Clears question box > Transitions blue circle back to white with number 8 > resets shake effect for new answer
document.getElementById("resetbutton").addEventListener("click", function (event) {
    event.preventDefault();

    const textarea = document.querySelector("#questionBox textarea");
    textarea.value = "";

    const magic8Ball = document.getElementById("Magic8ballcontent");
    magic8Ball.classList.remove("shake", "blue-circle", "show-answer");
    
    magic8Ball.style.animation = "none"; 
    void magic8Ball.offsetWidth; 
    magic8Ball.style.animation = null; 
    magic8Ball.removeAttribute("data-answer");
});

//Allows for thumbnail of Jobin+Canelo pics to be seen when hovering over links as well as adds space under pics
const jobinLink = document.getElementById("Jobin");
const caneloLink = document.getElementById("Canelo");
const link1Content = document.getElementById("Link1content");

jobinLink.addEventListener("mouseenter", () => {
    link1Content.style.paddingBottom = "150px"; 
});

caneloLink.addEventListener("mouseenter", () => {
    link1Content.style.paddingBottom = "150px"; 
});

jobinLink.addEventListener("mouseleave", () => {
    link1Content.style.paddingBottom = "10px"; 
});

caneloLink.addEventListener("mouseleave", () => {
    link1Content.style.paddingBottom = "10px"; 
});
