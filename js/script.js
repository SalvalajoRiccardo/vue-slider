var app = new Vue({
    
    el: '#root',
    data: {
        contatore: 0,
        images: ['img/carolus-rex.jpg','img/coat-of-arms.jpg', 'img/heroes.jpg', 'img/the-great-war.jpg', 'img/the-last-stand.jpg'],
        intervallo:'',
        status: true
        
    },

    methods: {
        nextAlbum() {
            this.contatore++;
            if (this.contatore > this.images.length - 1){
                this.contatore = 0;
            }
        },
        prevAlbum() {
            this.contatore--;
            if (this.contatore < 0){
                this.contatore = this.images.length - 1;
            } 
        },
        change(i) {
            this.contatore = i;
        },

        play() {
            clearInterval(this.intervallo);
            this.intervallo = setInterval(this.nextAlbum, 1000);
        },

        pause() {
            clearInterval(this.intervallo);
        },

    },

    

    mounted() {
        this.intervallo = setInterval(this.nextAlbum, 1000);
    }
});