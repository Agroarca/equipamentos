export default class Listener {
    priority: number
    callback: Function

    constructor(callback: Function, priority = 10) {
        this.priority = priority
        this.callback = callback
    }
}
