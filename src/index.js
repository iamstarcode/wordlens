
const lightIcon = document.querySelector('#lightIcon');
const darkIcon = document.querySelector('#darkIcon');



handleThemeToggle()


function fecthWord (){
    const data  = fetch('https://api.dictionaryapi.dev/api/v2/entries/en/word')
    .then(res => res.json())
}


function getTheme(){
    let theme = localStorage.getItem('theme')
    console.log(theme)
    if(theme == null){
        setTheme("light")
        return "light";
    }
    else return theme
}

function setTheme(theme){
    localStorage.setItem('theme', theme)
}

function toggleTheme(){
    let theme  = getTheme()
    setTheme(theme=="dark"?"light":"dark");
    handleThemeToggle();
}

function handleThemeToggle(){
    let theme = getTheme()
    document.documentElement.className = theme
    if(theme == "dark"){
        lightIcon.classList.remove('flex')
        lightIcon.classList.add('hidden')
        darkIcon.classList.add('flex')
        darkIcon.classList.remove('hidden')
    }
    else{
        lightIcon.classList.remove('hidden')
        lightIcon.classList.add('flex')
        darkIcon.classList.add('hidden')
        darkIcon.classList.remove('flex')
    }
}