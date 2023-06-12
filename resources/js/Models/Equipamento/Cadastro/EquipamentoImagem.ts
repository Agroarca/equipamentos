/* eslint-disable camelcase */

export default class EquipamentoImagem {
    id: number
    url: string

    public constructor(
        id: number,
        url: string,
    ) {
        this.id = id
        this.url = url
    }

    public static fromObject(equipamento: Object): EquipamentoImagem {
        return new EquipamentoImagem(
            equipamento.id,
            equipamento.url,
        )
    }

    public static fromObjectArray(imagens: Array<Object>): Array<EquipamentoImagem> {
        return imagens.map((item) => EquipamentoImagem.fromObject(item))
    }
}
