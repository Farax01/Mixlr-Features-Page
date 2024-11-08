document.addEventListener("DOMContentLoaded", function () {
    let hiddenDiv = document.getElementsByClassName("hidden-div")
    let hoverBtn = document.getElementsByClassName("hover-button")

    hoverBtn.addEventListener("mouseover", function () {
        hiddenDiv.style.display = "block";
    });

    hoverBtn.addEventListener("mouseout", function () {
        hiddenDiv.style.display = "none";
    });
})