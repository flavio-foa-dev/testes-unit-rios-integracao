# testes
 - unitario
 - integracao






config project
npm init -y
npm i eslint -D
npx eslint --init
npx  eslint --init
> To check syntax, find problems, and enforce code style
> JavaScript modules (import/export)
> None of these
> No
> Node
> Use a popular style guide
> Airbnb
> JSON
npm i jest -D
 "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  },


O Jest possibilita ainda que você separe os teste de unidade e testes de integração. Em outras palavras, você pode criar subpastas para ambos os testes com as nomenclaturas unit e int e configurar pelo próprio Jest para rodá-las com comandos diferentes, como sugestão: jest unit e jest int.
Contudo, a convenção é sempre utilizar os sufixos .test ou .spec nos nomes dos arquivos.

- Testes estáticos - voltados para analisar o código sem necessariamente executá-lo, verificando se algumas boas práticas e formatação padronizada foram adotadas na implementação;
- Testes unitários- são utilizados para verificar o comportamento das menores unidades de código da aplicação;
- Testes de integração - são as fases do teste de software em que módulos são combinados e testados como um conjunto;
- Teste E2E (End-to-End) - é um método de teste utilizado para testar um fluxo da aplicação desde o começo até o fim.