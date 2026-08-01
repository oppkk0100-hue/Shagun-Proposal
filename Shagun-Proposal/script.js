// ==============================
// Project Shagun Final
// Part 3A-1
// ==============================

// Pages
const intro = document.getElementById("intro");
const countdown = document.getElementById("countdown");
const gallery = document.getElementById("gallery");
const letterPage = document.getElementById("letterPage");
const proposalPage = document.getElementById("proposalPage");

// Buttons
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Music
const bgMusic = document.getElementById("bgMusic");

// Slideshow
const slide = document.getElementById("slideshow");

// Timer
const timer = document.getElementById("timer");

// Typing
const typingText = document.getElementById("typingText");

// ==============================
// YOUR LETTER
// (Edit later)
// ==============================

const letter = `

                                     Happy Girlfriend's Day ❤️

                                            Dear Shagun,

Aaj Girlfriend Day hai, Agar aaj tum mere pass hote to tumhe ache se wish karta but ab please issi ko accept karna..jadda to kuch nhi mujhe bas itna kehna hai ki meri zindagi ka sabse khoobsurat din 14 August 2021 tha, jab tum meri life me aye thi.. ❤️

Tab se lekar aaj tak bahut kuch badla hoga, waqt bhi badla hoga, hum dono bhi badle honge... lekin ek cheez kabhi nahi badli — hamara feelings ek-dusre ke liye.

Tum sirf meri pyaar nahi ho, tum meri muskurahat ki wajah ho, meri har dua ka hissa ho, aur meri zindagi ki sabse khoobsurat kahani ho.

Thank you har us pal ke liye jo tumne mere saath bitaya, har hasi ke liye, har support ke liye, aur har baar mujhe samajhne ke liye. Agar mujhe dobara apni zindagi shuru karne ka mauka mile, to main har baar tumhe hi chununga.

Main yeh promise karta hoon ki chahe kitni bhi mushkilein aayein, main hamesha tumhara saath dene ki poori koshish karunga. Tumhari khushi meri khushi hai, aur tumhari muskaan meri sabse badi jeet.

Happy Girlfriend Day, meri jaan. ❤️
Thank you meri life mein aane ke liye. I love you more than words can ever express. Aur bas itna yaad rakhna...uss din se lekar aaj tak, aur aane wale har kal tak, meri duniya sirf tum ho. ❤️🌹...

Love You Forever ❤️

`;

// ==============================
// Start
// ==============================

startBtn.onclick = ()=>{

    bgMusic.play().catch(()=>{});

    intro.classList.add("hidden");

    countdown.classList.remove("hidden");

    let count=5;

    timer.innerHTML=count;

    const interval=setInterval(()=>{

        count--;

        timer.innerHTML=count;

        if(count<=0){

            clearInterval(interval);

            countdown.classList.add("hidden");

            startGallery();

        }

    },1000);

};

// ==============================
// Gallery
// ==============================

let photo=1;

function startGallery(){

    gallery.classList.remove("hidden");

    slide.src="images/1.jpeg";

    const show=setInterval(()=>{

        photo++;

        if(photo<=14){

            slide.style.opacity=0;

            setTimeout(()=>{

                slide.src="images/"+photo+".jpeg";

                slide.style.opacity=1;

            },300);

        }

        else{

            clearInterval(show);

            setTimeout(()=>{

                gallery.classList.add("hidden");

                showLetter();

            },1000);

        }

    },2500);

}
// ==============================
// Project Shagun Final
// Part 3A-2
// ==============================

// Show Letter
function showLetter(){

    letterPage.classList.remove("hidden");

    let i = 0;

    typingText.innerHTML = "";

    function type(){

        if(i < letter.length){

            typingText.innerHTML += letter.charAt(i);

            i++;

            setTimeout(type,35);

        }

    }

    type();

}

// Continue Button
nextBtn.onclick = ()=>{

    letterPage.classList.add("hidden");

    proposalPage.classList.remove("hidden");

};

// ==============================
// Move NO Button
// ==============================

function moveNoButton(){

    const x = Math.random() * (window.innerWidth - 180);

    const y = Math.random() * (window.innerHeight - 120);

    noBtn.style.position = "fixed";

    noBtn.style.left = x + "px";

    noBtn.style.top = y + "px";

}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
// ==============================
// Project Shagun Final
// Part 3B-1
// Hearts + Petals + YES
// ==============================

// Floating Hearts
function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(4+Math.random()*3)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

}

// Falling Petals
function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=(5+Math.random()*3)+"s";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },8000);

}

// Start Effects
function startEffects(){

    setInterval(createHeart,600);

    setInterval(createPetal,400);

}

// YES Button
yesBtn.onclick=()=>{

    document.body.innerHTML=`

    <div style="
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background:linear-gradient(to bottom,#000,#1b0127,#000);
    color:white;
    font-family:Poppins;
    text-align:center;
    overflow:hidden;
    ">

    <h1 style="font-size:65px;color:#ff79b0;">
    ❤️ I LOVE YOU🫂 ❤️
    </h1>

    <h2 style="margin-top:25px;">
    Thank You My Love 💍
    </h2>

    <p style="
    margin-top:35px;
    max-width:700px;
    line-height:38px;
    font-size:22px;
    ">

    Happy Girlfriend's Day ❤️

    <br><br>

    Thank you for making my life beautiful.

    <br><br>

    I promise to love you forever.

    <br><br>

    🌹❤️💍

    </p>

    <div id="fireworks"

    style="font-size:90px;margin-top:40px;">

    🎆✨❤️🌹🎉💖

    </div>

    </div>

    `;

    startEffects();

};
// ==============================
// Project Shagun Final
// Part 3B-2
// Final Effects
// ==============================

// Shooting Stars
setInterval(() => {

    const star = document.createElement("div");

    star.style.position = "fixed";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = "-20px";
    star.style.width = "3px";
    star.style.height = "120px";
    star.style.background = "linear-gradient(white,transparent)";
    star.style.transform = "rotate(45deg)";
    star.style.opacity = "0.8";
    star.style.pointerEvents = "none";
    star.style.zIndex = "999";

    document.body.appendChild(star);

    let y = -20;
    let x = parseFloat(star.style.left);

    const move = setInterval(() => {

        y += 18;
        x += 12;

        star.style.top = y + "px";
        star.style.left = x + "px";

        if (y > window.innerHeight + 100) {

            clearInterval(move);
            star.remove();

        }

    }, 20);

}, 2500);


// ==============================
// Sparkles
// ==============================

setInterval(() => {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.fontSize = "18px";
    sparkle.style.pointerEvents = "none";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 1200);

}, 500);


// ==============================
// Image Zoom Animation
// ==============================

setInterval(() => {

    if (!document.getElementById("slideshow")) return;

    slide.style.transform = "scale(1.08)";

    setTimeout(() => {

        slide.style.transform = "scale(1)";

    }, 1200);

}, 2500);


// ==============================
// End
// ==============================

console.log("❤️ Project Shagun Final Loaded Successfully ❤️");