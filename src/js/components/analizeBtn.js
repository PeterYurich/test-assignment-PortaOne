import { resultMarkup } from "../markup/resultMarkup"

const container = document.getElementById("resultContainer")
const analizeBtn = document.querySelector(".submitBtn")

function analizeText(e) {
    e.preventDefault()
    const textarea = document.querySelector(".textarea")
    const text = textarea.value.trim()

    const findUnicCharacter = (charactersArray) => charactersArray.find((character, index, arr) => {
        const otherCharacters = arr.filter((_, ind) => ind !== index)
        return !otherCharacters.includes(character)
    })

    const wordsArray = text.split(" ")
    const unicCharactersFromEachWord = wordsArray.map(word => {
        const wordCharactersArray = word.split("")

        return findUnicCharacter(wordCharactersArray)
    })

    const result = findUnicCharacter(unicCharactersFromEachWord)
        || "the text doesn't contains a character corresponding the condition"

    container.innerHTML = resultMarkup(result)
}

analizeBtn.addEventListener("click", analizeText)