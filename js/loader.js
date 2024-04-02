const body = document.querySelector("body");

let loader = document.createElement("div");
let title = document.createElement("p");
let loaderBox = document.createElement("div");
let loaderItem = document.createElement("span");

loader.className = "loader";
title.className = "loader__title";
loaderBox.className = "loader__box";
loaderItem.className = "loader__item";

loaderBox.appendChild(loaderItem);
loader.appendChild(title);
loader.appendChild(loaderBox);
body.appendChild(loader);

title.innerHTML = "LOADING...";

console.log(loader);
