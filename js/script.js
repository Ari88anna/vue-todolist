var app = new Vue(
    {
        el: '#root',
        data: {
            userValue: '',
            list: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ]
        },
        methods: {
            addNewValue() {
                if(this.userValue.lenght >0) {
                    this.list.push(this.userValue);
                    this.userValue = '';
                }
                
            }
        }

    }
)