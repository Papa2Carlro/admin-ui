import '../styles/index.scss';

// Form
import FormInput from "./ui/FormInput"

import IU from "./ui/Ui"

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

    this.Ui = new IU(this.aside)

    window.addEventListener('load', () => this.initLoad())
  }

  initLoad() {
    this.initAuthForm()
    this.initBurger()
    this.initDropDown()
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
          this.Ui.removeClass()
        }
      })
    }
  }

  initDropDown( ) {
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
      }
    );
  }
}

window.Ui = new Ui({el: document.getElementById('app')});
