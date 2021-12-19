const siginBtn = document.querySelector("#signin")
const sigupBtn = document.getElementById("signup");
const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
siginBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
})

sigupBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
})
firstForm.addEventListener("submit", (e) => { e.preventDefault() });
secondForm.addEventListener("submit", (e) => { e.preventDefault() });