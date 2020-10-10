import '../styles/index.scss';

class App {
  constructor({el}) {
    this.el = el
    this.body = document.body;
    this.vW = window.innerWidth;
    this.vH = window.innerHeight;
    this.elClassList = this.el.classList;
    this.scrollPos = window.pageYOffset || window.scrollY;
    this.header = this.el.querySelector('.header');

    window.addEventListener('load', () => this.initLoad())
  }

  initLoad() {

  }
}

window.App = new App({el: document.getElementById('app')});
