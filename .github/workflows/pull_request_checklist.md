Cada PR deve satisfazer todos os itens abaixo

## Desenvolvedor

- [ ] As mudanças atendem somente o que é proposto na tarefa original?
- [ ] É necessário abrir tarefa de refatoração para algum componente alterado?
- [ ] Há algum registro de depuração esquecido no código?
- [ ] Os testes escritos cobrem o caminho esperado e as falhas comuns?
- [ ] Algum  objeto nulo pode dar erro de referencia?
- [ ] As excessões possíveis estão sendo tratadas?
- [ ] Não há nenhum problema no ESLint? `npm run eslint`
- [ ] Não há nenhum problema no CodeSniffer? `vendor/bin/phpcs`
- [ ] Não há nenhum erro nos testes? `php artisan test`

## Reviewer

- [ ] Há algum caminho pensado que pode quebrar o código alterado?
- [ ] Algum arquivo precisa de refatoração?
- [ ] Os nomes de variáveis, funções, classes e os caminhos que ela se encontram estão bem claros?
- [ ] Você conseguiu entender com totalidade a solução proposta ou precisa de alguma documentação?
