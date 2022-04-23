window.onload = function () {
    // все элементы класса advantages__value
    let advantagesValues = document.getElementsByClassName("advantages__value");

    // массив для проигрывания анимации только один раз
    let advantagesValuesDo = [];
    advantagesValuesDo.length = advantagesValues.length;
    advantagesValuesDo.fill(true, 0, advantagesValues.length);

    // массив с финальными значениями элементов
    let advantagesValuesNum = [100, 100, 100];

    // сколько px страницы пролистали
    let windowOffset = window.pageYOffset;

    // значение скролла в нижней точке страницы
    let visibleZone = windowOffset + window.innerHeight;

    // проверка видимости элементов класса advantages__value
    for (let i = 0; i < advantagesValues.length; i++) {
        // каждый элемент класса advantages__value
        let elem = document.getElementsByClassName("advantages__value")[i];
        // какой символ около числа
        let chr = elem.innerHTML.slice(
            elem.innerHTML.length - 1,
            elem.innerHTML.length
        );
        // расстояние каждого элемента класса advantages__value от верхней точки страницы
        let blockOffset =
            document.getElementsByClassName("advantages__value")[i].offsetTop;

        // вызов анимации, если элемент находится в видимой зоне
        if (advantagesValuesDo[i] && visibleZone > blockOffset) {
            advantagesValuesDo[i] = !advantagesValuesDo[i];
            outNum(elem, chr, advantagesValuesNum[i]);
        }
    }

    document.addEventListener("scroll", function () {
        // сколько px страницы пролистали
        let windowOffset = window.pageYOffset;

        // значение скролла в нижней точке страницы
        let visibleZone = windowOffset + window.innerHeight;

        // проверка видимости элементов класса advantages__value
        for (let i = 0; i < advantagesValues.length; i++) {
            // каждый элемент класса advantages__value
            let elem = document.getElementsByClassName("advantages__value")[i];
            // какой символ около числа
            let chr = elem.innerHTML.slice(
                elem.innerHTML.length - 1,
                elem.innerHTML.length
            );
            // расстояние каждого элемента класса advantages__value от верхней точки страницы
            let blockOffset =
                document.getElementsByClassName("advantages__value")[i].offsetTop;

            // вызов анимации, если элемент находится в видимой зоне
            if (advantagesValuesDo[i] && visibleZone > blockOffset) {
                advantagesValuesDo[i] = !advantagesValuesDo[i];
                outNum(elem, chr, advantagesValuesNum[i]);
            }
        }
    });

    function outNum(elem, chr, number) {
        let element = elem;
        let time = 500;
        let step = 2;
        let n = 0;
        let num = number;
        let intervalTime = Math.round(time / (num / step));
        element.innerHTML = n;
        let interval = setInterval(() => {
            n = n + step;
            if (n == num) {
                clearInterval(interval);
            }
            element.innerHTML = n + `${chr}`;
        }, intervalTime);
    }
};
const mainBlock = document.querySelector(".header__main-block__title");
const headerContainer = document.querySelector(".header__conteiner");
document.addEventListener("scroll", function () {
    if (window.pageYOffset >= 70) {
        headerContainer.classList.add('lock-padding');
        mainBlock.setAttribute(
            "style",
            "margin-top: 80px;"
        );


    } else {
        headerContainer.classList.remove('lock-padding');
        mainBlock.setAttribute(
            "style",
            "margin-top: 0px;"
        );

    }
});
function changeItem(thisItem) {
    for (
        let i = 0;
        i < document.getElementsByClassName("item-service").length;
        i++
    ) {
        if (document.getElementsByClassName("item-service")[i] == thisItem) {
            document.getElementsByClassName("item-service__text")[
                i
            ].style.opacity = 1;

        }
        if (document.getElementsByClassName("item-service")[i] != thisItem) {
            document
                .getElementsByClassName("item-service")
            [i].setAttribute("style", "-webkit-filter:grayscale(100%)");
            document
                .getElementsByClassName("item-service")
            [i].setAttribute("style", "filter:grayscale(100%)");
        }
    }
}

function rechangeItem(thisItem) {
    for (
        let i = 0;
        i < document.getElementsByClassName("item-service").length;
        i++
    ) {
        if (document.getElementsByClassName("item-service")[i] == thisItem) {
            document.getElementsByClassName("item-service__text")[
                i
            ].style.opacity = 0;

        }
        if (document.getElementsByClassName("item-service")[i] != thisItem) {
            document
                .getElementsByClassName("item-service")
            [i].setAttribute("style", "-webkit-filter:grayscale(0%)");
            document
                .getElementsByClassName("item-service")
            [i].setAttribute("style", "filter:grayscale(0%)");
        }
    }
}

