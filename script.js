/************************************************ Let's Roll ***********************/

document.addEventListener('DOMContentLoaded', function () {

    if (window.screen.width >= 320) {
        p.setAttribute('usemap', '#phonemap320');
    }

    if (window.screen.width >= 321 && window.screen.width < 768) {
        p.setAttribute('usemap', '#phonemap375');
    }

    if (window.screen.width >= 768 && window.screen.width < 1020) {
        p.setAttribute('usemap', '#phonemap768');
    }

    if (window.screen.width >= 1020) {
        p.setAttribute('usemap', '#phonemap1020');
    }
});

var p = document.querySelector('.set__map');


window.addEventListener('resize', function () {

    if (window.screen.width = 320) {
        p.setAttribute('usemap', '#phonemap320');
    }

    if (window.screen.width >= 321 && window.screen.width < 768) {
        p.setAttribute('usemap', '#phonemap375');
    }

    if (window.screen.width >= 768 && window.screen.width < 1020) {
        p.setAttribute('usemap', '#phonemap768');
    }

    if (window.screen.width >= 1020) {
        p.setAttribute('usemap', '#phonemap1020');
    }
});


const NAVIGATION = document.getElementById('navigation');


NAVIGATION.addEventListener('click', (event) => {
    NAVIGATION.querySelectorAll('a').forEach(el => el.classList.remove('focused'));
    event.target.classList.add('focused');
});


/***************************************** Let's make slider ***********************/

