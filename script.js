 const hub = Vue.createApp({
    data(){
        return{
            showDetails: true,
            statement: 'My name is ',
            name: "Remy",
            age: 20
        }
    },
    methods: {
        toggleshowDetails(){
            this.showDetails = !this.showDetails    
        }
    }
 })

 hub.mount('.demo')