function helloConsole() {
    const staticText = 'Made with ❤️ by Demiweb';
    const staticUrl = '> https://demiweb.pro/';
    const hello = [`\n %c ${staticText} %c ${staticUrl} %c %c \n\n`, 'border: 1px solid #000;color: #fff; background: #3d2579; padding:5px 0;', 'color: #fff; background: #ffd800; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];

    if ((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true)) {
        window.console.log(`${staticText} - ${staticUrl}`);
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        let title = '%c';

        for (let i = 0; i < 12; i++) {
            title += ' ';
        }

        window.console.log.apply(console, hello);
        window.console.log(title, 'font: 36px/100% sans-serif; background-repeat: no-repeat; background-size: 100%; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDYwMS4xNDQ3MSAxMzkuNjk5MiIKICAgaGVpZ2h0PSIxMzkiCiAgIHdpZHRoPSI2MDEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg2LjQyMzU1LC04My41MTk0NDQpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsLTI2NC4zMSwtMjIxLjYzMTM5KSIKICAgICAgIGlkPSJnODg4Ij4KICAgICAgPGcKICAgICAgICAgaWQ9Imc4MjkiPgoJPHBhdGgKICAgZD0ibSA2NDcuOTQ5LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjcgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OSB2IDYxLjY4MyBoIC0xNDguNTggdiA2Ni4xODcgaCAxNzEuMDkxIHYgNjEuNjg0IEggNjQ3Ljk0OSBaIgogICBpZD0icGF0aDgxNSIgLz4KCgk8cGF0aAogICBkPSJtIDk0OS42MDksMTQ2OS4zOTcgdiAtMzE1LjE3IGggNzQuNzQgbCA4Mi44NDQsMTMzLjI3MSA4Mi44NDQsLTEzMy4yNzEgaCA3NC43NDEgdiAzMTUuMTcgaCAtNjguODg3IHYgLTIwNS43NjIgbCAtODguNjk4LDEzNC42MjMgaCAtMS44MDEgbCAtODcuNzk3LC0xMzMuMjcxIHYgMjA0LjQxIHoiCiAgIGlkPSJwYXRoODE3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTM0My41NjgsMTQ2OS4zOTcgdiAtMzE1LjE3IGggNjkuMzM4IHYgMzE1LjE3IHoiCiAgIGlkPSJwYXRoODE5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTU3NC45OTMsMTQ3MS42NDcgLTEwNy42MDcsLTMxNy40MiBoIDc0LjI4OCBsIDY1LjI4NiwyMTMuNDE0IDcwLjY4OCwtMjE0LjMxNSBoIDU5LjQzMiBsIDcwLjY4OCwyMTQuMzE1IDY1LjI4MiwtMjEzLjQxNCBoIDcyLjQ5MyBsIC0xMDcuNjEsMzE3LjQyIGggLTYwLjMzIGwgLTcxLjEzOCwtMjA2LjIxMSAtNzEuMTQsMjA2LjIxMSB6IgogICBpZD0icGF0aDgyMSIgLz4KCgk8cGF0aAogICBkPSJtIDE5OTYuODY2LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjYgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OCB2IDYxLjY4MyBoIC0xNDguNTc4IHYgNjYuMTg3IGggMTcxLjA5MiB2IDYxLjY4NCBoIC0yMzkuOTc4IHoiCiAgIGlkPSJwYXRoODIzIiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjI5OC41MjYsMTQ2OS4zOTcgdiAtMzE1LjE3IGggMTQ2LjMyOCBjIDM2LjMxNiwwIDYzLjc4MSw5LjMwOCA4Mi4zOTYsMjcuOTE1IDE0LjQwNywxNC40MDcgMjEuNjExLDMyLjU3MSAyMS42MTEsNTQuNDc5IDAsMjkuNzE2IC0xMy44MSw1Mi4zODEgLTQxLjQyMyw2Ny45ODUgMTkuNTA4LDcuNTA3IDM0LjIxOSwxNy4zMzUgNDQuMTIyLDI5LjQ5MSA5LjkwNiwxMi4xNTYgMTQuODU3LDI4LjQ0MyAxNC44NTcsNDguODUyIDAsMjguMjE3IC0xMC41MDksNDkuNjgyIC0zMS41MTYsNjQuMzgzIC0yMS4wMTUsMTQuNzExIC00OS44MjksMjIuMDY0IC04Ni40NDYsMjIuMDY0IGggLTE0OS45MjkgeiBtIDY3LjUzOCwtMTg3Ljc1MSBoIDYzLjkzNCBjIDMzLjMxNiwwIDQ5Ljk3NywtMTEuNDA0IDQ5Ljk3NywtMzQuMjE4IDAsLTEwLjUwNCAtMy45MDYsLTE4LjUzMSAtMTEuNzA5LC0yNC4wODggLTcuODA3LC01LjU1MSAtMTkuMDY0LC04LjMzIC0zMy43NjYsLTguMzMgaCAtNjguNDM2IHogbSAwLDEyNi45NjggaCA4Mi4zOTMgYyAzMi43MTQsMCA0OS4wNzYsLTExLjcwNyA0OS4wNzYsLTM1LjExOSAwLC0yMi44MDggLTE3LjEwOSwtMzQuMjE5IC01MS4zMjcsLTM0LjIxOSBoIC04MC4xNDIgeiIKICAgaWQ9InBhdGg4MjUiIC8+CgoJPHBhdGgKICAgZD0ibSA1MzkuNDQyLDExOTkuMDI2IGMgLTMxLjIyMiwtMjkuODYzIC03MS40NDEsLTQ0Ljc5OCAtMTIwLjY2NiwtNDQuNzk4IEggMjk1Ljg2MiB2IDE5MC43NjUgaCA2OS4zMzYgdiAtMTI4LjE4MiBoIDUzLjU3OCBjIDI4LjIxLDAgNTEuMTAzLDguODU3IDY4LjY2MiwyNi41NjQgMTcuNTYsMTcuNzE1IDI2LjMzOSw0MC41MjMgMjYuMzM5LDY4LjQzNyAwLDI4LjIxOCAtOC43MDksNTEuMTAyIC0yNi4xMTMsNjguNjYyIC0xNy40MTIsMTcuNTU5IC00MC4zNzUsMjYuMzM4IC02OC44ODgsMjYuMzM4IGggLTUzLjU3OCB2IC0wLjY1NCBoIC02OS4zMzYgdiA2My4yNCBoIDEyMi45MTUgYyA0OC45MjIsMCA4OS4wNzEsLTE1LjAwOCAxMjAuNDQsLTQ1LjAyNSAzMS4zNjIsLTMwLjAxMiA0Ny4wNTEsLTY3LjUzNiA0Ny4wNTEsLTExMi41NjEgMCwtNDUuMzE5IC0xNS42MTIsLTgyLjkxNiAtNDYuODI2LC0xMTIuNzg2IHoiCiAgIGlkPSJwYXRoODI3IiAvPgoKPC9nPgogICAgICA8ZwogICAgICAgICBpZD0iZzg1NyI+Cgk8cGF0aAogICBkPSJtIDI5NC4zNzQsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC44OSB2IDE0Ni41OSB6IgogICBpZD0icGF0aDgzMSIgLz4KCgk8cGF0aAogICBkPSJtIDM4Ny45NzksMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjMgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IEwgMzk4LjQ1LDE1NDguNTU2IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDgzMyIgLz4KCgk8cGF0aAogICBkPSJNIDYzMS43MzYsMTY3OC44MSBWIDE1NDIuMjczIEggNTgwLjY0IHYgLTEwLjA1MyBoIDExMy4wODQgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDgzNSIgLz4KCgk8cGF0aAogICBkPSJtIDc2NC41MDUsMTY3OC44MSB2IC0xNDYuNTkgaCAxMDQuMjg5IHYgMTAuMDUzIGggLTkzLjM5OSB2IDU3LjU5IGggODMuOTc2IHYgMTAuMDUxIGggLTgzLjk3NiB2IDU4Ljg0NiBoIDk0LjQ0NiB2IDEwLjA1MSBIIDc2NC41MDUgWiIKICAgaWQ9InBhdGg4MzciIC8+CgoJPHBhdGgKICAgZD0ibSA5NDIuNTA2LDE2NzguODEgdiAtMTQ2LjU5IGggNjEuNTY4IGMgMTcuODY5LDAgMzEuNjIyLDQuODE4IDQxLjI1NSwxNC40NTEgNy4zOTgsNy40MDIgMTEuMDk4LDE2LjYxNSAxMS4wOTgsMjcuNjQzIDAsMTEuODY3IC0zLjkxLDIxLjM1OSAtMTEuNzI3LDI4LjQ4IC03LjgyLDcuMTE5IC0xOC4yMTksMTEuNTkgLTMxLjIwMiwxMy40MDIgbCA0OC4zNzUsNjIuNjEzIGggLTEzLjgyMSBsIC00Ni43LC02MC43MyBoIC00Ny45NTYgdiA2MC43MyBoIC0xMC44OSB6IG0gMTAuODksLTcwLjU3MyBoIDQ5LjQyMSBjIDEyLjU2NSwwIDIyLjgyNywtMy4wMzUgMzAuNzg1LC05LjEwNyA3Ljk1OCwtNi4wNzQgMTEuOTM3LC0xNC4zNDYgMTEuOTM3LC0yNC44MTYgMCwtOS45MSAtMy43MDIsLTE3LjcyOSAtMTEuMSwtMjMuNDU1IC03LjQwMiwtNS43MjMgLTE3LjczMiwtOC41ODYgLTMwLjk5MywtOC41ODYgaCAtNTAuMDUgeiIKICAgaWQ9InBhdGg4MzkiIC8+CgoJPHBhdGgKICAgZD0ibSAxMTMxLjYwNiwxNjc4LjgxIHYgLTE0Ni41OSBoIDEwLjI2MiBsIDEwMS4xNDYsMTI3LjUzNSBWIDE1MzIuMjIgaCAxMC40NyB2IDE0Ni41OSBoIC04LjE2NyBsIC0xMDMuMjQxLC0xMzAuMjU0IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDg0MSIgLz4KCgk8cGF0aAogICBkPSJtIDEzMjIuMTcyLDE2NzguODEgNjguMjcsLTE0Ny42MzUgaCAxMC40NzEgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzOCBsIC0xOC42MzYsLTQxLjA0NSBoIC04Ni40ODkgbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU0LC01MC44ODUgaCA3Ny4yNzUgbCAtMzguNTM0LC04NC44MTQgeiIKICAgaWQ9InBhdGg4NDMiIC8+CgoJPHBhdGgKICAgZD0ibSAxNTc4LjQ5NSwxNjc4LjgxIHYgLTEzNi41MzcgaCAtNTEuMDk5IHYgLTEwLjA1MyBoIDExMy4wODUgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDg0NSIgLz4KCgk8cGF0aAogICBkPSJtIDE3MTIuNzI4LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTQ2LjU5IHoiCiAgIGlkPSJwYXRoODQ3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTkyNi41NCwxNjU4LjkxNSBjIC0xMy44MjYsMTQuOTQxIC0zMS41NTYsMjIuNDA4IC01My4xOTIsMjIuNDA4IC0yMS42NDMsMCAtMzkuMzAxLC03LjQzNCAtNTIuOTgzLC0yMi4zMDMgLTEzLjY4NCwtMTQuODY3IC0yMC41MjIsLTMyLjcwMSAtMjAuNTIyLC01My41MDQgMCwtMjAuNjYyIDYuOTEsLTM4LjQ2MSAyMC43MzEsLTUzLjQwMiAxMy44MiwtMTQuOTM4IDMxLjU1MSwtMjIuNDA2IDUzLjE5MywtMjIuNDA2IDIxLjYzNywwIDM5LjI5Niw3LjQzNCA1Mi45NzksMjIuMzAzIDEzLjY4MywxNC44NjkgMjAuNTI1LDMyLjcwMyAyMC41MjUsNTMuNTA2IDAsMjAuNjYyIC02LjkxMiwzOC40NjIgLTIwLjczMSw1My4zOTggeiBtIC05Ny40ODMsLTYuNzAxIGMgMTEuOTM2LDEyLjg0OCAyNi44MzYsMTkuMjcgNDQuNzEsMTkuMjcgMTcuODY4LDAgMzIuNywtNi4zNTIgNDQuNTAxLC0xOS4wNTkgMTEuNzk0LC0xMi43MDMgMTcuNjk0LC0yOC4zNCAxNy42OTQsLTQ2LjkwOCAwLC0xOC4yODkgLTUuOTY5LC0zMy44NTQgLTE3LjkwNCwtNDYuNjk5IC0xMS45MzgsLTEyLjg0NCAtMjYuODQyLC0xOS4yNjggLTQ0LjcxLC0xOS4yNjggLTE3Ljg3NSwwIC0zMi43MDcsNi4zNTUgLTQ0LjUwMiwxOS4wNTcgLTExLjc5OSwxMi43MDUgLTE3LjY5MywyOC4zNDQgLTE3LjY5Myw0Ni45MSAtMTBlLTQsMTguMjkxIDUuOTY1LDMzLjg1NSAxNy45MDQsNDYuNjk3IHoiCiAgIGlkPSJwYXRoODQ5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjAyMi4wMjgsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjEgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IGwgLTEwMy4yNCwtMTMwLjI1NCB2IDEzMC4yNTQgeiIKICAgaWQ9InBhdGg4NTEiIC8+CgoJPHBhdGgKICAgZD0ibSAyMjEyLjU5MywxNjc4LjgxIDY4LjI3LC0xNDcuNjM1IGggMTAuNDcgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzNSBsIC0xOC42MzksLTQxLjA0NSBoIC04Ni40ODggbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU2LC01MC44ODUgaCA3Ny4yNzEgbCAtMzguNTMzLC04NC44MTQgeiIKICAgaWQ9InBhdGg4NTMiIC8+CgoJPHBhdGgKICAgZD0ibSAyNDI4LjI5LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTM2LjUzOSBoIDg2LjA2NSB2IDEwLjA1MSB6IgogICBpZD0icGF0aDg1NSIgLz4KCjwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=);');
    } else {
        const title = 'demiweb';
        const banner = `\n%c${title.split('').join('%c %c')}%c\n`;
        const styler = [];

        const symbol = [
            'font: 32px/1.5 Helvetica, Arial, sans-serif',
            'text-transform: uppercase',
            'color: #fff',
            'background-color: #ffd800',
            'padding: 4px 14px',
        ].join(';');

        title.split('').forEach(() => {
            styler.push(symbol);
            styler.push('');
        });

        window.console.log(`${staticText} - ${staticUrl}`);
        window.console.log(banner, ...styler);
    }
}
helloConsole();



let allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();


let searchOpen = [...document.querySelectorAll('.search .icon')];
let phonesOpen = [...document.querySelectorAll('.phones .icon')];

function openSearchMob() {
    if (!searchOpen.length) {

    } else {
        searchOpen.forEach((btn) => {
            btn.addEventListener('click', () => {
                phonesOpen.forEach((ic) => {
                    ic.classList.remove('open')
                })
                btn.classList.toggle('open');
            })
        })

    }
}
openSearchMob();
function openPhonesMob() {
    if (!phonesOpen.length) {

    } else {
        phonesOpen.forEach((btn) => {
            btn.addEventListener('click', () => {
                searchOpen.forEach((ic) => {
                    ic.classList.remove('open')
                })
                btn.classList.toggle('open');
            })
        })

    }
}
openPhonesMob();

let burgerBtn = document.querySelector('.header-burger');
let headerMobMenu = document.querySelector('.header-mob');
let headerMobClose = document.querySelector('.header-mob .close-menu');

function openMobMenu() {
    if (!headerMobMenu) {

    } else {
        burgerBtn.addEventListener('click', () => {
            headerMobMenu.classList.add('open');
        })
        headerMobClose.addEventListener('click', () => {
            headerMobMenu.classList.remove('open');
        })
    }
}
openMobMenu();

$(document).ready(function () {
    $('.promo-banner__inner').slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 4500,
        arrows: true,
        prevArrow: $('.promo-banner .button-slide--prev'),
        nextArrow: $('.promo-banner .button-slide--next'),
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

    });
});

