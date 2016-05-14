var vm = new Vue({
  el: '#demo',
  data: {
    name: 'Vue.js'
  },
  methods: {
    greet: function(event) {
      alert('Hello ' + this.name + '!');

      alert(event.target.tagName);
    }
  }
})
