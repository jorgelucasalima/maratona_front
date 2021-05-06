const Modal = {
    open(){
        //abrir o modal
        //adicionar a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList.add('active');
    },

    close(){
        //fechar o Modal
        //remover a class active no Modal
        document
            .querySelector('.modal-overlay')
            .classList.remove('active');
    }


}