$('.sort-select').niceSelect();

setTimeout(() => {
    let sortSelReq = [...document.querySelectorAll('.sort-selector.required')];
    if (!sortSelReq.length) {

    } else {
        sortSelReq.forEach((span) => {
            let redDot = document.createElement('b');
            redDot.innerHTML = '*';
            span.querySelector('span').appendChild(redDot);
        })
    }
}, 300);

let btnFilterHome = document.querySelector('.mark-filter__btn');

function openFilterMobHome() {
    if (!btnFilterHome) {

    } else {
        btnFilterHome.addEventListener('click', () => {
            btnFilterHome.classList.toggle('open');
        })
    }
}
openFilterMobHome();


const swiper = new Swiper('.js-slider .img-slider', {
    // Optional parameters
    loop: false,
    navigation: {
        nextEl: '.button-slide--next',
        prevEl: '.button-slide--prev',
    },
});

let actionBtns = [...document.querySelectorAll('.btn--action')];

function changeActiveBtn() {
    if (!actionBtns.length) {

    } else {
        actionBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                if (btn.classList.contains('btn--fav')) {

                }
            })
        })
    }
}
changeActiveBtn();

$('.rating-stars').raty(
    {
        readOnly:   true,
        starHalf: './img/star-clear.svg',
        starOn: './img/star.svg',
        starOff: './img/star-clear.svg',
        hints: ['a', null, '', null, '', null]
    }
);



