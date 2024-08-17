import {  gridImage1, gridImage2, gridImage3 } from "./images.js"

const pixelColor = document.querySelectorAll(".image__pixel__grid")
const gridImages = document.querySelectorAll(".grid__image")
const gridImageContainer = document.querySelectorAll(".grid__image__container")


const dataset = [gridImage1, gridImage2, gridImage3]
const container = document.querySelectorAll('.grid__image__container');

container.forEach((container, index) => {
    let arrayIndex = Math.floor(index / 5); // Determine which array to use
    let objectIndex = index % 5; // Determine which object in the array

    const imageElement = container.querySelector('.grid__image');
    imageElement.src = dataset[arrayIndex][objectIndex].image;
    let showingOriginal = true;

    container.addEventListener('click', function(e) {

        if (showingOriginal) {
            imageElement.src = dataset[arrayIndex][objectIndex].image2
        } else {
            imageElement.src = dataset[arrayIndex][objectIndex].image
        }

        showingOriginal = !showingOriginal
        e.stopPropagation()
        
    });
});
























