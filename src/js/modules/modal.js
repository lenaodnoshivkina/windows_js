function openModal(modalSelector, modalTimerId, marginRight){
    const modal =  document.querySelector(modalSelector);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${marginRight}px`;
    if (modalTimerId){
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector){
    const modal =  document.querySelector(modalSelector);
    modal.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.marginRight = `0px`;
}

function modal(triggerSelector, modalSelector, closeSelector, modalTimerId, clickOverflow = true) {
    
    const trigger = document.querySelectorAll(triggerSelector),
          modal =  document.querySelector(modalSelector),
          close = modal.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll();
    
    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target){
                e.preventDefault();
            }

            windows.forEach(item => {
                item.style.display = 'none';        
            });

            openModal(modalSelector, modalTimerId, scroll);
        });
    });

    close.addEventListener('click', () => {
        windows.forEach(item => {
            item.style.display = 'none';        
        });

        closeModal(modalSelector);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal && clickOverflow){
            windows.forEach(item => {
                item.style.display = 'none';        
            });

            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.style.display == 'block'){
            windows.forEach(item => {
                item.style.display = 'none';        
            });

            closeModal(modalSelector);
        }
    });

    function calcScroll(){
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

}

export default modal;
export {closeModal, openModal};