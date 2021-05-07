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
    },

    expenses() {
        //somar as saidas
    },


    total() {
        //Total = incomes - expenses    
    }
    
}


const DOM = {
    transactionContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionContainer.appendChild(tr)
    
    },

    innerHTMLTransaction(transaction){

        const CSSclass = transaction.amount > 0 ? 'income' : 'expense'

        const amount = transaction.amount

        const html = `
                <td class="description">${transaction.description}</td>
                <td class="${CSSclass}">${transaction.amount}</td>
                <td class="date">${transaction.date}</td>
                <td><img src="./assets/minus.svg" alt="Remover dado"></td>
            
                `
        return html
    }
}


const Utils = {
    formartCurrency(value) {
        const signal = Number(value) < 0 ? '-' : ''
    }
}



transaction.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})