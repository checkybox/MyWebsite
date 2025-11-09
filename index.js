// Hide everything below the Hello section
$('.temp-hidden').hide()

// Automatic theme switching based on system preference
function setThemeFromSystem() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-bs-theme", prefersDark ? "dark" : "light");
}
setThemeFromSystem();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setThemeFromSystem);

// Form validation in contact section
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!this.checkValidity()) {
        e.stopPropagation();
        this.classList.add('was-validated');
        return;
    }

    // Show success message if form is valid
    document.getElementById('success-message').classList.remove('d-none');
    this.reset();
    this.classList.remove('was-validated');

    // Hide success message after 3 seconds
    setTimeout(() => {
        $("#success-message").fadeOut(500);
    }, 3000);
});

