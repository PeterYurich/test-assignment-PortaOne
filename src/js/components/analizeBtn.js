import { resultMarkup } from "../markup/resultMarkup"

const container = document.getElementById("resultContainer")
const analizeBtn = document.querySelector(".submitBtn")

function analizeText(e) {
    e.preventDefault()
    const textarea = document.querySelector(".textarea")
    const text = textarea.value.trim()

    const unicCharacter = (charactersArray) => charactersArray.find((character, index, arr) => {
        const otherCharacters = arr.filter((_, ind) => ind !== index)
        return !otherCharacters.includes(character)
    })

    const wordsArray = text.split(" ")
    const unicCharactersFromEachWord = wordsArray.map(word => {
        const wordCharactersArray = word.split("")

        return unicCharacter(wordCharactersArray)
    })

    const result = unicCharacter(unicCharactersFromEachWord)
    
    container.innerHTML = resultMarkup(result)
}

analizeBtn.addEventListener("click", analizeText)