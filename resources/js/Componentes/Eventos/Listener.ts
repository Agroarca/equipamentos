export default class Listener {
    priority: number
    callback: Function
    key: string

    constructor(callback: Function, key?: string, priority: number = 10) {
        this.priority = priority
        this.callback = callback
        this.key = key
    }
}
