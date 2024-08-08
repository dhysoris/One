const masonryGrid = document.querySelector(".masonry__grid")
const gridFlow = document.querySelector(".grid__flow")
const image = document.querySelectorAll(".grid__image")
const gridImageContainer = document.querySelectorAll(".grid__image__container")

function gridPixel () {
    gridImageContainer.forEach(gridC => {
        const grid = document.createElement('div')
        grid.classList.add("image__pixel__grid")

        gridC.append(grid)
    })
}

gridPixel()

const pixelImagegrid = document.querySelectorAll(".image__pixel__grid")

function add () {
    pixelImagegrid.forEach(pixel => {
        for (let i = 0; i < 900; i++) {
            const tGrid = document.createElement("div")
            tGrid.classList.add("pixel__color")
            
            pixel.append(tGrid)
        }
    })
}

add()



