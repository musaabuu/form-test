

const radios = document.querySelectorAll('input[type="radio"]');
const container = document.getElementById("container");

const divs = document.querySelectorAll('div[name="radio-input"]');


divs.forEach(div => {
    div.addEventListener('click', () => {
        divs.forEach(div => div.classList.remove("background-active"));
        const radio = div.querySelector('input[type="radio"]');
        if (radio) {
            radio.checked = true;
            div.classList.add("background-active");
        }
    });
});

radios.forEach(radio => {
    radio.addEventListener('click', () => {
        radios.forEach(r => r.parentElement.classList.remove("background-active"));
        if (radio.checked) {
            radio.parentElement.classList.add("background-active");
        }
    });
});