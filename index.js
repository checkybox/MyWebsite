// Hide everything below the Hello section
$('.temp-hidden').hide()

// Automatic theme switching based on system preference
function setThemeFromSystem() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-bs-theme", prefersDark ? "dark" : "light");
}
setThemeFromSystem();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setThemeFromSystem);

//
