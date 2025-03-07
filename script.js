function startAnimation() {
    let name = document.getElementById("nameInput").value;
    if (!name) return alert("Введите ваше имя!");

    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("animation-screen").classList.remove("hidden");

    let userName = document.getElementById("userName");
    userName.textContent = name;
    userName.style.opacity = 1;

    setTimeout(() => {
        document.getElementById("marchText").style.opacity = 1;
        playMusic();
    }, 1000);
}

function playMusic() {
    let music = document.getElementById("bgMusic");
    music.play();

    setTimeout(() => {
        document.getElementById("userName").style.opacity = 0;
        document.getElementById("marchText").style.opacity = 0;
        startFlowerAnimation();
        showPoem();
    }, 2000);
}

function showPoem() {
    let poemLines = [
        "С прекрасным праздником весны",
        "Мы Вас сердечно поздравляем.",
        "Здоровья, счастья и любви",
        "От всей души мы Вам желаем!",
        "И солнце пусть Вам ярко светит,",
        "И птички радостно поют,",
        "Пусть в Вашем доме воцарятся",
        "Веселье, мир, тепло, уют."
    ];

    let delay = 1000;
    document.getElementById("poem").classList.remove("hidden");

    for (let i = 0; i < poemLines.length; i += 2) {
        setTimeout(() => {
            document.getElementById(`line${i+1}`).textContent = poemLines[i];
            document.getElementById(`line${i+2}`).textContent = poemLines[i+1];
            document.getElementById(`line${i+1}`).style.opacity = 1;
            document.getElementById(`line${i+2}`).style.opacity = 1;
        }, delay);
        delay += 2500;
    }
}

function startFlowerAnimation() {
    let container = document.getElementById("flowers-container");
    let flowerImages = ["1.png", "2.png"]; // Используем твои файлы

    for (let i = 0; i < 50; i++) {
        let flower = document.createElement("img");
        flower.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];
        flower.classList.add("flower");
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.width = Math.random() * 50 + 30 + "px";
        flower.style.animationDuration = Math.random() * 5 + 5 + "s";
        flower.style.animationDelay = Math.random() * 5 + "s";
        container.appendChild(flower);
    }
}
