var vm = new Vue({
  el: '#demo',
  methods: {
    say: function(msg, event) {
      event.preventDefault();
    }
  }
})
