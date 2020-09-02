import "./slider";
import modal from './modules/modal';
import {openModal} from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';


window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {
        form: 1,
        width: undefined,
        height: undefined,
        type: 'tree',
        profile: undefined
    };
    
    let deadline = '2020-12-01';

    changeModalState(modalState);

    const modalTimerId = setTimeout(() => openModal('.popup', modalTimerId), 600000);  

    modal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    modal('.phone_link', '.popup', '.popup_close', modalTimerId);
    modal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');




    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');

    forms(modalState);

    timer('.container1', deadline);
});

