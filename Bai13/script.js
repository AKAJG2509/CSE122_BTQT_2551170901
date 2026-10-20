
const clock = document.getElementById("clock");
const greeting = document.getElementById("greeting");

function createDigit(number) {
    const image = document.createElement("img");

    image.src = String(number).padStart(2, "0") + ".gif";
    image.alt = String(number);
    image.onerror = function () {
        this.alt = String(number);
    };

    return image;
}

function createColon() {
    const image = document.createElement("img");

    image.src = "haicham.gif";
    image.alt = ":";
    image.className = "colon";

    return image;
}

function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    clock.replaceChildren();

    const time = hours + minutes + seconds;

    for (let i = 0; i < time.length; i++) {
        clock.appendChild(createDigit(Number(time[i])));

        if (i === 1 || i === 3) {
            clock.appendChild(createColon());
        }
    }

    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
        greeting.textContent = "Chào buổi sáng";
    } else if (hour >= 12 && hour < 18) {
        greeting.textContent = "Chào buổi chiều";
    } else if (hour >= 18 && hour < 22) {
        greeting.textContent = "Chào buổi tối";
    } else {
        greeting.textContent = "Chúc ngủ ngon";
    }
}

updateClock();
setInterval(updateClock, 1000);
