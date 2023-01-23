export default interface Evento {
    cancelled: boolean
    notify: () => void
}
