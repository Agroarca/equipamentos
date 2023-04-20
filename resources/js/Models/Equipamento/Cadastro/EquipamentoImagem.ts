/* eslint-disable camelcase */

export default class EquipamentoImagem {
    id: number
    descricao: string
    url: string

    public constructor(
        id: number,
        descricao: string,
        url: string,
    ) {
        this.id = id
        this.descricao = descricao
        this.url = url
    }

    public static fromObject(equipamento: Object): EquipamentoImagem {
        return new EquipamentoImagem(
            equipamento.id,
            equipamento.descricao,
            equipamento.url,
        )
    }

    public static fromObjectArray(imagens: Array<Object>): Array<EquipamentoImagem> {
        return imagens.map((item) => EquipamentoImagem.fromObject(item))
    }
}
