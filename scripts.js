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

const transaction = [
    {
        id: 1,
        description: 'Cartão de Crédito',
        amount: 20000,
        date: '23/01/2021',
    },

    {
        id: 2,
        description: 'Internet',
        amount: 50000,
        date: '26/01/2021',
    },

    {
        id: 3,
        description: 'Luz',
        amount: -10000,
        date: '24/01/2021',
    },

]


const Transaction = {
    incomes() {
        //somar as entradas
    }

    expenses() {
        //somar as saidas
    }


    total() {
        //Total = incomes - expenses    
    }
    
}


const DOM = {
    innerHTMLTransaction(){


        

        const html = `
        <tr>
            <td class="description">Luz</td>
            <td class="expense">- R$ 500,00</td>
            <td class="date">23/04/2021</td>
            <td><img src="./assets/minus.svg" alt="Remover dado"></td>
        </tr>
        `
    }
}


