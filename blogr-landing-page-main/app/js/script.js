// Elements

const body = document.querySelector("body");
const dropdownElements = document.querySelectorAll('.header__dropdown > li');
const introArrows = document.querySelectorAll('.header__dropdown > li .arrow');
const introArrowSVGPath = document.querySelectorAll('.header__dropdown > li i svg path');
const hamburger = document.querySelector(".header__hamburger");
const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header__menu");
const hamburgerItems = document.querySelectorAll('.header__menu__items > li');
const hamburgerItemsMenu = document.querySelectorAll('.header__menu__items > li ul');
const hamburgerArrows = document.querySelectorAll('.header__menu__items .arrow');
const hamburgerArrowsSVGPath = document.querySelectorAll('.header__menu__items .arrow > svg path');

// Code

dropdownElements.forEach(function (option, idx) {
    option.addEventListener('mouseover', () => {
        introArrowSVGPath[idx].setAttribute('stroke', '#fff');
    })
    option.addEventListener('mouseout', () => {
        introArrowSVGPath[idx].setAttribute('stroke', '#c8c8cb');
    })

    option.addEventListener('click', () => {
        if (option.classList.contains("open")) {
            option.classList.remove("open");
            introArrows[idx].classList.remove("open");
        } else {
            closeAllOptions(dropdownElements, introArrows);
            option.classList.add("open");
            introArrows[idx].classList.add("open");
        }
    })

});

function closeAllOptions(nodeList, arrowList) {
    nodeList.forEach((option, idx) => {
        option.classList.remove("open");
        arrowList[idx].classList.remove("open");
        hamburgerItemsMenu[idx].style.maxHeight = null;
    });
}

// Hamburger Toggle

hamburger.addEventListener('click', () => {
    if (header.classList.contains('open')) {
        // Hamburger Menu Close

        header.classList.remove('open');
        body.classList.remove('noscroll');
        headerMenu.classList.add('fade-out');
        headerMenu.classList.remove('fade-in');
    } else {
        // Hamburger Menu Open

        header.classList.add('open');
        body.classList.add('noscroll');
        headerMenu.classList.add('fade-in');
        headerMenu.classList.remove('fade-out');
    }

})

// Hamburger Item Toggle

hamburgerItems.forEach(function (option, idx) {
    option.addEventListener('click', () => {

        let panel = hamburgerItemsMenu[idx];

        if (panel.classList.contains('open')) {
            panel.classList.remove('open');
            hamburgerArrows[idx].classList.remove("open");
            panel.style.maxHeight = null;
        } else {
            closeAllOptions(hamburgerItemsMenu, hamburgerArrows);
            panel.classList.add('open');
            hamburgerArrows[idx].classList.add("open");
            panel.style.maxHeight = (panel.scrollHeight + 50) + 'px';
        }


    })
})