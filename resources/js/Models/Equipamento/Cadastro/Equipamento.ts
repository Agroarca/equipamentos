/* eslint-disable camelcase */

import EquipamentoImagem from './EquipamentoImagem'

export default class Equipamento {
    id: number
    titulo: string
    valor: number

    public constructor(
        id: number,
        titulo: string,
        valor: number,
        imagens: EquipamentoImagem[],
    ) {
        this.id = id
        this.titulo = titulo
        this.valor = valor
        this.imagens = imagens
    }

    public static fromObject(equipamento: Object): Equipamento {
        return new Equipamento(
            equipamento.id,
            equipamento.titulo,
            equipamento.valor,
            EquipamentoImagem.fromObjectArray(equipamento.imagens),
        )
    }

    public static fromObjectArray(equipamentos: Array<Object>): Array<Equipamento> {
        return equipamentos.map((item) => Equipamento.fromObject(item))
    }
}
