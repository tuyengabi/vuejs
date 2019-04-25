require("../stylesheets/main.scss");



Vue.component('btn-attack', {
  data: function() {
    return {
      count: 0
    }
  },
  template: '<div><p>{{count}}</p><button v-on:click="count++">ATTACK</button></div>'
})

new Vue ({
  el:".augment",
})
