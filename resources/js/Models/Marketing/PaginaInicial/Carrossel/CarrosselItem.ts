/* eslint-disable camelcase */
export default class CarrosselItem {
    id: number
    ordem: number
    link: string
    descricao: string
    url_desktop: string
    url_mobile: string
    url_desktop_secundario: string
    url_mobile_secundario: string

    public constructor(
        id: number,
        ordem: number,
        link: string,
        descricao: string,
        url_desktop: string,
        url_mobile: string,
        url_desktop_secundario: string,
        url_mobile_secundario: string,
    ) {
        this.id = id
        this.ordem = ordem
        this.link = link
        this.descricao = descricao
        this.url_desktop = url_desktop
        this.url_mobile = url_mobile
        this.url_desktop_secundario = url_desktop_secundario
        this.url_mobile_secundario = url_mobile_secundario
    }

    public static fromObject(itens: Array<Object>): Array<CarrosselItem> {
        return itens.map((item) => new CarrosselItem(
            item.id,
            item.ordem,
            item.link,
            item.descricao,
            item.url_desktop,
            item.url_mobile,
            item.url_desktop_secundario,
            item.url_mobile_secundario,
        ))
    }
}
