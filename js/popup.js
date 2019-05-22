// selectors to get the popup 

const popup = document.querySelector('#help-popup');
const popupSelector = document.querySelector('#help-popup-selector');
const closeSelector = document.querySelector('.close');

// function to open the popup box
const togglePopup = () => {
    popup.style.display = 'block';
    // popup.style.color = 'black';
};

// function to close the popup box
const closePopup = () => {
    popup.style.display = 'none';
};

popupSelector.addEventListener('click', togglePopup);
closeSelector.addEventListener('click', closePopup);

window.addEventListener('click', () => {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
});

// set cursor style to pointer
document.querySelector('.popup').style.cursor = 'pointer';