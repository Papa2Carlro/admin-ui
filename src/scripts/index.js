import '../styles/index.scss';

// Form
import FormInput from "./ui/FormInput"

class Ui {
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
    this.initAuthForm()
  }

  initAuthForm() {
    const inputs = this.el.querySelectorAll('.input-auth')

    if (inputs) {
      inputs.forEach(input => {
        new FormInput(this.el, input).init()
      })
    }
  }
}

window.Ui = new Ui({el: document.getElementById('app')});
