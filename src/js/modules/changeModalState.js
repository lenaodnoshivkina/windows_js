import checkNumInputs from './checkNumInputs';
import modal from './modal';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems(event, elem, prop){

        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName){
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        }else{
                            state[prop] = item.value; 
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }

    bindActionToElems('click', windowForm, 'form');

    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');

    const inputsHeightAndWidth = [...windowHeight, ...windowWidth];

    inputsHeightAndWidth.forEach(item => {
        item.addEventListener('change', () => {
            if(state.width && state.height){
                modal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', null, false);   
            }
        });
    });

    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');

    windowProfile.forEach(item => {
        item.addEventListener('change', () => {
            if(state.profile){
                modal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', null, false)   
            }
        });
    });
    
};
export default changeModalState;