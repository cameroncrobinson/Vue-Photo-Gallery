const app = new Vue ({
  el: '#app',
  data: {
    image: 'https://images.unsplash.com/photo-1543364195-bfe6e4932397?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
    caption: 'caption',
    altText:'',
  },
  methods: {
    uploadPhoto() {
        console.log('image', this.image);
        console.log('caption',this.altText);
        console.log('altText', this.altText);
    }
  }
});
