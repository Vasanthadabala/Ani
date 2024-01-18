document.addEventListener("DOMContentLoaded", function() {
    var animatedContainer = document.getElementById("animatedContainer");

    animatedContainer.addEventListener("animationend", function() {
        // Add a class to the container to start the paragraph's animation after h1 animation is complete
        animatedContainer.classList.add("startAnimation");
    });
});
