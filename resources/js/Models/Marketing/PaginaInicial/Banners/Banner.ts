import Tipo from '../Tipo'

/* eslint-disable camelcase */
export default class Banner extends Tipo {
    id: number
    link: string
    descricao: string
    nome_desktop: string
    nome_mobile: string
    url_desktop: string
    url_mobile: string
    url_desktop_secundario: string
    url_mobile_secundario: string

    public constructor(
        id: number,
        link: string,
        descricao: string,
        nome_desktop: string,
        nome_mobile: string,
        url_desktop: string,
        url_mobile: string,
        url_desktop_secundario: string,
        url_mobile_secundario: string,
    ) {
        super()
        this.id = id
        this.link = link
        this.descricao = descricao
        this.nome_desktop = nome_desktop
        this.nome_mobile = nome_mobile
        this.url_desktop = url_desktop
        this.url_mobile = url_mobile
        this.url_desktop_secundario = url_desktop_secundario
        this.url_mobile_secundario = url_mobile_secundario
    }

    public static fromObject(tipo: Object): Banner {
        return new Banner(
            tipo.id,
            tipo.link,
            tipo.descricao,
            tipo.nome_desktop,
            tipo.nome_mobile,
            tipo.url_desktop,
            tipo.url_mobile,
            tipo.url_desktop_secundario,
            tipo.url_mobile_secundario,
        )
    }
}
