export default class Categoria {
    id: number
    nome: string
    quantidade: number

    public constructor(id: number, nome: string) {
        this.id = id
        this.nome = nome
    }

    public static fromObject(obj: Object): Categoria {
        return new Categoria(obj.id, obj.nome)
    }
}
