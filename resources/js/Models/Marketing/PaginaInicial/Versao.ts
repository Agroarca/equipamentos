/* eslint-disable camelcase */

import CarrosselItem from './Carrossel/CarrosselItem'

export default class Versao {
    id: number
    status: number
    prioridade: number
    descricao: string
    data_inicio: Date
    data_fim: Date
    carrossel_itens: CarrosselItem[]

    public constructor(
        id:number,
        status: number,
        prioridade: number,
        descricao: string,
        data_inicio: Date,
        data_fim: Date,
        carrossel_itens: Array<Object>,
    ) {
        this.id = id
        this.status = status
        this.prioridade = prioridade
        this.descricao = descricao
        this.data_inicio = data_inicio
        this.data_fim = data_fim
        this.carrossel_itens = CarrosselItem.fromObject(carrossel_itens)
    }
}
