export default class Ano {
    minimo: number
    maximo: number

    public constructor(minimo: number, maximo: number) {
        this.minimo = Number(minimo)
        this.maximo = Number(maximo)
    }

    public static fromObject(obj: Object): Ano {
        return new Ano(obj.minimo, obj.maximo)
    }
}
