/* eslint-disable camelcase */

import Tipo from '../Tipo'
import ListaProdutos from './Componentes/ListaProdutos'

export default class Lista extends Tipo {
    id: number
    lista_produtos_id: number
    lista_produtos: ListaProdutos

    public constructor(
        id:number,
        lista_produtos_id: number,
        lista_produtos: ListaProdutos,
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
            ListaProdutos.fromObject(tipo.lista_produtos),
        )
    }
}
