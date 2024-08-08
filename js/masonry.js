
import { gridImage1, gridImage2, gridImage3 } from "images.js"


const grid = document.querySelector(".masonry__grid")
const gridFlow = document.querySelector(".grid__flow")

function masonry () {
    const dataset = [ gridImage1, gridImage2, gridImage3 ]

    dataset.forEach(data => {
        let gridContainer = document.createElement("div")
        gridContainer.classList.add("grid__container")

        data.forEach(set => {
            let gridImagesContainer = document.createElement("div")
            gridImagesContainer.classList.add("grid__image__container")

            let gridImages = document.createElement("img")
            gridImages.classList.add("grid__image")
            gridImages.src = set.image

            gridImagesContainer.appendChild(gridImages)
            gridContainer.appendChild(gridImagesContainer)
            gridFlow.appendChild(gridContainer)
        })
    })
}

masonry()
