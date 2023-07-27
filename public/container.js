document.addEventListener("alpine:init", () => {
    Alpine.data('counter', ()=>({
        username : '',
        greeting : 'hello',
        language : 'English',
        greet(){
            //call the api and get a greeting back
            axios
            .get(`/api/greet?username=${this.username}&language=${this.language}`)
            .then(result => {
                if (result.data.error) {
                    this.greeting = result.data.error
                } else {
                    this.greeting = result.data.message
                }            })
        }
    }));
  });