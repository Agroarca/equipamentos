/* eslint-disable camelcase */
import Banner from './Banners/Banner'
import Grid from './Grid/Grid'
import Lista from './ListaProdutos/Lista'
import Tipo from './Tipo'

export default class Componente {
    id: number
    titulo: string
    subtitulo: string
    ordem: number
    tela_cheia: boolean
    url: string
    tipo_type: string
    tipo: Tipo

    public constructor(
        id: number,
        titulo: string,
        subtitulo: string,
        ordem: number,
        tela_cheia: boolean,
        url: string,
        tipo_type: string,
        tipo: Object,
    ) {
        this.id = id
        this.titulo = titulo
        this.subtitulo = subtitulo
        this.ordem = ordem
        this.tela_cheia = tela_cheia
        this.url = url
        this.tipo_type = tipo_type
        this.tipo = this.resolveTipo(tipo)
    }

    public static fromObject(componentes: Array<Object>): Array<Componente> {
        return componentes.map((item) => new Componente(
            item.id,
            item.titulo,
            item.subtitulo,
            item.ordem,
            item.tela_cheia,
            item.url,
            item.tipo_type,
            item.tipo,
        ))
    }

    private resolveTipo(tipo: Object): Tipo {
        switch (this.tipo_type) {
        case 'App\\Models\\Marketing\\PaginaInicial\\Grid\\Grid':
            return Grid.fromObject(tipo)
        case 'App\\Models\\Marketing\\PaginaInicial\\Banners\\Banner':
            return Banner.fromObject(tipo)
        case 'App\\Models\\Marketing\\PaginaInicial\\ListaProdutos\\Lista':
            return Lista.fromObject(tipo)
        default:
            return null
        }
    }
}
