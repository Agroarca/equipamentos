/* eslint-disable camelcase */

import Tipo from '../Tipo'

export default class Lista extends Tipo {
    id: number
    lista_produtos_id: number
    lista_produtos: Object[]

    public constructor(
        id:number,
        lista_produtos_id: number,
        lista_produtos: Object[],
    ) {
        super()
        this.id = id
        this.lista_produtos_id = lista_produtos_id
        this.lista_produtos = lista_produtos
    }

    public static fromObject(tipo: Object): Lista {
        return new Lista(
            tipo.id,
            tipo.lista_produtos_id,
            tipo.lista_produtos,
        )
    }
}
