const colors = ["green", "red", "rgb(133, 122, 200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const copyContainer = document.getElementById('copyContainer');

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copyButton');
    copyButton.addEventListener('click', handleCopyClick);

    function handleCopyClick() {
        const currentColor = color.textContent;
        copyToClipboard(currentColor);
        copyContainer.innerHTML = '<span class="checkmark"><i class="fas fa-check"></i>copied</span>';

        // Show the "Copy" button again after 2 seconds
        setTimeout(function () {
            copyContainer.innerHTML = '<button id="copyButton" class="btn-copy"><i class="fas fa-clipboard"></i>Copy</button>';
            const newCopyButton = document.getElementById('copyButton');
            newCopyButton.addEventListener('click', handleCopyClick);
        }, 1000);
    }

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
});
