/* Индекс слайда по умолчанию */
var slideIndex = 1
var slideTextIndex = 1

showSlides(slideIndex, slideTextIndex)

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides((slideIndex += 1), (slideTextIndex += 1))
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides((slideIndex -= 1), (slideTextIndex -= 1))
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides((slideIndex = n))
}

/* Основная функция слайдера */
function showSlides(s, t) {
    // debugger
    var i

    var slides = document.getElementsByClassName("item")
    var slidesText = document.getElementsByClassName("slideText")

    var dots = document.getElementsByClassName("slider-dots_item")
    if (s > slides.length && t > slidesText.length) {
        slideIndex = 1
        slideTextIndex = 1
    }
    if (s < 1 && t < 1) {
        slideIndex = slides.length
        slideTextIndex = slidesText.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    for (i = 0; i < slidesText.length; i++) {
        slidesText[i].style.display = "none"
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex - 1].style.display = "block"
    slidesText[slideTextIndex - 1].style.display = "block"

    dots[slideIndex - 1].className += " active"
}

if (window.innerWidth <= 768) {
    document.getElementById("header").classList.toggle("collapse")
}
function handlerClick(el, wrapper) {
    var v = document.getElementById("header")
    v.classList.toggle("menuIsOpen")
}