var slider = document.getElementById('slider'),
    sliderItems = document.getElementById('slides'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next');

function slide(slider, items, prev, next) {
    var posX1 = 0;
    var posX2 = 0;
    var posInitial;
    var posFinal;
    var threshold = 100;
    var slides = items.getElementsByClassName('slide');
    var slidesLength = slides.length;
    var slideSize = items.getElementsByClassName('slide')[0].offsetWidth;
    var firstSlide = slides[0];
    var lastSlide = slides[slidesLength - 1];
    var cloneFirst = firstSlide.cloneNode(true);
    var cloneLast = lastSlide.cloneNode(true);
    var index = 0;
    var allowShift = true;

    // Clone first and last slide
    items.appendChild(cloneFirst);
    items.insertBefore(cloneLast, firstSlide);

    // Mouse events
    items.onmousedown = dragStart;

    // Touch events
    items.addEventListener('touchstart', dragStart);
    items.addEventListener('touchend', dragEnd);
    items.addEventListener('touchmove', dragAction);

    // Click events
    prev.addEventListener('click', function () { shiftSlide(-1) });
    next.addEventListener('click', function () { shiftSlide(1) });

    // Transition events
    items.addEventListener('transitionend', checkIndex);

    function dragStart(e) {
        e = e || window.event;
        e.preventDefault();
        posInitial = items.offsetLeft;

        if (e.type == 'touchstart') {
            posX1 = e.touches[0].clientX;
        } else {
            posX1 = e.clientX;
            document.onmouseup = dragEnd;
            document.onmousemove = dragAction;
        }
    }

    function dragAction(e) {
        e = e || window.event;

        if (e.type == 'touchmove') {
            posX2 = posX1 - e.touches[0].clientX;
            posX1 = e.touches[0].clientX;
        } else {
            posX2 = posX1 - e.clientX;
            posX1 = e.clientX;
        }
        items.style.left = (items.offsetLeft - posX2) + "px";
    }

    function dragEnd(e) {
        posFinal = items.offsetLeft;
        if (posFinal - posInitial < -threshold) {
            shiftSlide(1, 'drag');
        } else if (posFinal - posInitial > threshold) {
            shiftSlide(-1, 'drag');
        } else {
            items.style.left = (posInitial) + "px";
        }

        document.onmouseup = null;
        document.onmousemove = null;
    }

    function shiftSlide(dir, action) {
        items.classList.add('shifting');

        if (allowShift) {
            if (!action) { posInitial = items.offsetLeft; }

            if (dir == 1) {
                items.style.left = (posInitial - slideSize) + "px";
                index++;
            } else if (dir == -1) {
                items.style.left = (posInitial + slideSize) + "px";
                index--;
            }
        };

        allowShift = false;
    }

    function checkIndex() {
        items.classList.remove('shifting');

        if (index == -1) {
            items.style.left = -(slidesLength * slideSize) + "px";
            index = slidesLength - 1;
        }

        if (index == slidesLength) {
            items.style.left = -(1 * slideSize) + "px";
            index = 0;
        }

        allowShift = true;
    }
}

slide(slider, sliderItems, prev, next);


/************************* Let's add turn on/off phone screen feature 1020 *********/

// Vertical Phone on Slide 1

//const Hidden_Ver_Image = document.getElementById('hiddenVerImage');
const Vertical_Phone_Button = document.getElementById('VerticalPhoneButton');
//Hidden_Ver_Image.classList.add('hidden_v_image');
const VERTICAL_BLACK_CAP = document.querySelector('.hidden_v_image');


var verticalChecker = VERTICAL_BLACK_CAP.style.opacity = '0';
Vertical_Phone_Button.addEventListener('click', () => {
    if (verticalChecker) {
        VERTICAL_BLACK_CAP.style.opacity = '1';
        verticalChecker = false;
    } else {
        VERTICAL_BLACK_CAP.style.opacity = '0';
        verticalChecker =true;
    }
});

Vertical_Phone_Button.addEventListener('touchstart', () => {
    if (verticalChecker) {
        VERTICAL_BLACK_CAP.style.opacity = '1';
        verticalChecker = false;
    } else {
        VERTICAL_BLACK_CAP.style.opacity = '0';
        verticalChecker = true;
    }
});

// Horizontal Phone on Slide 1

const Horizontal_Phone_Button = document.getElementById('HorizontalPhoneButton');
const HORIZONTAL_BLACK_CAP = document.querySelector('.hidden_h_image');


var horizontalChecker = HORIZONTAL_BLACK_CAP.style.opacity = '0';
Horizontal_Phone_Button.addEventListener('click', () => {
    if (horizontalChecker) {
        HORIZONTAL_BLACK_CAP.style.opacity = '1';
        horizontalChecker = false;
    } else {
        HORIZONTAL_BLACK_CAP.style.opacity = '0';
        horizontalChecker = true;
    }
});

Horizontal_Phone_Button.addEventListener('touchstart', () => {
    if (horizontalChecker) {
        HORIZONTAL_BLACK_CAP.style.opacity = '1';
        horizontalChecker = false;
    } else {
        HORIZONTAL_BLACK_CAP.style.opacity = '0';
        horizontalChecker = true;
    }
});


/************************* Let's add turn on/off phone screen feature 768 **********/

// Vertical Phone on Slide 1 768

const Vertical_Phone_Button768 = document.getElementById('VerticalPhoneButton768');
const VERTICAL_BLACK_CAP768 = document.querySelector('.hidden_v_image');


var verticalChecker768 = VERTICAL_BLACK_CAP768.style.opacity = '0';
Vertical_Phone_Button768.addEventListener('click', () => {
    if (verticalChecker768) {
        VERTICAL_BLACK_CAP768.style.opacity = '1';
        verticalChecker768 = false;
    } else {
        VERTICAL_BLACK_CAP768.style.opacity = '0';
        verticalChecker768 = true;
    }
});

Vertical_Phone_Button768.addEventListener('touchstart', () => {
    if (verticalChecker768) {
        VERTICAL_BLACK_CAP768.style.opacity = '1';
        verticalChecker768 = false;
    } else {
        VERTICAL_BLACK_CAP768.style.opacity = '0';
        verticalChecker768 = true;
    }
});

// Horizontal Phone on Slide 1 768

const Horizontal_Phone_Button768 = document.getElementById('HorizontalPhoneButton768');
const HORIZONTAL_BLACK_CAP768 = document.querySelector('.hidden_h_image');


var horizontalChecker768 = HORIZONTAL_BLACK_CAP768.style.opacity = '0';
Horizontal_Phone_Button768.addEventListener('click', () => {
    if (horizontalChecker768) {
        HORIZONTAL_BLACK_CAP768.style.opacity = '1';
        horizontalChecker768 = false;
    } else {
        HORIZONTAL_BLACK_CAP768.style.opacity = '0';
        horizontalChecker768 = true;
    }
});

Horizontal_Phone_Button768.addEventListener('touchstart', () => {
    if (horizontalChecker768) {
        HORIZONTAL_BLACK_CAP768.style.opacity = '1';
        horizontalChecker768 = false;
    } else {
        HORIZONTAL_BLACK_CAP768.style.opacity = '0';
        horizontalChecker768 = true;
    }
});


/************************* Let's add turn on/off phone screen feature 375 **********/

// Vertical Phone on Slide 1 375

const Vertical_Phone_Button375 = document.getElementById('VerticalPhoneButton375');
const VERTICAL_BLACK_CAP375 = document.querySelector('.hidden_v_image');


var verticalChecker375 = VERTICAL_BLACK_CAP375.style.opacity = '0';
Vertical_Phone_Button375.addEventListener('click', () => {
    if (verticalChecker375) {
        VERTICAL_BLACK_CAP375.style.opacity = '1';
        verticalChecker375 = false;
    } else {
        VERTICAL_BLACK_CAP375.style.opacity = '0';
        verticalChecker375 = true;
    }
});

Vertical_Phone_Button375.addEventListener('touchstart', () => {
    if (verticalChecker375) {
        VERTICAL_BLACK_CAP375.style.opacity = '1';
        verticalChecker375 = false;
    } else {
        VERTICAL_BLACK_CAP375.style.opacity = '0';
        verticalChecker375 = true;
    }
});

// Horizontal Phone on Slide 1 375

const Horizontal_Phone_Button375 = document.getElementById('HorizontalPhoneButton375');
const HORIZONTAL_BLACK_CAP375 = document.querySelector('.hidden_h_image');


var horizontalChecker375 = HORIZONTAL_BLACK_CAP375.style.opacity = '0';
Horizontal_Phone_Button375.addEventListener('click', () => {
    if (horizontalChecker375) {
        HORIZONTAL_BLACK_CAP375.style.opacity = '1';
        horizontalChecker375 = false;
    } else {
        HORIZONTAL_BLACK_CAP375.style.opacity = '0';
        horizontalChecker375 = true;
    }
});

Horizontal_Phone_Button375.addEventListener('touchstart', () => {
    if (horizontalChecker375) {
        HORIZONTAL_BLACK_CAP375.style.opacity = '1';
        horizontalChecker375 = false;
    } else {
        HORIZONTAL_BLACK_CAP375.style.opacity = '0';
        horizontalChecker375 = true;
    }
});


/************************* Let's add turn on/off phone screen feature 320 **********/

// Vertical Phone on Slide 1 320

const Vertical_Phone_Button320 = document.getElementById('VerticalPhoneButton320');
const VERTICAL_BLACK_CAP320 = document.querySelector('.hidden_v_image');


var verticalChecker320 = VERTICAL_BLACK_CAP320.style.opacity = '0';
Vertical_Phone_Button320.addEventListener('click', () => {
    if (verticalChecker320) {
        VERTICAL_BLACK_CAP320.style.opacity = '1';
        verticalChecker320 = false;
    } else {
        VERTICAL_BLACK_CAP320.style.opacity = '0';
        verticalChecker320 = true;
    }
});

Vertical_Phone_Button320.addEventListener('touchstart', () => {
    if (verticalChecker320) {
        VERTICAL_BLACK_CAP320.style.opacity = '1';
        verticalChecker320 = false;
    } else {
        VERTICAL_BLACK_CAP320.style.opacity = '0';
        verticalChecker320 = true;
    }
});

// Horizontal Phone on Slide 1 320

const Horizontal_Phone_Button320 = document.getElementById('HorizontalPhoneButton320');
const HORIZONTAL_BLACK_CAP320 = document.querySelector('.hidden_h_image');


var horizontalChecker320 = HORIZONTAL_BLACK_CAP320.style.opacity = '0';
Horizontal_Phone_Button320.addEventListener('click', () => {
    if (horizontalChecker320) {
        HORIZONTAL_BLACK_CAP320.style.opacity = '1';
        horizontalChecker320 = false;
    } else {
        HORIZONTAL_BLACK_CAP320.style.opacity = '0';
        horizontalChecker320 = true;
    }
});

Horizontal_Phone_Button320.addEventListener('touchstart', () => {
    if (horizontalChecker320) {
        HORIZONTAL_BLACK_CAP320.style.opacity = '1';
        horizontalChecker320 = false;
    } else {
        HORIZONTAL_BLACK_CAP320.style.opacity = '0';
        horizontalChecker320 = true;
    }
});


/****************************** Highlighting tags from Portfolio feature ***********/

const HIGHLIGHTED_TAG = document.getElementById('tagWrapper');


HIGHLIGHTED_TAG.addEventListener('click', (event) => {
    HIGHLIGHTED_TAG.querySelectorAll('#tagWrapper>button').forEach(el => el.classList.remove('highlighted__tag'));
    event.target.classList.add('highlighted__tag');
});


/***************************** add borders to Portfolio images on click ***********/

const OUTLINED_PORTFOLIO_IMAGE = document.getElementById('portfolioImageContainer');
const portfolioItem = document.getElementById('portfolioItem');


OUTLINED_PORTFOLIO_IMAGE.addEventListener('click', (event) => {
    OUTLINED_PORTFOLIO_IMAGE.querySelectorAll('#portfolioItem').forEach(el => el.classList.remove('on__mouse__down__image__border'));
    event.target.classList.add('on__mouse__down__image__border');
});


/***************************** add shuffling to Portfolio images *******************/

const Portfolio_Button_Tag = document.getElementById('tagWrapper');


Portfolio_Button_Tag.addEventListener('click', () => {

    for (var i = OUTLINED_PORTFOLIO_IMAGE.children.length; i >= 0; i--) {
        OUTLINED_PORTFOLIO_IMAGE.appendChild(OUTLINED_PORTFOLIO_IMAGE.children[Math.random() * i | 0]);
    }
});


/********************************* Highlight menu item on scroll *******************/

function onScroll(event) {
    var sections = document.querySelectorAll('#navigation a');
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    for (var i = 0; i < sections.length; i++) {
        var currLink = sections[i];
        var val = currLink.getAttribute('href');
        var refElement = document.querySelector(val);
        if (refElement.offsetTop - 400 <= scrollPos && (refElement.offsetTop - 400 + refElement.offsetHeight > scrollPos)) {
            document.querySelector('#navigation a').classList.remove('focused');
            currLink.classList.add('focused');
        } else {
            currLink.classList.remove('focused');
        }
    }
};

window.document.addEventListener('scroll', onScroll);


/********************************** Let's make modal message from form *************/

const BUTTON = document.getElementById('sendButton');
const CLOSE_BUTTON = document.getElementById('closeButton');
const subjectFieldVariable = document.getElementById('subjectField');
const textareaFieldVariable = document.getElementById('textareaField');


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


/***************************************************** Mobile menu *****************/

const HAMBURGER = document.getElementById('hamburgerBox');
const BODY = document.getElementById('body');
const CLOSE_MOBILE_MENU = document.getElementById('navigationSection');


HAMBURGER.addEventListener('click', () => {
    BODY.classList.toggle('active_menu');
});

CLOSE_MOBILE_MENU.addEventListener('click', () => {
    BODY.classList.remove('active_menu');
});

/*CLOSE_MOBILE_MENU.addEventListener('touchmove', () => {
    BODY.classList.toggle('active_menu');
});*/


/***************************************** Animation for hamburger *****************/

const BURGER_BODY = document.getElementById('hamburgerBox');

BURGER_BODY.addEventListener('click', () => {
    BURGER_BODY.classList.toggle('activeForHumburger');
});


/************************************ The Victory looks like this. *****************/