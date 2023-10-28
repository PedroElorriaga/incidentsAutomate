const description = document.querySelector('#description');
const credential = document.querySelector('#credential');
const button = document.querySelector('.btn-event');
const forms = document.querySelector('.form-credentials');
const tagErrorDescription = document.createElement('p');
const tagErrorCredential = document.createElement('p');
const loadingTag = document.querySelector('#gif-loading');

let anyEmptyField = false;
let shouldPrevent = true;

button.addEventListener('click', (e) => {
    if (shouldPrevent) {
        e.preventDefault();
    }
});

description.addEventListener('keydown', (e) => {
    description.setAttribute('class', 'description');
    tagErrorDescription.innerHTML = '';
    anyEmptyField = false;
});

credential.addEventListener('keydown', (e) => {
    credential.setAttribute('class', 'description');
    tagErrorCredential.innerHTML = '';
    anyEmptyField = false;
});

const hideLoadGif = () => {
    loadingTag.setAttribute('hidden', 'true');
}

const descriptionEmpty = () => {
    if (!description.value) {
        description.setAttribute('class', 'description erro');
        createErrorMessage('Descrição', 'O campo de Descrição não pode estar vazio');
        anyEmptyField = true;
        shouldPrevent = true;
    }

    if (!credential.value) {
        credential.setAttribute('class', 'credential erro');
        createErrorMessage('Credenciais', 'O campo de Credenciais não pode estar vazio');
        anyEmptyField = true;
        shouldPrevent = true;
    }
};

const createErrorMessage = (tag, msg) => {
    if (tag === 'Credenciais') {
        tagErrorCredential.innerText = `${msg}*`
        forms.insertBefore(tagErrorCredential, credential);
        tagErrorCredential.setAttribute('class', 'error-msg');
        tagErrorCredential.style.color = 'red';
    }

    if (tag === 'Descrição') {
        tagErrorDescription.innerText = `${msg}*`
        forms.insertBefore(tagErrorDescription, description);
        tagErrorDescription.setAttribute('class', 'error-msg');
        tagErrorDescription.style.color = 'red';
    }
}

const checkLengthPID = (pid) => {
    const numberPID = +pid;
    if (Number.isInteger(numberPID)) {
        if (pid.length < 8 || pid.length > 8) {
            credential.setAttribute('class', 'credential erro');
            createErrorMessage('Credenciais', 'PID inválido');
            return false;
        }
    }
    return true;
}

const createIncident = () => {
    descriptionEmpty();

    if (!anyEmptyField) {
        if (checkLengthPID(credential.value)) {
            loadingTag.removeAttribute('hidden');
            shouldPrevent = false;
        }
    }
}

hideLoadGif();
