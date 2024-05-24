document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.shows__tabs__button');
    const tabLists = document.querySelectorAll('.shows__list');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe ativa de todos os botões e listas
            tabButtons.forEach(btn => btn.classList.remove('shows__tabs__button--is-active'));
            tabLists.forEach(list => list.classList.remove('shows__list--is-active'));

            // Adiciona a classe ativa ao botão e lista correspondentes
            const tabId = this.getAttribute('data-tab-button');
            this.classList.add('shows__tabs__button--is-active');
            document.querySelector(`.shows__list[data-tab-id="${tabId}"]`).classList.add('shows__list--is-active');
        });
    });
});