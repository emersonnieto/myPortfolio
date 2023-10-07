document.getElementById("toggleButton").addEventListener("click", function() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "100%") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "100%";
    }
});