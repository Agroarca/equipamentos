import Inputmask from 'inputmask'

export default class Mask {
    static maskPercentual = { alias: 'decimal', opts: { rightAlign: false, min: 1, max: 100, digits: 2 } }
    static maskPreco = { alias: 'currency', opts: { rightAlign: false, groupSeparator: '' } }
    static maskInteger = { alias: 'integer', opts: { rightAlign: false, groupSeparator: '' } }
    static maskTelefone = { mask: ['(99) 9999-9999', '(99) 99999-9999'], opts: { inputmode: 'tel', keepStatic: true } }
    static maskCPF = { mask: '999.999.999-99', opts: { inputmode: 'numeric' } }
    static maskCNPJ = { mask: '99.999.999/9999-99', opts: { inputmode: 'numeric' } }
    static maskCEP = { mask: '99999-999', opts: { inputmode: 'numeric' } }
    static maskCPF_CNPJ = { mask: ['999.999.999-99', '99.999.999/9999-99'], opts: { keepStatic: true } }

    static percentual(element) {
        Inputmask(this.maskPercentual).mask(element)
    }

    static preco(element) {
        Inputmask(this.maskPreco).mask(element)
    }

    static integer(element) {
        Inputmask(this.maskInteger).mask(element)
    }

    static telefone(element) {
        Inputmask(this.maskTelefone).mask(element)
    }

    static cpf(element) {
        Inputmask(this.maskCPF).mask(element)
    }

    static cnpj(element) {
        Inputmask(this.maskCNPJ).mask(element)
    }

    static cep(element) {
        Inputmask(this.maskCEP).mask(element)
    }

    static cpf_cnpj(element) {
        Inputmask(this.maskCPF_CNPJ).mask(element)
    }
}
