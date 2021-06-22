var app = new Vue({
    
    el: '#root',
    data: {
        contatore: 0,
        images: ['img/carolus-rex.jpg','img/coat-of-arms.jpg', 'img/heroes.jpg', 'img/the-great-war.jpg', 'img/the-last-stand.jpg']
    },
    methods: {
        nextAlbum() {
            
            if (this.contatore == this.images.length - 1){
                this.contatore = 0;
            } else {this.contatore++;}
        },
        prevAlbum() {
            
            if (this.contatore == 0){
                this.contatore = this.images.length - 1;
            } else {this.contatore--;}
        },
        change(i) {
            this.contatore = i;
        }
    }
});