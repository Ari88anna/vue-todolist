// To do list:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: 
// digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

var app = new Vue(
    {
        el: '#root',
        data: {
            // userValue è inizializzata come stringa vuota. Prenderà il valore immesso dall'utente nella input
            userValue: '',

            list: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ]
        },
        methods: {
            // deleteLine cliccando su X la riga corrispondente scompare
            // per sapere qual è l'elemento cliccato ci occorre l'indice
            deleteLine(index) {
                // per rimuovere una elemento dall'array si usa 
                // .splice(primo parametro: indice dal quale iniziare a cambiare l'array, 
                //  secondo parametro: un numero intero che indica gli elementi da rimuovere partendo da primo parametro)
                this.list.splice(index, 1)
            },

            //addNewLine per aggiungere il valore immesso dall'utente a list
            // sia cliccando il button 'aggiungi', sia tramite @keyup.enter 
            addNewLine() {
                //per evitare che il tasto 'aggiungi' popoli list anche se l'input è vuoto:
                // se il valore di userValue è maggiore di 0
                if( this.userValue.length > 0 ) {
                    // allora userValue può essere aggiunto a list
                    this.list.push( this.userValue );
                    // e l'input tornerà vuoto
                    this.userValue = '';
                }                
            }

            
        }

    }
)