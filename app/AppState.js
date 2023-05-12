import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Vending } from "./Models/Vending.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

vendings = [
  new Vending ({name: 'popCorn', price: 3.00, imgUrl: '🍿' }),
  new Vending ({name: 'SandWhich', price: 5.00, imgUrl: '🥪' }),
  new Vending ({name: 'drink', price: 2.00, imgUrl:'🍺'}),
  new Vending ({name: 'candy', price: 1.50, imgUrl:'🍭'})
]

}

// class House {
//   constructor(Walls, Doors, Windows){
// this.Walls = Walls
// this.Doors = Doors
// this.Windows = Windows
// }
// }



export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
