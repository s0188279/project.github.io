document.querySelector('.menu-toggle').addEventListener('click', function () {
    const menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('active');
});
function selectCard(selectedCard) {
    // Убираем класс 'selected' у всех карточек
    const cards = document.querySelectorAll('.card2');
    cards.forEach(card => {
        card.classList.remove('selected');
    });

    // Добавляем класс 'selected' к выбранной карточке
    selectedCard.classList.add('selected');
}
$(document).ready(function () {
    const $carousel = $('.carousel');
    const $pager = $('.pager');

    $carousel.slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
    });

    // Обновление пейджера
    function updatePager() {
        const current = $carousel.slick('slickCurrentSlide') + 1;
        const total = $carousel.slick('getSlick').slideCount;
        $pager.text(`${current} / ${total}`);
    }

    // Первоначальное обновление пейджера
    updatePager();

    // Событие при смене слайда
    $carousel.on('afterChange', function () {
        updatePager();
    });

    // Навигация кнопками
    $('.prev').on('click', function () {
        $carousel.slick('slickPrev');
    });

    $('.next').on('click', function () {
        $carousel.slick('slickNext');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.faq-item h3');

    items.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;
            content.classList.toggle('visible');
        });
    });
});

document.getElementById('feedback-form').addEventListener('submit', function (event) {
    event.preventDefault(); // предотвращаем перезагрузку страницы

    const formData = new FormData(this); // собираем данные формы

    fetch('https://formcarry.com/s/E2F_LeyAVHk', { 
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('response-message').innerText = 'Сообщение успешно отправлено!';
                this.reset(); // очищаем форму
            } else {
                document.getElementById('response-message').innerText = 'Произошла ошибка. Пожалуйста, попробуйте еще раз.';
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            document.getElementById('response-message').innerText = 'Произошла ошибка. Пожалуйста, попробуйте еще раз.';
        });
});

