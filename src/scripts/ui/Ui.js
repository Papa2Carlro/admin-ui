export default class IU {
  constructor(aside) {
    this.aside = aside
  }

  removeClass() {
    this.aside.classList.add('animate')

    setTimeout(() => {
      this.aside.classList.remove('animate')
      this.aside.classList.remove('isClose')
    }, 400)
  }
}
