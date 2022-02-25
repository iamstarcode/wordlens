const lightIcon = document.getElementById('lightIcon')
const darkIcon = document.getElementById('darkIcon')
const wordSection = document.getElementById('wordsection')
const wordInput = document.querySelector("input[name='wordinput']")
const errorLable = document.getElementById('errorlabel')
const word = document.getElementById('word')
const phoneticText = document.getElementById('phonetictext')
const meaningsDiv = document.getElementById('meanings')
const meaningDiv = document.getElementById('meaningdiv')
const toggle = document.getElementById('toggle')
const error = document.getElementById('error')
const skeleton = document.getElementById('skeleton')
const audiobtn = document.getElementById('audiobtn')
const audio = document.getElementById('audio')

handleThemeToggle()

async function fecthWord(word) {
  skeleton.style.display = 'flex'
  error.style.display = 'none'
  wordSection.style.display = 'none'

  try {
    let res = await fetch(
      'https://api.dictionaryapi.dev/api/v2/entries/en/' + word,
    )

    if (res.ok == false) {
      skeleton.style.display = 'none'
      error.style.display = 'flex'
      wordSection.style.display = 'block'
      meaningsDiv.style.display = 'none'
      meaningDiv.style.display = 'none'
      return false
    } else {
      skeleton.style.display = 'none'
      error.style.display = 'none'
      wordSection.style.display = 'block'
      meaningsDiv.style.display = 'block'
      meaningDiv.style.display = 'block'
      return await res.json()
    }
  } catch (error) {}
}

function playAudio() {
  audio.play()
}

async function handleSubmit(e) {
  e.preventDefault()
  if (wordInput.value.length <= 1) {
    errorLable.style.display = 'flex'
    return
  } else {
    errorLable.style.display = 'none'
  }

  const data = await fecthWord(wordInput.value)
  if (data == false) {
    return
  }

  let getPhoneticText = data[0]?.phonetics.find((item, index) => {
    if (item.text?.length > 0) return true
  })

  let getPhoneticAudio = data[0]?.phonetics.find((item, index) => {
    if (item.audio?.length > 0) return true
  })

  if(getPhoneticAudio !=undefined){
    audio.setAttribute('src', getPhoneticAudio?.audio)
    audiobtn.style.display ="block"
  }
  else{
    audiobtn.style.display ="none"
  }


  word.textContent = wordInput.value
  phoneticText.textContent = getPhoneticText?.text

  let meaningsString = ''
  data[0]?.meanings.map((item) => {
    meaningsString += meaningsHtml(item)
  })
  meaningsDiv.innerHTML = meaningsString
}

function meaningsHtml(meaning) {
  let others = ' '
  meaning.definitions?.map((item) => (others += othersHtml(item)))
  let html = `<div class="block">
                 <header class="text-sm md:text-base font-semibold capitalize">${meaning.partOfSpeech}</header>
                 <ul class=" list-decimal text-sm md:text-base px-5">
                 ${others}
                 </ul>
                 </div>`

  html = html.trim()
  return html
}

function othersHtml(definition) {
  definitionHtml = `<li  class="leading-5 p-2"> ${definition?.definition}<ul>`
  let exampleHtml = ''
  let synonymsHtml = ''
  let antonymsHtml = ''

  if (definition.example != undefined) {
    exampleHtml += `<li class="italic font-normal text-muted">sentence: “${definition?.example}"</li>`
  }
  if (definition.synonyms != undefined) {
    synonymsHtml += `<li class="font-medium">Synonyms: “${flatArray(
      definition?.synonyms,
    )}”</li>`
  }

  if (definition.antonyms != undefined) {
    antonymsHtml += `<li class="font-medium">Antonyms: “${flatArray(
      definition?.antonyms,
    )}”</li>`
  }

  definitionHtml += exampleHtml + synonymsHtml + antonymsHtml + '</ul></li>'
  return definitionHtml
}

function flatArray(arr) {
  if (arr != undefined) {
    return arr.reduce((pv, cv) => {
      return pv + ', ' + cv
    })
  }
}
function getTheme() {
  let theme = localStorage.getItem('theme')
  if (theme == null) {
    setTheme('light')
    return 'light'
  } else return theme
}

function setTheme(theme) {
  localStorage.setItem('theme', theme)
}

function toggleTheme() {
  let theme = getTheme()
  setTheme(theme == 'dark' ? 'light' : 'dark')
  handleThemeToggle()
}

function handleThemeToggle() {
  let theme = getTheme()
  document.documentElement.className = theme
  if (theme == 'dark') {
    lightIcon.classList.remove('flex')
    lightIcon.classList.add('hidden')
    darkIcon.classList.add('flex')
    darkIcon.classList.remove('hidden')
  } else {
    lightIcon.classList.remove('hidden')
    lightIcon.classList.add('flex')
    darkIcon.classList.add('hidden')
    darkIcon.classList.remove('flex')
  }
}
