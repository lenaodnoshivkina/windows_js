import "./slider";
import modal from './modules/modal';
import {openModal} from './modules/modal';
import tabs from './modules/tabs';


window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.popup', modalTimerId), 600000);  

    modal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    modal('.phone_link', '.popup', '.popup_close', modalTimerId);

    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    
});

