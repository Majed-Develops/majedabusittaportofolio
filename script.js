// Theme modes


const savedTheme = localStorage.getItem("theme");

const themeToggleBtn = document.getElementById("themeToggleButton");

let currentTheme = savedTheme ? savedTheme : "lightTheme";

document.body.classList = currentTheme;

themeToggleBtn.textContent = currentTheme.replace("Theme", " theme");


themeToggleBtn.addEventListener("click", () => {
   switch(currentTheme){
        case "lightTheme": currentTheme = "copybookTheme"; break;
        case "copybookTheme": currentTheme = "darkTheme"; break;
        case "darkTheme": currentTheme = "lightTheme"; break;
    }


    document.body.classList = currentTheme;
    themeToggleBtn.textContent = currentTheme.replace("Theme", " theme");
    localStorage.setItem("theme", currentTheme);
    
});


// Active nav links color


let links = document.querySelectorAll(".headerElements");

links.forEach(link => {
    if(link.href.includes(location.pathname)){
        link.classList.add("active");
    }else{
        link.classList.remove("active");
    }
});


// github button

let githubBtn = document.getElementById("githubBtn");

githubBtn.addEventListener("click", () => {
    console.log("Github profile preview");
    window.open("https://github.com/Majed-Develops");
});

