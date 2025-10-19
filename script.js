const themeToggleBtn = document.getElementById("themeToggleButton");
let isDark = false;
let isDeep = false;
let isLight = false;



themeToggleBtn.addEventListener("click", () => {
    if(!isDark && !isDeep){
        isDark = true;
        isDeep = false;
        document.body.classList = 'deepTheme';
        themeToggleBtn.textContent = "Deep Theme";
        console.log("Theme changed to deep theme");
    }else if(!isDeep && isDark){
        isDeep = true;
        isDark = false;
        document.body.classList = 'darkTheme';
        themeToggleBtn.textContent = "Dark Theme";
        console.log("Theme changed to dark theme");
    }else{
        isDark = false;
        isDeep = false;
        document.body.classList = 'lightTheme';
        themeToggleBtn.textContent = "Light Theme";
        console.log("Theme changed to light theme");
    }
});


// let svelteBoxBtn = document.getElementById("svelteBtn");
// let htmlcssjsBtn = document.getElementById("htmlcssjsBtn");
// let promptingBtn = document.getElementById("promptingBtn");
// let rotation = 0;

// svelteBoxBtn.addEventListener("click", () => {
//     console.log(`Box 1 is rotating ${rotation} degrees!`);
//     rotation += 360;
//     svelteBoxBtn.style.transform = `rotate(${rotation}deg)`;
// });

// htmlcssjsBtn.addEventListener("click", () => {
//     console.log(`Box 2 is rotating ${rotation} degrees!`);
//     rotation += 360;
//     htmlcssjsBtn.style.transform = `rotate(${rotation}deg)`;
// });

// promptingBtn.addEventListener("click", () => {
//     console.log(`Box 3 rotating ${rotation} degrees!`);
//     rotation += 360;
//     promptingBtn.style.transform = `rotate(${rotation}deg)`;
// })


let githubBtn = document.getElementById("githubBtn");



githubBtn.addEventListener("click", () => {
    console.log("Github profile preview");
    window.location.assign("https://github.com/Majed-Develops");
})

function displayTest(){
document.getElementById("demo").innerHTML = "HELLO BRO!";
}

document.addEventListener("click",displayTest);

