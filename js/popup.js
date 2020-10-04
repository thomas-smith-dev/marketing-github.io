// set cursor style to pointer
document.querySelector('.popup').style.cursor = 'pointer'
document.querySelector('.help-popup-selector').style.cursor = 'pointer'

// COMPONENT FOR THE POPUP

class Popup {
  constructor(popupElement) {
    this.popupElement = popupElement
    this.popupSelector = this.popupElement.querySelector('.help-popup-selector')
    this.popupContent = document.querySelector('.popup-content')

    this.popupSelector.addEventListener('click', () => {
      this.togglePopup()
    })
  }
  togglePopup() {
    this.popupContent.classList.toggle('hidden-popup')
  }
}

let popups = document
  .querySelectorAll('.popup')
  .forEach((popup) => new Popup(popup))
