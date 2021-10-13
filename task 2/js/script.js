const loginForm = document.querySelector('.login-form'),
      inputs = loginForm.querySelectorAll('input'),
      submitBtn = loginForm.querySelector('.submit-btn');



loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach (input => {
        checkEmpty(input);
    })
})


function validate (inp) {
    const value = inp.value;
    const reg = new RegExp(inp.dataset.regex);
    const warning = inp.parentNode.querySelector('.warning-sign');

    if (reg.test(value)) {
        valid (inp);
    } else {
        notValid (inp);
        warning.innerHTML = `Invalid ${inp.name}`;
    }
}

function notValid (inp) {
    inp.parentNode.classList.add('is-invalid');
    inp.parentNode.classList.remove('is-valid');
}

function valid (inp) {
    inp.parentNode.classList.remove('is-invalid');
    inp.parentNode.classList.add('is-valid');
}

function checkEmpty (inp) {
    const warning = inp.parentNode.querySelector('.warning-sign');

    if(inp.value.length < 1) {
        notValid(inp);
        warning.innerHTML = `Empty ${inp.name}`;
    } else {
        if(inp.dataset.regex) {
            validate(inp);
        } else {
        valid(inp);
        }
    }    
}


