function clickToExpand(block, btn, indexBtn) {
    indexBtn = !indexBtn ? 0 : +indexBtn;
    let btnElem = document.querySelectorAll('.' + btn)[indexBtn];
    let blockElem = document.querySelector('.' + block);

    btnElem.onclick = function() {
        let expand = false;
        let startValueBtn = btnElem.textContent;

        return function(e) {
            e.preventDefault();
            expand = !expand;
            blockElem.classList.toggle(block + '--expand');
            btnElem.classList.toggle(btn + '--reverse');

            if (expand) {
                btnElem.textContent = 'Свернуть';
            } else {
                btnElem.textContent = startValueBtn;
            }
        }
    }();
}
clickToExpand('first-screen__text', 'arrow-link', 0);
clickToExpand('brands-list', 'arrow-link', 1);
clickToExpand('tech-list', 'arrow-link', 2);