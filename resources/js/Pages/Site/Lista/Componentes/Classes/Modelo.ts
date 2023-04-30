export default class Modelo {
    id: number
    nome: string
    quantidade: number

    public constructor(id: number, nome: string, quantidade: number) {
        this.id = id
        this.nome = nome
        this.quantidade = quantidade
    }

    public static fromObject(obj: Object): Modelo {
        return new Modelo(obj.id, obj.nome, obj.quantidade)
    }
}
