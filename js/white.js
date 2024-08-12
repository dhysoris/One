const h1 = document.querySelectorAll("h1")
const h3 = document.querySelectorAll("h3")
const body = document.querySelector("body")

window.addEventListener("click", (e) => {
    let background = document.querySelector("body").style.backgroundColor === "black"

    if (background) {
        document.querySelector("body").style.backgroundColor = "white"
    } else {
        document.querySelector("body").style.backgroundColor = "black"
    }
})