let bigRowSliders = [...document.querySelectorAll('.js-slider > .container')];

function startBigSlider() {
    if (!bigRowSliders.length) {

    } else {
        bigRowSliders.forEach((sld) => {
            let sldCont = sld.querySelector('.product-inner');
            let sldNext = sld.querySelector('.product-slider .button-slide--next');
            let sldPrev = sld.querySelector('.product-slider .button-slide--prev');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView:'auto',
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
            });
        })
    }
}
startBigSlider();


let seoBtn = [...document.querySelectorAll('.seo-btn')];

function openSeoText() {
    if (!seoBtn.length) {

    } else {
        seoBtn.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.seo-block').classList.toggle('open');
            })
        })
    }
}
openSeoText();

let faqSpan = [...document.querySelectorAll('.single-faq > span')];

function openFaqText() {
    if (!faqSpan.length) {

    } else {
        faqSpan.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.single-faq').classList.toggle('open');
            })
        })
    }
}
openFaqText();

let showMoreCatalog = document.querySelector('.show-more');

function showMoreCall() {
    if (!showMoreCatalog) {

    } else {
        showMoreCatalog.addEventListener('click', () => {
            showMoreCatalog.classList.toggle('open');
            showMoreCatalog.closest('.container').querySelector('.catalog-list').classList.toggle('open');
        })
    }
}
showMoreCall();
let cardPhotosBlock = [...document.querySelectorAll('.card-photos')];
function startPhotosSlider() {
    if (!cardPhotosBlock.length) {

    } else {
        cardPhotosBlock.forEach((blc) => {
            let mainSlides = blc.querySelector('.card-photos__container');
            let thumbsSlides = blc.querySelector('.card-photos__thumbs');

            $(mainSlides).slick({
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: true,
               fade: true,
                asNavFor: '.card-photos__thumbs',
                nextArrow: '<button class="btn btn--paper btn-slick btn-slick--next"></button>',
                prevArrow: '<button class="btn btn--paper btn-slick btn-slick--prev"></button>'
            });

            $(thumbsSlides).slick({
                slidesToShow: 4,
                slidesToScroll: 'auto',
                infinite: true,
                asNavFor: '.card-photos__container',
                dots: false,
                arrows: false,
                centerMode: true,
                focusOnSelect: true,
            });
        })
    }
}
startPhotosSlider();

