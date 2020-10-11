export default class FormInput {
  constructor(el, input) {
    this.el = el
    this.input = input

    this.baseClass = 'input-auth'

    this.inputBody = this.input.querySelector(`.${this.baseClass}__body`)
    this.placeholder = this.input.querySelector(`.${this.baseClass}__placeholder`)
  }

  init() {
    if (this.inputBody.type === 'password') this.initEye()

    this.inputBody.addEventListener('focus', () => this.placeholder.classList.add('isActive'))
    this.inputBody.addEventListener('blur', () => {
      if (!this.inputBody.value)
        this.placeholder.classList.remove('isActive')
    })
  }

  initEye() {
    const eye = this.input.querySelector('.icon')
    const icon = this.input.querySelector('use')

    eye.addEventListener('click', () => {
      this.inputBody.type = this.inputBody.type === 'password' ? 'text' : 'password'

      icon.setAttribute('xlink:href', this.inputBody.type === 'password' ? '#icon-eye-close' : '#icon-eye-open')
    })

    this.inputBody.addEventListener('input', () => {
      this.inputBody.type = 'password'
      icon.setAttribute('xlink:href', '#icon-eye-close')
    })
  }
}
