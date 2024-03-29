export function tituloTamanhoMinimo(tipo) {
    switch (tipo) {
    case 1:
    case 2:
        return 'Número mínimo'
    case 3:
    case 4:
        return 'Tamanho mínimo'
    default:
        return ''
    }
}

export function tituloTamanhoMaximo(tipo) {
    switch (tipo) {
    case 1:
    case 2:
        return 'Número máximo'
    case 3:
    case 4:
        return 'Tamanho máximo'
    default:
        return ''
    }
}

export function mostrarTamanhos(tipo) {
    return [1, 2, 3, 4].includes(tipo)
}

export function mostrarCasasDecimais(tipo) {
    return tipo === 2
}

export function mostrarOpcoes(tipo) {
    return tipo === 5
}
