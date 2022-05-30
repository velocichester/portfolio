const fullName = document.querySelector('#inputName');
const emailEl = document.querySelector('#inputEmail');
const messageEl = document.querySelector('#inputMessage');

const form = document.querySelector('#contact-form');


const isRequired = value => value === '' ? false : true;

const isBetween = (length, min) => length < min ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};


const checkName = () => {
    let valid = false;
    const min = 2;
    const nameVal = fullName.value.trim();
    if (!isRequired(nameVal)){
        showError(fullName, 'I want to know who you are, please.');
    } else if (!isBetween(fullName.length, min)) {
        showError(fullName, 'Surely, your name is more than ${min} characters...');
    }    else {
        showSuccess(fullName);
        valid = true;
    }
    return valid;

}

const checkMsg = () => {
    let valid = false;
    const min = 2;
    const message = messageEl.value.trim();
    if (!isRequired(message)){
        showError(messageEl, 'Don\'t you have anything you want to say?');
    } else if (!isBetween(message.length, min)) {
        showError(messageEl, 'Do you have a little more to say than ${min} characters...');
    }    else {
        showSuccess(messageEl);
        valid = true;
    }
    return valid;

}

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

/*form.addEventListener('submit', function (e) {
    //prevent the form from submitting
    e.preventDefault();

     // validate forms
     let isEmailValid = checkEmail(),
        isNameValid = checkName(),
        isMsgValid = checkMsg();

    let isFormValid = isEmailValid &&
        isNameValid && 
        isMsgValid;

    //submit if the form is valid
    if (isFormValid) {
        
    }
});*/

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'inputName':
            checkName();
            break;
        case 'inputEmail':
            checkEmail();
            break;
        case 'inputMessage':
            checkMsg();
            break;
    }
}));