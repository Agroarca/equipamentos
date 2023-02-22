import Evento from './Evento'

export default class Listener {
    priority: number
    callback: Function

    constructor(callback: Function, priority: number = 10) {
        this.priority = priority
        this.callback = callback
    }
}
