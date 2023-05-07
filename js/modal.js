export const Modal = {

    modalOpen: document.querySelector(".modal-wrapper"),
    modalClose: document.querySelector(".imgClose"),

    open(){
        Modal.modalOpen.classList.toggle('open')
    },
    close(){
        Modal.modalClose.addEventListener('click', Modal.open)
    },

}
function handleKeyDown(event){
    if(event.key === 'Escape'){
        Modal.open()
    }
}

window.addEventListener('keydown', handleKeyDown)