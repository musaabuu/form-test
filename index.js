

const radios = document.querySelectorAll('input[type="radio"]');
const container = document.getElementById("container");

const divs = document.querySelectorAll('div[name="radio-input"]');

const success = document.getElementById("success");
const submit = document.getElementById("submit-form");

const fn = document.getElementById('input-first__name');
const ln = document.getElementById('input-last__name');

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

submit.addEventListener('click', (event) => {
    event.preventDefault();
    checkInput();

    success.style.display = "grid";
    setTimeout(() => {
        success.style.display = "none";            
    }, 3000)
});

function checkInput() {
    
    if (fn.value.length === 0) {
        const container = document.querySelector('.first-name__input');
        const error = container.querySelector('p');
        const input = container.querySelector('input');
        error.style.display = "block";
        input.style.borderColor = "var(--red)";
    }
    if (ln.value.length === 0) {
        const container = document.querySelector('.last-name__input');
        const error = container.querySelector('p');
        const input = container.querySelector('input');
        error.style.display = "block";
        input.style.borderColor = "var(--red)";
    }

}
