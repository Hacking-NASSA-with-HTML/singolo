const NAVIGATION = document.getElementById('navigation');
const BUTTON = document.getElementById('sendButton');
const CLOSE_BUTTON = document.getElementById('closeButton');
const subjectFieldVariable = document.getElementById('subjectField');
const textareaFieldVariable = document.getElementById('textareaField');



NAVIGATION.addEventListener('click', (event) => {
    NAVIGATION.querySelectorAll('a').forEach(el => el.classList.remove('focused'));
    event.target.classList.add('focused');
});

BUTTON.addEventListener('click', () => {
    const subject = document.getElementById('subject').value.toString();
    const personComment = document.getElementById('personComment').value.toString();

    /*document.getElementById('subjectField').innerText = subject;*/
    if (subject.length == 0) {
        subjectFieldVariable.innerText = 'Без темы';
    } else {
        subjectFieldVariable.innerText = subject;
        document.getElementById('temaP').classList.remove('collaps__p__tema');
    }
    /*document.getElementById('textareaField').innerText = personComment;*/
    if (personComment.length == 0) {
        textareaFieldVariable.innerText = 'Без описания ';
    } else {
        textareaFieldVariable.innerText = personComment;
        document.getElementById('opisanieP').classList.remove('collaps__p__opisanie');
    }
    document.getElementById('confirmationMessageBlock').classList.remove('hidden');
});

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('subjectField').innerText = '';
    document.getElementById('textareaField').innerText = '';
    document.getElementById('nearFooterForm').reset();
    document.getElementById('confirmationMessageBlock').classList.add('hidden');
    document.getElementById('temaP').classList.add('collaps__p__tema');
    document.getElementById('opisanieP').classList.add('collaps__p__opisanie');
});


/********************************** Let's disable message from form ****************/

const DISABLE_FORM = document.getElementById('nearFooterForm');


DISABLE_FORM.addEventListener('submit', (event) => {
    event.preventDefault();
});

