function openModal(modalSelector, modalTimerId){
    const modal =  document.querySelector(modalSelector);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    if (modalTimerId){
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector){
    const modal =  document.querySelector(modalSelector);
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, closeSelector, modalTimerId, clickOverflow = true) {
    
    const trigger = document.querySelectorAll(triggerSelector),
          modal =  document.querySelector(modalSelector),
          close = modal.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]');
    
    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target){
                e.preventDefault();
            }

            windows.forEach(item => {
                item.style.display = 'none';        
            });

            openModal(modalSelector, modalTimerId);
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

}

export default modal;
export {closeModal, openModal};