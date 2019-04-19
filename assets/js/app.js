require("../stylesheets/main.scss");

new Vue ({
  el: ".hello",
  data: {
    message: "hello world",
    paragraph: "toto tutu",
    show: true,
    titre: false,
    fruits : ['pomme','ananas','banane'],
    styles: {
      'font-size': "6rem",
      color: "blue"
    }
  },
  methods: {
    addMessage: function() {

    }
  }
})
