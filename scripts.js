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

const transactions = [
    {
        id: 1,
        description: 'Cartão de Crédito',
        amount: 20000,
        date: '23/01/2021',
    },

    {
        id: 2,
        description: 'Internet',
        amount: -50000,
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
        let income = 0;
        
        transactions.forEach(transaction => {
            if(transaction.amount > 0) {
                income += transaction.amount;
            }
        })

        return income;
    },

    expenses() {
        let expense = 0;
        
        transactions.forEach(transaction => {
            if(transaction.amount < 0) {
                expense += transaction.amount;
            }
        })

        return expense;
    },

    total() {
        return Transaction.incomes() + Transaction.expenses();
    }
    
}

const DOM = {

    transactionsContainer : document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)

    },


    innerHTMLTransaction (transaction) {
        const CSSclass = transaction.amount > 0 ? 'income' : 'expense'

        const amount = Utils.formatCurrency(transaction.amount)

        const html = 
        `    
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover dado">
        </td>
        `
        return html
    },

    updateBalance() {
        document
            .getElementById('incomeDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.incomes())
   
        document
            .getElementById('expenseDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.expenses())

        document
            .getElementById('totalDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.total())
    }


}


const Utils = {
    formatCurrency(value) {
        const sinal = Number(value) < 0 ? '-' : ''
        value = String(value).replace(/\D/g, '')
        value = Number(value) / 100
        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })

        return sinal + value
    }
}


transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})


DOM.updateBalance()