const toggleTheme = document.getElementById('toggle-theme')
const main = document.querySelector('.container')

toggleTheme.addEventListener("change", () => {
    document.body.classList.toggle('light')
})