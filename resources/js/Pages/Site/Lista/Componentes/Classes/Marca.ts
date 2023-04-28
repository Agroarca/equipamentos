export default class Marca {
    id: number
    nome: string
    quantidade: number

    public constructor(id: number, nome: string, quantidade: number) {
        this.id = id
        this.nome = nome
        this.quantidade = quantidade
    }

    public static fromObject(obj: Object): Marca {
        return new Marca(obj.id, obj.nome, obj.quantidade)
    }
}