const arrGofr = ["s", "m", "l", "kas"];
let gofr = "s";
let itemColor = 0;
let selectorCheckbox1 = document.querySelector('.checkbox__selector')
let checkbox1 = "door";
function changeType(thisType) {
    for (
        let i = 0;
        i < document.getElementsByClassName("selector-item__icon").length;
        i++
    ) {

        if (document.getElementsByClassName("selector-item__icon")[i] == thisType) {
            gofr = arrGofr[i];
            if (gofr == "l") {
                for (
                    let a = 0;
                    a < document.getElementsByClassName("color-item__l").length;
                    a++
                ) {
                    document.getElementsByClassName("color-item__l")[
                        a
                    ].setAttribute("style", "display:flex");
                }
            }
            if (gofr != "l") {
                for (
                    let a = 0;
                    a < document.getElementsByClassName("color-item__l").length;
                    a++
                ) {
                    document.getElementsByClassName("color-item__l")[
                        a
                    ].setAttribute("style", "display:none");
                }
            }
            if (gofr != "s") {
                for (
                    let a = 0;
                    a < document.getElementsByClassName("color-item__kas").length;
                    a++
                ) {
                    document.getElementsByClassName("color-item__kas")[
                        a
                    ].setAttribute("style", "display:flex");
                }
            }
            if (gofr == "s") {
                for (
                    let a = 0;
                    a < document.getElementsByClassName("color-item__kas").length;
                    a++
                ) {
                    document.getElementsByClassName("color-item__kas")[
                        a
                    ].setAttribute("style", "display:none");
                }
            }
            if (gofr != "s" & gofr != "kas") {
                document.getElementsByClassName("color-item__m")[
                    0
                ].setAttribute("style", "display:flex");
            }
            if (gofr == "s" || gofr == "kas") {
                document.getElementsByClassName("color-item__m")[
                    0
                ].setAttribute("style", "display:none");
            }
            document.getElementsByClassName("selector-item__icon")[
                i
            ].setAttribute("style", "box-shadow:0 0 10px rgb(20, 38, 201); border:1px solid rgb(20, 38, 201);");
            if (itemColor < 16) {
                document.getElementById("change__image").src = "img/konfig/garage/" + gofr + "/" + itemColor + ".jpg";

            }
            if ((itemColor >= 16 & gofr == "s") || (itemColor >= 21 & gofr == "kas") || (itemColor > 21 & gofr != "l")) {
                document.getElementsByClassName("color-item__box")[
                    itemColor
                ].setAttribute("style", "display:block; box-shadow:none; border:none");
                itemColor = 0;
                document.getElementById("change__image").src = "img/konfig/garage/" + gofr + "/" + itemColor + ".jpg";

            }
            if (itemColor >= 16 & gofr != "s") {
                document.getElementById("change__image").src = "img/konfig/garage/" + gofr + "/" + itemColor + ".jpg";

            }
            document.getElementsByClassName("color-item__box")[
                itemColor
            ].setAttribute("style", "display:block; box-shadow:0 0 10px rgb(20, 38, 201); border:1px solid rgb(20, 38, 201);");
            console.log(itemColor);
        }



        if (document.getElementsByClassName("selector-item__icon")[i] != thisType) {
            document.getElementsByClassName("selector-item__icon")[
                i
            ].setAttribute("style", "box-shadow: none; border: none;");
        }


    }
}

