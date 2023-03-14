import Inputmask from 'inputmask'

export default class Mask {
    static maskPercentual = { alias: 'decimal', rightAlign: false, min: 1, max: 100, digits: 2, radixPoint: ',', groupSeparator: '.', placeholder: '0', autoUnmask: true, unmaskAsNumber: true, inputType: 'number' }
    static maskPreco = { alias: 'currency', prefix: 'R$ ', rightAlign: false, digits: 2, radixPoint: ',', groupSeparator: '.', placeholder: '0', autoUnmask: true, unmaskAsNumber: true, inputType: 'number' }
    static maskNumero = { alias: 'decimal', rightAlign: false, radixPoint: ',', groupSeparator: '.', placeholder: '0', autoUnmask: true, unmaskAsNumber: true, inputType: 'number' }
    static maskInteger = { alias: 'integer', rightAlign: false }
    static maskTelefone = { mask: ['(99) 9999-9999', '(99) 99999-9999'], opts: { inputmode: 'tel', keepStatic: true } }
    static maskCPF = { mask: '999.999.999-99', inputmode: 'numeric' }
    static maskCNPJ = { mask: '99.999.999/9999-99', inputmode: 'numeric' }
    static maskCEP = { mask: '99999-999', inputmode: 'numeric' }
    static maskCPF_CNPJ = { mask: ['999.999.999-99', '99.999.999/9999-99'], opts: { keepStatic: true } }

    static percentual(element) {
        return Inputmask(this.maskPercentual).mask(element)
    }

    static preco(element) {
        return Inputmask(this.maskPreco).mask(element)
    }

    static numero(element) {
        return Inputmask(this.maskNumero).mask(element)
    }

    static integer(element) {
        return Inputmask(this.maskInteger).mask(element)
    }

    static telefone(element) {
        return Inputmask(this.maskTelefone).mask(element)
    }

    static cpf(element) {
        return Inputmask(this.maskCPF).mask(element)
    }

    static cnpj(element) {
        return Inputmask(this.maskCNPJ).mask(element)
    }

    static cep(element) {
        return Inputmask(this.maskCEP).mask(element)
    }

    static cpf_cnpj(element) {
        return Inputmask(this.maskCPF_CNPJ).mask(element)
    }
}
