const navBtn = document.getElementById("nav-btn")
const closeBtn = document.getElementById("close-btn")
const mobileOverlay = document.querySelector(".Mobile-overlay")

navBtn.addEventListener("click", () => {
    mobileOverlay.classList.toggle("show")
})