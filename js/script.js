const toggleTheme = document.getElementById('toggle-theme')
const main = document.querySelector('.container')
const wrapper = document.querySelector('#wrapper')
const carousel = document.querySelector('#carousel')
const arrowBtns = document.querySelectorAll("#wrapper i")
const firstCardWidth = carousel.querySelector(".card").offsetWidth

// CHANGE THEME LIGHT/DARK MODE

toggleTheme.addEventListener("change", () => {
    document.body.classList.toggle('light')
})

// SLIDER PROJECT

let isDragging = false, startX, startScrollLeft, timeoutId

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth
    })
})

const dragStart = (event) => {
    isDragging = true
    carousel.classList.add("dragging")
    startX = event.pageX
    startScrollLeft = carousel.scrollLeft
}

const dragging = (event) => {
    if (!isDragging) return
    carousel.scrollLeft = startScrollLeft - (event.pageX - startX)
}

const dragStop = () => {
    isDragging = false
    carousel.classList.remove("dragging")
}

const autoPlay = () => {
    if (window.innerWidth < 800) return
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2000)
}

autoPlay()

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop)
wrapper.addEventListener("mouseleave", autoPlay)