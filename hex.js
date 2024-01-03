const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const copyContainer = document.getElementById('copyContainer')

btn.addEventListener('click', function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copyButton');
    copyButton.addEventListener('click', function () {
        const hexCode = color.textContent;
        copyToClipboard(hexCode);
        copyContainer.innerHTML = '<span class="checkmark"><i class="fas fa-check"></i></span>';

        setTimeout(function () {
            copyContainer.innerHTML = '';
        }, 2000);

    });

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
});
