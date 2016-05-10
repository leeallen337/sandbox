var vm = new Vue({
  el: '#example',
  data: {
    a: 1
  },
  computed: {
    b: function() {
      return this.a + 1;
    }
  }
})
