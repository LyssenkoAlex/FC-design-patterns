//View
import '../scss/modal-window.scss';

//Singleton
export class ModalWindow {
    constructor() {
        if (typeof ModalWindow.instance === 'object') {
            return ModalWindow.instance;
        }

        this.modal = document.createElement('div');
        this.modal.className = 'overlay';
        this.modal.innerHTML = `<div class="modal-window"><h3 class="modal-window__title">Something went wrong</h3><p class="modal-window__error"></p></div>`;
        document.querySelector('body').appendChild(this.modal);
        this.modal.addEventListener('click', () => this.hide());

        ModalWindow.instance = this;
        console.log('New singleton was created');
        return this;
    }

    show(message) {
        this.modal.querySelector('.modal-window__error').innerHTML = message;
        this.modal.style.display = 'block';
    }

    hide() {
        this.modal.style.display = 'none';
    }

}
