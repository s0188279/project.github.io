document.querySelector('.menu-toggle').addEventListener('click', function () {
    const menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('active');
});
function selectCard(selectedCard) {
    // ������� ����� 'selected' � ���� ��������
    const cards = document.querySelectorAll('.card2');
    cards.forEach(card => {
        card.classList.remove('selected');
    });

    // ��������� ����� 'selected' � ��������� ��������
    selectedCard.classList.add('selected');
}

