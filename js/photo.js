const app = new Vue ({
  el: '#app',
  data: {
    image: '',
    caption: '',
    altText:'',
  }
  methods: {
    uploadPhoto() {
      if (this.image ='' || this.altText = ''){
        alert("required fields left blank!");
      }
    }
  }
})
