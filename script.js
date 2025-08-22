function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.classList.add("active");
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.classList.remove("active");
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect

const texts = [
    " BASIC WEB DEVELOPER",
    " Tech Enthusiast",
    " Cyber Security Enthusiast",
    " Web Application Penetration Tester",
    " Network management",
    " Computer Repairs Technician"
]

let speed  =80;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter
