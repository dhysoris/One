import {  gridImage1, gridImage2, gridImage3 } from "/images.js"

gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({
    scrollTrigger: {
        lerp: 0.1,
        smoothWheel: true
    }
})

lenis.on("scroll", ScrollTrigger.update)
gsap.ticker.add((timer) => lenis.raf(timer * 400))
gsap.ticker.lagSmoothing[0]

const paragraphs = document.querySelectorAll("p")
let span = []

paragraphs.forEach(paragraph => {
    let html = ""
    let pArray = paragraph.textContent.split("")
    pArray.map(array => html += `<span>${array}</span>`)
    paragraph.innerHTML = html
});

span = [...document.querySelectorAll("span")]

function animateText () {
    span.forEach(span => {
        if (span.parentElement.getBoundingClientRect().top < window.innerHeight / 2) {
            let {left, top} = span.getBoundingClientRect();
            top = top - (window.innerHeight * .4)
            let opacityValue = 1 - ((top * .01) + (left * .001)) < 0.1 ? 0.1 : 1 - ((top * .01) + (left * .001)).toFixed(3)
            span.style.opacity = opacityValue
        }
    })
}


const left = document.querySelector(".left")
const right = document.querySelector(".right")
const footer = document.querySelector("footer")

function animateFooter () {
    let {bottom} = footer.getBoundingClientRect();
    let scale = (bottom - window.innerHeight)
    scale = scale < 0 ? 0 : scale 
    left.style.transform = `translateX(${-scale}px)`
    right.style.transform = `translateX(${scale}px)`
}

window.addEventListener("scroll", () => {
    animateText()
    animateFooter()
})




