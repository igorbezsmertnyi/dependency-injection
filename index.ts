import { Foobar } from './Foobar'
import { Injector } from './Injector'

const foobar = Injector.resolve<Foobar>(Foobar)

window.addEventListener('DOMContentLoaded', () => {
  const sayBtn = document.querySelector('#sayHi')
  const writeBtn = document.querySelector('#writeText')

  sayBtn!.addEventListener('click', () => {
    foobar.foo.sayHello()
  })

  writeBtn!.addEventListener('click', () => {
    foobar.bar.writeText()
  })
})
