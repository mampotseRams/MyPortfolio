
// typing animation

var i = 0;
var text = "Software Developer | Cloud Developer | Application Developer";
var speed = 60;

function typing(){

if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing, speed);
}

}

typing();


// scroll animation

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

cards.forEach(card => {

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight - 50){
card.style.opacity = "1";
card.style.transform = "translateY(0)";
}

});
});