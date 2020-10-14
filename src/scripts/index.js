import '../styles/index.scss';

// Form
import FormInput from "./ui/FormInput"

class Ui {
  constructor({el}) {
    this.el = el
    this.body = document.body;
    this.vW = window.innerWidth;
    this.vH = window.innerHeight;
    this.scrollPos = window.pageYOffset || window.scrollY;
    this.aside = this.el.querySelector('.aside')
    this.header = this.el.querySelector('.header');

    this.burger = this.el.querySelector('.js-burger')

    window.addEventListener('load', () => this.initLoad())
  }

  initLoad() {
    this.initAuthForm()
    this.initBurger()
  }

  initAuthForm() {
    const inputs = this.el.querySelectorAll('.input-auth')

    if (inputs) {
      inputs.forEach(input => {
        new FormInput(input, 'input-auth').init()
      })
    }
  }

  initBurger() {
    if (this.burger) {
      this.burger.addEventListener('click', () => {
        if (!this.aside.classList.contains('isClose')) {
          this.aside.classList.add('isClose')
        } else {
          this.aside.classList.add('progress')

          setTimeout(() => {
            this.aside.classList.remove('progress')
            this.aside.classList.remove('isClose')
          }, 400)
        }
      })
    }
  }
}

window.Ui = new Ui({el: document.getElementById('app')});
