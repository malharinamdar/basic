document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("light-toggle").addEventListener("click", function() {
        toggleTheme(localStorage.getItem("theme"))
    })
});
