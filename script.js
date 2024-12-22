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

