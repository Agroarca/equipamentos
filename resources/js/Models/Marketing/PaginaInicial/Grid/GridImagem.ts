/* eslint-disable camelcase */
export default class GridImagem {
    id: number
    link: string
    ordem: number
    descricao: string
    url_desktop: string
    url_mobile: string
    url_desktop_secundario: string
    url_mobile_secundario: string

    public constructor(
        id: number,
        link: string,
        ordem: number,
        descricao: string,
        url_desktop: string,
        url_mobile: string,
        url_desktop_secundario: string,
        url_mobile_secundario: string,
    ) {
        this.id = id
        this.link = link
        this.ordem = ordem
        this.descricao = descricao
        this.url_desktop = url_desktop
        this.url_mobile = url_mobile
        this.url_desktop_secundario = url_desktop_secundario
        this.url_mobile_secundario = url_mobile_secundario
    }

    public static fromObject(itens: Array<Object>): Array<GridImagem> {
        return itens.map((item) => new GridImagem(
            item.id,
            item.link,
            item.ordem,
            item.descricao,
            item.url_desktop,
            item.url_mobile,
            item.url_desktop_secundario,
            item.url_mobile_secundario,
        ))
    }
}
