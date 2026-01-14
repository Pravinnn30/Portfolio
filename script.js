document.querySelector("#bar").addEventListener('click', function(){
    document.querySelector(".nav-small").style.display = 'flex';
    document.querySelector("#cross").style.display = 'block';
    document.querySelector("#bar").style.display = 'none';
});

document.querySelector("#cross").addEventListener('click', function(){
    document.querySelector("#cross").style.display = 'none';
    document.querySelector(".nav-small").style.display = 'none';
    document.querySelector("#bar").style.display = 'block';
});
document.querySelectorAll('div.nav-small')[0].addEventListener('click',function() {
    document.querySelector("#cross").style.display = 'none';
    document.querySelector(".nav-small").style.display = 'none';
    document.querySelector("#bar").style.display = 'block';
});

const textElement = document.getElementById("typing-text");
const roles = ["Problem Solver", "Java Developer", "Web developer", "Software Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        textElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 3000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 1500; // Pause before new word
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", type);

// download resume 
document.querySelectorAll(".resume-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = "src/assets/pdf/Resume.pdf";
        link.download = "Pravin_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
