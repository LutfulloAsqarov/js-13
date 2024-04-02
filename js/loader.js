const body = document.querySelector("body");

let loader = document.createElement("div");
let title = document.createElement("p");
let loaderBox = document.createElement("div");
let loaderBtn = document.createElement("button");
let text = document.createElement("h1");
let loaderContent = document.createElement("div");

loader.className = "loader";
title.className = "loader__title";
loaderBox.className = "loader__box";
loaderBtn.className = "loader__btn";
loaderContent.className = "loader__content";
text.className = "loader__text";

loaderContent.appendChild(title);
loaderContent.appendChild(loaderBox);
loaderContent.appendChild(loaderBtn);
loader.appendChild(text);
loader.appendChild(loaderContent);
body.appendChild(loader);

title.innerHTML = "LOADING...";
loaderBtn.innerHTML = "Add";
text.innerHTML = "Welcome";
text.style.display = "none";

let count = 0;
loaderBtn.addEventListener("click", () => {
    if (count < 10) {
        let loaderItem = document.createElement("span");
        loaderItem.className = "loader__item";
        loaderBox.appendChild(loaderItem);
        count++;
    } else {
        loaderContent.style.display = "none";
        text.style.display = "block";
    }
});

console.log(loader);
