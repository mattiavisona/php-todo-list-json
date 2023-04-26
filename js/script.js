const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [],

            newTodo:'',
        }
    },
    
    // QUI AGGIUNGO TUTTI I METODI


    methods: {
        getTodos() {

            // QUESTA E' LA CHIAMATA AXIOS
            axios.get('./server.php').then(response => {

                console.log(response.data);
                this.todos = response.data;
            })
        },

        addTodo() {
            let data{
                newTodo = '',
            }

            data.newTodo = this.newTodo;

            // DOVRA' ESSERCI UNA RICHIESTA API CHE CI AGGIUNGERA' IL NEWTODO ALLA NOSTRA LISTA

            axios.post('./server.php', data, {headers: {'Content-Type': 'multipart/form-data'}}) .then(response => {
                console.log("Chiamata effettuata", response);

                this.getTodos();
            });

            this.newTodo = "";
        }

    },
})