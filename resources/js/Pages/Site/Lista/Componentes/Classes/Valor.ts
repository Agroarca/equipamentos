export default class Valor {
    minimo: number
    maximo: number
    valorMinimo: number
    valorMaximo: number

    public constructor(minimo: number, maximo: number) {
        this.minimo = Number(minimo)
        this.maximo = Number(maximo)
    }

    public static fromObject(obj: Object): Valor {
        return new Valor(obj.minimo, obj.maximo)
    }
}