function changeImage(thisImage) {
    for (
        let i = 0;
        i < document.getElementsByClassName("color-item__box").length;
        i++
    ) {

        if (document.getElementsByClassName("color-item__box")[i] == thisImage) {
            itemColor = i;
            document.getElementById("change__image").src = "img/konfig/garage/" + gofr + "/" + i + ".jpg";
            document.getElementsByClassName("color-item__box")[
                i
            ].setAttribute("style", "box-shadow:0 0 10px rgb(20, 38, 201); border:1px solid rgb(20, 38, 201);");

        }
        if (document.getElementsByClassName("color-item__box")[i] != thisImage) {

            document.getElementsByClassName("color-item__box")[
                i
            ].setAttribute("style", "box-shadow: none; border: none;");

        }
        if (gofr == "l") {
            for (
                let a = 0;
                a < document.getElementsByClassName("color-item__l").length;
                a++
            ) {
                document.getElementsByClassName("color-item__l")[
                    a
                ].setAttribute("style", "display:flex");
            }
        }
        if (gofr != "l") {
            for (
                let a = 0;
                a < document.getElementsByClassName("color-item__l").length;
                a++
            ) {
                document.getElementsByClassName("color-item__l")[
                    a
                ].setAttribute("style", "display:none");
            }
        }
        if (gofr != "s") {
            for (
                let a = 0;
                a < document.getElementsByClassName("color-item__kas").length;
                a++
            ) {

                document.getElementsByClassName("color-item__kas")[
                    a
                ].setAttribute("style", "display:flex");
            }
        }
        if (gofr == "s") {
            for (
                let a = 0;
                a < document.getElementsByClassName("color-item__kas").length;
                a++
            ) {
                document.getElementsByClassName("color-item__kas")[
                    a
                ].setAttribute("style", "display:none");
            }
        }
        if (i >= 16 & gofr != "s") {
            for (
                let i = 16;
                i < document.getElementsByClassName("color-item__box").length;
                i++
            ) {
                if (document.getElementsByClassName("color-item__box")[i] == thisImage) {
                    itemColor = i;
                    document.getElementsByClassName("color-item__box")[
                        i
                    ].setAttribute("style", "display:block;  box-shadow:0 0 10px rgb(20, 38, 201); border:1px solid rgb(20, 38, 201);");

                }
                if (document.getElementsByClassName("color-item__box")[i] != thisImage) {

                    document.getElementsByClassName("color-item__box")[
                        i
                    ].setAttribute("style", "display:block;  box-shadow: none; border: none;");
                }
            }
        }

        if (i >= 21 & gofr == "l") {
            for (
                let a = 21;
                a < document.getElementsByClassName("color-item__box").length;
                a++
            ) {
                if (document.getElementsByClassName("color-item__box")[a] == thisImage) {

                    document.getElementsByClassName("color-item__box")[
                        a
                    ].setAttribute("style", "display:block;  box-shadow:0 0 10px rgb(20, 38, 201); border:1px solid rgb(20, 38, 201);");

                }
                if (document.getElementsByClassName("color-item__box")[a] != thisImage) {

                    document.getElementsByClassName("color-item__box")[
                        a
                    ].setAttribute("style", "display:block;  box-shadow: none; border: none;");
                }
            }
        }
        if (gofr != "l") {
            for (
                let a = 0;
                a < document.getElementsByClassName("color-item__l").length;
                a++
            ) {

                document.getElementsByClassName("color-item__l")[
                    a
                ].setAttribute("style", "display:none");
            }
        }

        if (gofr == "s" || gofr == "kas") {
            document.getElementsByClassName("color-item__m")[
                0
            ].setAttribute("style", "display:none");
        }

    }
}

// popup
const popupLink = document.querySelector('.popup__link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;
const timeout = 800;

popupLink.addEventListener("click", function (e) {
    const popupName = popupLink.getAttribute('href').replace('#', '');
    const curentPopup = document.getElementById(popupName);
    popupOpen(curentPopup);
    e.preventDefault();
})

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        })
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}
function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
function bodyUnlock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
//text-info


function TextSelect(thisSelector) {
    for (
        i = 0; i < document.getElementsByClassName('selector-info__item').length; i++
    ) {
        if (document.getElementsByClassName('selector-info__item')[i] != thisSelector) {
            document.getElementsByClassName('selector-info__item')[i].classList.remove('item-info__active');
            document.getElementsByClassName('info__text-conteiner')[i].classList.add('info__text-none');


        } if (document.getElementsByClassName('selector-info__item')[i] == thisSelector) {
            document.getElementsByClassName('selector-info__item')[i].classList.add('item-info__active');
            document.getElementsByClassName('info__text-conteiner')[i].classList.remove('info__text-none');
        }
    }
}
//
new Swiper('.image-slider__conteiner', {
    //стрілки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    //буллети
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',

    },
    //скрол
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    //slideToClickedSlide: true,
    //клавіатура
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    //мишка
    // mousewheel: {
    //    sensitivity: 1,
    //     eventsTarget: '.image-slider__conteiner'
    // },
    //кількість слайдів для показу
    slidesPerView: 2.2,
    //відступи між слайдами
    spaceBetween: 30,
    //слайд по центру
    centeredSlides: true,
    //нескінченність
    loop: true,
    //
    freeMode: true,
    //
    speed: 500,
    //ефекти перемикання слайдів
    effect: 'coverflow',

    coverflowEffect: {
        scale: 1,
        rotate: 0,
        stretch: 0,
        depth: 150,
        slideShadows: true,
    },
    /*   effect: 'cube',
        cubeEffect: {
            slideShadows: false,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        }, */
    preloadImages: false,
    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
});

