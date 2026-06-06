console.log("Portfolio charge !");
const btn = document.getElementById("theme-btn");
btn.onclick = () => {
    document.body.classList.toggle("dark");
};
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu"); 
hamburger.addEventListener("click", () => {
   menu.classList.toggle("active");
});
const topBtn = document.getElementById("top");
window.addEventListener("scroll", () => {
    if (window>scrollY > 300) {
        topBtn.getComputedStyle.display = "block";
    } else {
        topBtn.getComputedStyle.display = "none";
    }
});
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
});