import Inputmask from 'inputmask';

const maskemail = { "alias": "integer", rightAlign: false, groupSeparator: '' };

export class Mask {
    //percentual = { "alias": "decimal", rightAlign: false, min: 1, max: 100, digits: 2 }
    //preco = { "alias": "currency", rightAlign: false, groupSeparator: '' }
    //integer = { "alias": "integer", rightAlign: false, groupSeparator: '' }
    //telefone2 = { "regex": "\\(\\d{2}\\) \\d{8}\\d?", inputmode: 'tel' }
    //telefone = { "mask": "(99) 9999[9]-9999", inputmode: 'tel' }
    //cpf = { "regex": "\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}", inputmode: 'numeric' }
    //cnpj = { "regex": "\\d{2}\\.\\d{3}\\.\\d{3}/\\d{4}\\-\\d{2}", inputmode: 'numeric' }
    //cep = { "regex": "\\d{5}\\-\\d{3}", inputmode: 'numeric' }
    static email(element) {
        Inputmask(maskemail).mask(element)
    }
}
