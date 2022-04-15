const mainBlock = document.querySelector(".header__main-block__title");
const headerContainer = document.querySelector(".header__conteiner");
document.addEventListener("scroll", function () {
    if (window.pageYOffset >= 70) {
        headerContainer.setAttribute(
            "style",
            "position: fixed; top: 0; margin-top: 0; background-color: #fff; color: #00558b;"
        );
        mainBlock.setAttribute(
            "style",
            "margin-top: 80px;"
        );
    } else {
        headerContainer.setAttribute(
            "style",
            "position: initial; top: 0; margin-top: 0px; background-color: #00558b; color: #fff;"
        );
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