let openCardInfo = [...document.querySelectorAll('.card-info-prod>span')];

function openCardInfoFnc() {
    if (!openCardInfo.length) {

    } else {
        openCardInfo.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('open');
            })
        })
    }
}
openCardInfoFnc();

let tabBtnCard = [...document.querySelectorAll('.card-tabs__btn')];
let tabTabCard = [...document.querySelectorAll('.card-tabs__tab')];

function changeTabCard() {
    if (!tabBtnCard.length) {

    } else {
        tabBtnCard.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    document.querySelector('.card-tabs__btn.active').classList.remove('active');
                    document.querySelector('.card-tabs__tab.active').classList.remove('active');
                    btn.classList.add('active');
                    tabTabCard[k].classList.add('active');
                }
            })
        })
    }
}
changeTabCard();

let startsRateModal = [...document.querySelectorAll('.rate-stars .rate')];

function hoverStarsRate() {
    if (!startsRateModal.length) {

    } else {
        startsRateModal.forEach((st, k) => {
            let number = k + 1;
            st.addEventListener('mouseover', () => {
                st.classList.add('hover');
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.add('hover');
                }
            })
            st.addEventListener('mouseout', () => {
                st.classList.remove('hover');
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.remove('hover');
                }
            })
            st.addEventListener('click', () => {
                startsRateModal.forEach((st2) => {
                    st2.classList.remove('clicked');
                })
                st.classList.add('clicked');
                st.closest('.rate-list').querySelector('p strong').innerHTML = number;
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.add('clicked');
                }
            })
        })
    }
}

