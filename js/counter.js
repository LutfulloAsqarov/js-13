const body = document.querySelector("body");

let container = document.createElement("div");
container.classList = "container";
body.appendChild(container);

let wrapper = document.createElement("div");
wrapper.className = "wrapper";
container.appendChild(wrapper);

let count = document.createElement("h1");
count.className = "count";
count.innerHTML = 0;
wrapper.appendChild(count);

let audio = document.createElement("audio");
audio.className = "audio";
audio.src = "./audio/audio.m4a";
wrapper.appendChild(audio);
console.log(wrapper);

let dec = document.createElement("button");
dec.classList.add("dec", "btn");
dec.innerHTML = "-";

let reset = document.createElement("button");
reset.classList.add("reset", "btn");
reset.innerHTML = `<i class="fa-solid fa-rotate-right"></i>`;

let inc = document.createElement("button");
inc.classList.add("inc", "btn");
inc.innerHTML = "+";

let btns = document.createElement("div");
btns.className = "btns";
btns.appendChild(dec);
btns.appendChild(reset);
btns.appendChild(inc);
wrapper.appendChild(btns);

let num = 0;

inc.addEventListener("click", () => {
    count.innerHTML = ++num;
    audio.play();
});

dec.addEventListener("click", () => {
    if (num > 0) {
        count.innerHTML = --num;
    }
    audio.play();
});

reset.addEventListener("click", () => {
    count.innerHTML = num = 0;
    audio.play();
});
