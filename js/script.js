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

    },
})