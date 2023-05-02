import Ano from './Ano'
import Categoria from './Categoria'
import Marca from './Marca'
import Modelo from './Modelo'
import Valor from './Valor'

export default class Filtros {
    valor: Valor
    categorias: Categoria[]
    marcas: Marca[]
    modelos: Modelo[]
    ano: Ano

    public constructor(categorias: Array<Object>, marcas: Array<Object>, modelos: Array<Object>, valor: Object, ano: Object) {
        this.valor = Valor.fromObject(valor)
        this.categorias = categorias.map((categoria: Object) => Categoria.fromObject(categoria))
        this.marcas = marcas.map((marca: Object) => Marca.fromObject(marca))
        this.modelos = modelos.map((modelo: Object) => Modelo.fromObject(modelo))
        this.ano = Ano.fromObject(ano)
    }

    public static fromObject(obj: Object): Filtros {
        return new Filtros(obj.categorias, obj.marcas, obj.modelos, obj.valor, obj.ano)
    }
}
