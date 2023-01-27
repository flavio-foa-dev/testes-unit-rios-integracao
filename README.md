# testes
 - unitario
 - integracao
 - "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"






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

test:coverage
File
A primeira coluna indica quais arquivos de teste do diretório estão sendo executados. Cada linha dessa coluna fornece as estatísticas para cada arquivo de teste localizado e executado pelo Jest.

Stmts
Esta coluna lista a porcentagem de statements do código que foram cobertos pelos testes. Em programação, um statement (ou declaração) é cada comando individual que damos ao programa para que ele execute instruções.

Branch
Sempre que o código de um programa apresenta ramificações no fluxo, por exemplo, blocos if…else ou switch, devemos garantir que todas as possibilidades sejam testadas. Ou seja, se existe um bloco if…else no programa, devemos escrever testes tanto para o código executado no bloco if quanto para o código executado no bloco else, e a porcentagem na coluna Branch mostra em quais arquivos há ramificações que precisam ter todas as suas condições testadas. Embora tenham o mesmo nome, não confundir estas branches com branches de versionamento do Git. O Jest não acessa o repositório do Git e nem há nenhum teste a ser feito nesse sentido.

Funcs
Informa qual a porcentagem de funções presentes em cada arquivo que foram executadas/chamadas pelos testes.

Lines
A porcentagem de linhas de código por onde os testes passaram durante a sua execução. Quando está em 100%, significa que os testes percorreram todas as linhas de código dos arquivos testados. Quando não está em 100%, devemos observar a coluna seguinte (Uncovered Lines), que vai indicar por quais linhas o Jest não passou ao executar os testes nos arquivos.

Uncovered lines
Lista quais linhas de cada arquivo não foram percorridas pelo Jest. Você pode usar esta lista para consultar o código e pensar em quais testes podem ser adicionados para que estas linhas também sejam “cobertas”.

O Jest também fornece o relatório de cobertura de forma mais visual. Quando utilizamos a flag coverage, além de exibir o relatório no terminal, o Jest também cria a pasta coverage na raiz do projeto. Dentro desta pasta, você pode acessar a subpasta lcov-report para ver o relatório (report) e interagir com os arquivos, abrindo o arquivo index.html e navegando pelos arquivos.

- Testes estáticos - voltados para analisar o código sem necessariamente executá-lo,
- verificando se algumas boas práticas e formatação padronizada foram adotadas na implementação;
- Testes unitários- são utilizados para verificar o comportamento das menores unidades de código da aplicação;
- Testes de integração - são as fases do teste de software em que módulos são combinados e testados como um conjunto;
- Teste E2E (End-to-End) - é um método de teste utilizado para testar um fluxo da aplicação desde o começo até o fim.
- Utilizar métodos nativos de asserções para fins de comparação de igualdade;
- Instalar e executar o Jest com a flag --experimental;
- Criar arquivos de testes com o Jest e analisar erros;
- Usar a função describe um método do Jest usado para conjunto de testes relacionados.
- O describe possui a sintaxe de dois argumentos:
- Uma string para descrever;
- Uma função callback para executar o teste.
- Gerar relatório com o coverage,
- ferramenta integrada do jest para cobertura de testes, que possibilita identificar caminhos não testados no código.
- Usar Matchers para diferentes formas de testes, comparando igualdade, inclusão, erros e propriedades de valores;
- Alinhar o uso do matcher com asserções e estrutura de dados para utilizar em arrays, partes de objetos e conjuntos;
- Identificar as situações de "falso positivo", por meio da análise do percentual de cobertura com a flag --coverage;
- Reconhecer que nem sempre quando obtivermos 100% de cobertura de acordo com um relatório estaremos realmente testando todo o código;
- algumas formas que falso-positivos podem existir nos nossos testes.


Método	Funcionalidade
expect(value)	Testar um valor
expect.extend(matchers)	Adicionar seus próprios "matchers"
expect.anything()	Corresponde a qualquer coisa menos null e Undefined
expect.any(constructor)	Testa qualquer coisa que é criada com um construtor
expect.arrayContaining(array)	O array esperado é um subconjunto do array recebido
expect.assertions(número)	Verifica que um certo número de verificações são chamadas durante um teste
expect.closeTo(number, numDigits?)	é útil quando você compara números quebrados num array
expect.hasAssertions()	Verifica que pelo menos uma verificação é chamada durante um teste
expect.not.arrayContaining(array)	Quando o array esperado não é um subconjunto do array recebido
expect.not.objectContaining(object)	Quando o objeto esperado não é um subconjunto do objeto recebido
expect.not.stringContaining(string)	Quando o valor recebido não é uma String ou não corresponde ao valor esperado da String
expect.not.stringMatching(string / regexp)	Quando o valor recebido não é String ou não corresponde a String esperada ou a expressão regular
expect.objectContaining(object)	Corresponde a qualquer objeto recebido que recursivamente coincide com as propriedades esperadas
expect.stringContaining(string)	Quando o valor recebido é uma String que contém a String esperada
expect.stringMatching(string / regexp)	Quando o valor recebido é uma String que contém a String ou expressão regular esperada
expect.addSnapshotSerializer(serializer)	Para adicionar um módulo que formata estruturas de dados específicas da aplicação
.not	Se você sabe como testar algo, .not permite que você teste seu oposto
.resolves	Decodifica o valor de uma promessa cumprida, para que qualquer outro matcher possa então ser encadeado
.rejects	Decodifica o motivo de uma promessa rejeitada, para que qualquer outro matcher possa ser encadeado
