// let html = document.querySelector("html");

// if (html) {
//     let userPreferDark = localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
//     let theme = userPreferDark ? "dark" : "light";
//     html.classList.add(theme);
// }

const styles = getComputedStyle(document.documentElement);
console.log(styles.getPropertyValue("--shadow-xl"));
