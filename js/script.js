const toggleTheme = document.getElementById('toggle-theme')

toggleTheme.addEventListener("change", () => {
    document.body.classList.toggle('light')
})