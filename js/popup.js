// // selectors to get the popup 

// const popup = document.querySelector('.popup');
// const popupSelector = document.querySelector('#help-popup-selector');
// const closeSelector = document.querySelector('.close');

// // function to open the popup box
// const togglePopup = () => {
//     popup.style.display = 'block';
//     // popup.style.color = 'black';
// };

// // function to close the popup box
// const closePopup = () => {
//     popup.style.display = 'none';
// };

// popupSelector.addEventListener('click', togglePopup);
// closeSelector.addEventListener('click', closePopup);

// window.addEventListener('click', () => {
//     if (event.target == popup) {
//         popup.style.display = 'none';
//     }
// });

// set cursor style to pointer
document.querySelector('.popup').style.cursor = 'pointer';
document.querySelector('.help-popup-selector').style.cursor = 'pointer';

// COMPONENT FOR THE POPUP

class Popup {
    constructor(popupElement) {
        this.popupElement = popupElement;
        this.popupSelector = this.popupElement.querySelector('.help-popup-selector');
        this.popupContent = document.querySelector('.popup-content');

        this.popupSelector.addEventListener('click', () => {
            this.togglePopup();
        })
    }
    togglePopup() {
        this.popupContent.classList.toggle('hidden-popup')
    }
}

let popups = document.querySelectorAll('.popup').forEach(popup => new Popup(popup))


















