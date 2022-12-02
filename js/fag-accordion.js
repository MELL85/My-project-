(() => {

    const acc = document.getElementsByClassName('faq__accordion');
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
            this.classList.toggle('active');

            let faq__panel = this.nextElementSibling;
            if (faq__panel.style.maxHeight) {
                faq__panel.style.maxHeight = null;
            } else {
                faq__panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    }

})();