/* eslint-disable camelcase */
export default class GridImagem {
    id: number
    link: string
    ordem: number
    descricao: string
    nome_desktop: string
    nome_mobile: string

    public constructor(
        id: number,
        link: string,
        ordem: number,
        descricao: string,
        nome_desktop: string,
        nome_mobile: string,
    ) {
        this.id = id
        this.link = link
        this.ordem = ordem
        this.descricao = descricao
        this.nome_desktop = nome_desktop
        this.nome_mobile = nome_mobile
    }

    public static fromObject(itens: Array<Object>): Array<GridImagem> {
        return itens.map((item) => new GridImagem(
            item.id,
            item.link,
            item.ordem,
            item.descricao,
            item.nome_desktop,
            item.nome_mobile,
        ))
    }
}