hoverStarsRate();

let closeModal = [...document.querySelectorAll('.modal-close')];

function closeModalFnc() {
    if (!closeModal.length) {

    } else {
        closeModal.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('open');
                document.body.classList.remove('no-scroll');
            })
        })
    }
}
closeModalFnc();
let modalWindow = [...document.querySelectorAll('.modal-window')];

function windowModalClose() {
    if (!modalWindow.length) {

    } else {
        modalWindow.forEach((wn) => {
            wn.addEventListener('click', () => {
                wn.classList.remove('open');
                document.body.classList.remove('no-scroll');

            })
            wn.querySelector('.modal-container').addEventListener('click', (e) => {
                e.stopPropagation();
            })
        })
    }
}
windowModalClose();

let leftComment = [...document.querySelectorAll('.left-comment')];

function openCommentModal() {
    if (!leftComment.length) {

    } else {
        leftComment.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window__comment').classList.add('open');
                document.body.classList.add('no-scroll');

            })
        })
    }
}
openCommentModal();
let cardOpenComments = [...document.querySelectorAll('.card-info .product__rating a')];

function openTabComments() {
    if (!cardOpenComments.length) {

    } else {
        cardOpenComments.forEach((btn) => {
            btn.addEventListener('click', () => {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".comment-field").offset().top - 200
                }, 500);
                document.querySelector('.comment-field').click();
            })
        })
    }
}
openTabComments();

