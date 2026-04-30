let lightBtn = document.querySelector("#enable-light-theme");
let darkBtn = document.querySelector("#enable-dark-theme");
let html = document.querySelector("html");

if (html) {
    lightBtn.addEventListener("click", function () {
        html.classList.remove("dark");
        html.classList.add("light");
    });

    darkBtn.addEventListener("click", function () {
        html.classList.remove("light");
        html.classList.add("dark");
    });
}
