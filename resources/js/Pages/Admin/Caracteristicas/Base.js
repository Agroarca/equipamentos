export function tituloTamanhoMinimo(tipo) {
    switch (tipo) {
        case 1:
        case 2:
            return "Número Mínimo"
        case 3:
        case 4:
            return "Tamanho Mínimo"
        case 6:
            return "Número Mínimo de Opções"
        default:
            return ""
    }
}

export function tituloTamanhoMaximo(tipo) {
    switch (tipo) {
        case 1:
        case 2:
            return "Número Máximo"
        case 3:
        case 4:
            return "Tamanho Máximo"
        case 6:
            return "Número Máximo de Opções"
        default:
            return ""
    }
}

export function mostrarTamanhos(tipo) {
    return [1, 2, 3, 4, 6].includes(tipo)
}

export function mostrarCasasDecimais(tipo) {
    return tipo === 2
}

export function mostrarOpcoes(tipo) {
    return [5, 6].includes(tipo)
}
