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


const Transaction = {
    all:[
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
        ],

    add(transaction){
        Transaction.all.push(transaction)

        App.reload()
    },

    remove(index){
        Transaction.all.splice(index, 1)

        App.reload()
    },

    incomes() {
        let income = 0;
        
        Transaction.all.forEach(transaction => {
            if(transaction.amount > 0) {
                income += transaction.amount;
            }
        })

        return income;
    },

    expenses() {
        let expense = 0;
        
        Transaction.all.forEach(transaction => {
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
    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = ""
    }


}

const Utils = {
    formatAmount(value){
        value = Number(value) * 100
        return value
    },


    formatDate(date){
        const splittedDate = date.split("-")
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`

    },

    formatCurrency(value) {
        const sinal = Number(value) < 0 ? '-' : ''
        value = String(value).replace(/\D/g, '')
        value = Number(value) / 100
        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })

        return sinal + value
    },


}

const Form = {
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),

    getValues() {

        return{
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value,
        }
    },

    formatData(){
        console.log('formatar os dados')
    },

    validateFields(){
        const {description, amount, date} = Form.getValues()
        if (description.trim() === '' || amount.trim() === '' || date.trim() === '') {
            throw new Error("Você esqueceu de preencher algum campo !")
        }
    },

    formatValues(){
        let {description, amount, date} = Form.getValues()
        amount = Utils.formatAmount(amount)
        date.Utils.formatDate(date)

        return {
            description,
            amount,
            date
        }

    },

    saveTransaction() {
        Transaction.add(transaction)
    },

    clearFields() {
        Form.description.value = ''
        Form.amount.value = ''
        Form.date.value = ''
    },

    submit(event){
        event.preventDefault()

        try {
            Form.validateFields()
            const transaction = Form.formatValues()

            Form.saveTransaction()

            Form.clearFields()

            Modal.close()


        } catch (error) {
            alert(error.message)
        }


        
        Form.formatData()

    },
}

const App = {
    init() {

        Transaction.all.forEach(transaction => {
            DOM.addTransaction(transaction)
        })
        
        
        DOM.updateBalance()

    },

    reload() {
        DOM.clearTransactions()
        App.init()
    },
}

App.init()