let askProd= [...document.querySelectorAll('.prod-ask')];

function openAskModal() {
    if (!askProd.length) {

    } else {
        askProd.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window__question').classList.add('open');
                document.body.classList.add('no-scroll');

            })
        })
    }
}
openAskModal();

let zindexNotify = 1000;
let addingToFav = [...document.querySelectorAll('.add-fav')];
let timerFavRemove = setTimeout(() => {
    document.querySelector('.notify--fav').classList.remove('visible');

}, 6000);
function openNotifyFav() {
    if (!addingToFav.length) {

    } else {
        addingToFav.forEach((btn) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active') ) {
                    document.querySelector('.notify--fav').classList.remove('visible');
                    document.querySelector('.notify--fav').classList.add('visible');
                    clearTimeout(timerFavRemove);
                    timerFavRemove = setTimeout(() => {
                        document.querySelector('.notify--fav').classList.remove('visible');

                    }, 6000);
                    document.querySelector('.notify--fav').style.zIndex = zindexNotify;
                    zindexNotify += 1;
                } else {

                }

            })
        })
    }
}
openNotifyFav();

let addingToFavBtn = [...document.querySelectorAll('.btn--fav')];
let timerFavRemove2 = setTimeout(() => {
    document.querySelector('.notify--fav').classList.remove('visible');

}, 6000);
function openNotifyFav2() {
    if (!addingToFavBtn.length) {

    } else {
        addingToFavBtn.forEach((btn) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active') ) {
                    document.querySelector('.notify--fav').classList.remove('visible');
                    setTimeout(() => {
                        document.querySelector('.notify--fav').classList.add('visible');

                    }, 1)
                    clearTimeout(timerFavRemove2);
                    timerFavRemove2 = setTimeout(() => {
                        document.querySelector('.notify--fav').classList.remove('visible');

                    }, 6000);
                    document.querySelector('.notify--fav').style.zIndex = zindexNotify;
                    zindexNotify += 1;
                } else {

                }

            })
        })
    }
}
openNotifyFav2();


let addingToCartBtn = [...document.querySelectorAll('.btn--cart')];
let addToCart = [...document.querySelectorAll('.add-cart')];

let timerCartRemove2 = setTimeout(() => {
    document.querySelector('.notify--cart').classList.remove('visible');

}, 6000);
let timerCartRemove3 = setTimeout(() => {
    document.querySelector('.notify--cart').classList.remove('visible');

}, 6000);
function openNotifyCart2() {
    if (!addingToCartBtn.length) {

    } else {
        addingToCartBtn.forEach((btn) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active') ) {
                    document.querySelector('.notify--cart').classList.remove('visible');
                    setTimeout(() => {
                        document.querySelector('.notify--cart').classList.add('visible');

                    }, 1)
                    clearTimeout(timerCartRemove2);
                    timerCartRemove2 = setTimeout(() => {
                        document.querySelector('.notify--cart').classList.remove('visible');

                    }, 6000);
                    document.querySelector('.notify--cart').style.zIndex = zindexNotify;
                    zindexNotify += 1;
                } else {

                }

            })
        })
    }
}
openNotifyCart2();

