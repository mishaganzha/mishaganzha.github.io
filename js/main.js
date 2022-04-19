
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

