/* eslint-disable camelcase */

import Equipamento from '@/Models/Equipamento/Cadastro/Equipamento'

export default class ListaProdutos {
    id: number
    slug: string
    nome: string
    equipamentos: Equipamento[]

    public constructor(
        id: number,
        slug: string,
        nome: string,
        equipamentos: Equipamento[],
    ) {
        this.id = id
        this.slug = slug
        this.nome = nome
        this.equipamentos = equipamentos
    }

    public static fromObject(lista: Object): ListaProdutos {
        return new ListaProdutos(
            lista.id,
            lista.slug,
            lista.nome,
            Equipamento.fromObjectArray(lista.equipamentos),
        )
    }
}