function openNotifyCart3() {
    if (!addToCart.length) {

    } else {
        addToCart.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                if (btn.classList.contains('active') ) {
                    document.querySelector('.notify--cart').classList.remove('visible');
                    setTimeout(() => {
                        document.querySelector('.notify--cart').classList.add('visible');

                    }, 1)
                    clearTimeout(timerCartRemove3);
                    timerCartRemove3 = setTimeout(() => {
                        document.querySelector('.notify--cart').classList.remove('visible');

                    }, 6000);
                    document.querySelector('.notify--cart').style.zIndex = zindexNotify;
                    zindexNotify += 1;
                } else {

                }

            })
        })
    }
}
openNotifyCart3();


let prodAsk= [...document.querySelectorAll('.ask-prod')];

function openModalAsk() {
    if (!prodAsk.length) {

    } else {
        prodAsk.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window__available').classList.add('open');
                document.body.classList.add('no-scroll');

            })
        })
    }
}
openModalAsk();

let showPass = [...document.querySelectorAll('.input-cont--pass')];

function openPassWord() {
    if (!showPass.length) {

    } else {
        showPass.forEach((btn) => {
            btn.querySelector('.icon').addEventListener('click', () => {
                btn.classList.toggle('no-pass'); {
                    if (btn.classList.contains('no-pass')) {
                        btn.querySelector('input').type = 'text';
                    } else {
                        btn.querySelector('input').type = 'password';
                    }
                }

            })
        })
    }
}
openPassWord();

let quantButton = [...document.querySelectorAll('.quantity__button')];

function upValueQuant() {
    if (!quantButton.length) {

    } else {
        quantButton.forEach((btn) => {
            btn.querySelector('button').addEventListener('click', () => {
                if (btn.classList.contains('quantity__button--minus')) {
                   let val =  btn.closest('.quantity-field').querySelector('.quantity input').value;
                    if (Number(val) === 0) {

                    } else {
                        let newVal =    Number(val) - 1;
                        btn.closest('.quantity-field').querySelector('.quantity input').value = newVal;
                    }


                } else {
                    let val =  btn.closest('.quantity-field').querySelector('.quantity input').value;

                        let newVal =    Number(val) + 1;
                        btn.closest('.quantity-field').querySelector('.quantity input').value = newVal;

                }
            })
        })
    }
}
upValueQuant();

let radioBtn = [...document.querySelectorAll('.radio-block')];

function changeActiveRadioBtn() {
    radioBtn.forEach((btn) => {
        let input = btn.querySelector('label');
        input.addEventListener('click', () => {
            if (input.querySelector('input').checked === true) {
                document.querySelector('.radio-block.active').classList.remove('active');
                btn.classList.add('active');
            }
        })

    })
}

changeActiveRadioBtn();

let deleteInput = [...document.querySelectorAll('.form-delete')];

function deleteInputText() {
    if (!deleteInput.length) {

    } else {
        deleteInput.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.form-change').querySelector('input').value = '';
            });
        })
    }
}
deleteInputText();


let openHistoryOrder = [...document.querySelectorAll('.order-det')];

function fncOpenHistory() {
    if (!openHistoryOrder.length) {

    } else {
        openHistoryOrder.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.history__order').classList.toggle('open');
            })
        })
    }
}
fncOpenHistory();

let cabinetLinksAnchors = [...document.querySelectorAll('.cabinet-control__container a')];

function cabinetLocation() {
    if (!cabinetLinksAnchors.length) {

    } else {
        cabinetLinksAnchors.forEach((btn, k) => {
            let href = btn.href;
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.cabinet-control__container a.active').classList.remove('active');
                btn.classList.add('active');
                if (k === 0) {
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $('#cabinet-profile').offset().top - 200
                    }, 2000);
                } else if (k === 1) {
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $('#cabinet-orders').offset().top - 200
                    }, 2000);
                } else {
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $('#cabinet-favs').offset().top - 200
                    }, 2000);
                }

            })

        })
    }
}

cabinetLocation();
