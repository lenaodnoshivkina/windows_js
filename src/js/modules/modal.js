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

function modal(triggerSelector, modalSelector, closeSelector, modalTimerId) {
    
    const trigger = document.querySelectorAll(triggerSelector),
          modal =  document.querySelector(modalSelector),
          close = modal.querySelector(closeSelector);
    
    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target){
                e.preventDefault();
            }
            openModal(modalSelector, modalTimerId);
        });
    });

    close.addEventListener('click', () => {
        closeModal(modalSelector);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal){
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.style.display == 'block'){
            closeModal(modalSelector);
        }
    });

}

export default modal;
export {closeModal, openModal};