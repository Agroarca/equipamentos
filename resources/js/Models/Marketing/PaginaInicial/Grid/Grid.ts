/* eslint-disable camelcase */
import Tipo from '../Tipo'
import GridImagem from './GridImagem'

export default class Grid extends Tipo {
    id: number
    formato: number
    imagens: GridImagem[]

    public constructor(
        id:number,
        formato: number,
        imagens: Object[],
    ) {
        super()
        this.id = id
        this.formato = formato
        this.imagens = GridImagem.fromObject(imagens)
    }

    public static fromObject(tipo: Object): Grid {
        return new Grid(
            tipo.id,
            tipo.formato,
            tipo.imagens,
        )
    }
}
