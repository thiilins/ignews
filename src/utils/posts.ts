const posts = [
  {
    id: 'YosXIhMAACEAqpcL',
    uid: 'template-literals-unindo-texto-e-expressoes',
    url: null,
    type: 'post',
    href: 'https://td-ignews.cdn.prismic.io/api/v2/documents/search?ref=YosYIhMAACAAqpuH&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YosXIhMAACEAqpcL%22%29+%5D%5D',
    tags: [],
    first_publication_date: '2022-05-23T05:10:05+0000',
    last_publication_date: '2022-05-23T05:11:34+0000',
    slugs: [
      'o-que-e-o-template-literals',
      'hoje-o-assunto-e-um-recurso-que-foi-introduzido-atraves-da-versao-es6-do-js-e-que-ajuda-muito-na-hora-de-interpolar-conteudos-vamos-falar-de-template-literals-tambem-conhecido-como-template-strings'
    ],
    linked_documents: [],
    lang: 'pt-br',
    alternate_languages: [],
    data: {
      title: 'TEMPLATE LITERALS: Unindo texto e expressões!',
      subtitle:
        'Hoje o assunto é um recurso que foi introduzido através da versão ES6 do JS e que ajuda muito na hora de interpolar conteúdos, vamos falar de template literals também conhecido como template strings!',
      content: [
        { type: 'heading1', text: 'O Que é o TEMPLATE LITERALS?', spans: [] },
        {
          type: 'paragraph',
          text: 'O Template literals, também conhecido como “template strings” é uma forma mais eficiente de interpolar conteúdos dentro do seu código, implantando a partir do ES6 ele facilita na hora de ‘concatenar’ seu código, permitindo inclusive a quebra de texto em múltiplas linhas.',
          spans: [
            { start: 2, end: 19, type: 'em' },
            { start: 2, end: 19, type: 'strong' },
            { start: 44, end: 60, type: 'em' },
            { start: 44, end: 60, type: 'strong' }
          ]
        },
        {
          type: 'paragraph',
          text: 'Para ficar mais fácil vamos aos exemplos, abaixo vemos o modo “normal” de concatenar/interpolar texto e expressões.',
          spans: []
        },
        {
          type: 'preformatted',
          text: 'let nome = "John";\nlet sobrenome = "Doe";\nlet saudacao = "Meu nome é " + nome + " " + sobrenome;\nconsole.log(saudacao) //Meu nome é John Doe',
          spans: []
        },
        {
          type: 'paragraph',
          text: 'Quando o texto é pequeno, até que vai fazer isso, mas imagina se temos um texto longo pra concatenar com expressões no meio dele, não vai ser nada legal fazer isso concorda? além de dar muito mais trabalho vai deixar nosso código muito grande.',
          spans: []
        },
        {
          type: 'paragraph',
          text: 'Agora vamos complicar um pouco mais nosso exemplo?',
          spans: []
        },
        {
          type: 'paragraph',
          text: 'E se além de escrever a saudação for preciso informar em outra linha a idade? da forma tradicional fazemos assim:',
          spans: []
        },
        {
          type: 'preformatted',
          text: 'let nome = "John";\nlet sobrenome = "Doe";\nlet idade = 25;\nlet saudacao = "Meu nome é " + nome + " " + sobrenome + "\\n e tenho " + idade + " anos";\nconsole.log(saudacao)\n/*\nMeu nome é John Doe\ne tenho 25 anos\n*/',
          spans: []
        },
        {
          type: 'paragraph',
          text: 'E se eu te disser que tem uma forma muito mais fácil de interpolar textos e expressões sem precisar deixar o código muito grande ou usar REGEX (expressões regulares)? esse método é o template literals (ou template strings).',
          spans: [
            { start: 137, end: 143, type: 'strong' },
            { start: 183, end: 200, type: 'strong' },
            { start: 183, end: 200, type: 'em' },
            { start: 205, end: 221, type: 'strong' },
            { start: 205, end: 221, type: 'em' }
          ]
        },
        { type: 'paragraph', text: 'Bora pro código:', spans: [] },
        {
          type: 'preformatted',
          text: 'let nome = "John";\nlet sobrenome = "Doe";\nlet idade = 25;\nlet saudacao = `Olá, meu nome é ${nome} ${sobrenome} \ne eu tenho ${idade} anos`;\nconsole.log(saudacao)\n/*\nOlá, meu nome é John Doe \ne eu tenho 25 anos\n*/',
          spans: []
        },
        {
          type: 'paragraph',
          text: 'Viu como ficou mais fácil? Agora vamos a explicação de como ele funciona, para iniciar um template literals abrir com uma crase (`) e dentro dela escrevemos exatamente como queremos que o texto seja exibido e toda vez que for necessário inserir uma expressão usamos o sinal de cifrão seguido de chaves e dentro delas colocamos a expressão que queremos usar.',
          spans: [
            { start: 90, end: 107, type: 'em' },
            { start: 90, end: 107, type: 'strong' },
            { start: 122, end: 128, type: 'strong' }
          ]
        },
        {
          type: 'paragraph',
          text: 'Tudo que estiver dentro das chaves o JS vai entender automaticamente como código, e o melhor para quebrar a linha é só dar um enter e continuar escrevendo na outra linha, o texto será escrito da forma como você colocar até o fechamento com crase (`)',
          spans: [
            { start: 28, end: 35, type: 'strong' },
            { start: 126, end: 132, type: 'strong' },
            { start: 240, end: 246, type: 'strong' }
          ]
        },
        {
          type: 'paragraph',
          text: 'Vamos a outros exemplos de como ele pode ser usado:',
          spans: []
        },
        {
          type: 'preformatted',
          text: 'let dia = "Sábado";\nconsole.log(\n  `Hoje é ${dia}, por isso ${\n    dia == "Sábado" || dia == "Domingo" ? "não trabalho!" : "trabalho"\n  }`\n);console.log(` 2 + 3 = ${2 + 3}`)// 2 + 3 = 5',
          spans: []
        },
        {
          type: 'paragraph',
          text: 'As possibilidade de aplicação são inúmeras, e certamente podem ajudar muito na hora de codar!',
          spans: []
        }
      ]
    }
  },
  {
    id: 'YosWeBMAACEAqpQI',
    uid: 'variaveis-no-javascript-o-que-sao-e-como-usamos',
    url: null,
    type: 'post',
    href: 'https://td-ignews.cdn.prismic.io/api/v2/documents/search?ref=YosYIhMAACAAqpuH&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YosWeBMAACEAqpQI%22%29+%5D%5D',
    tags: [],
    first_publication_date: '2022-05-23T05:08:41+0000',
    last_publication_date: '2022-05-23T05:14:10+0000',
    slugs: [
      'nomes-das-variaveis',
      'variaveis-no-javascript-o-que-sao-e-como-usamos'
    ],
    linked_documents: [],
    lang: 'pt-br',
    alternate_languages: [],
    data: {
      title: 'Variáveis No JavaScript: O que são e como usamos?',
      subtitle:
        'Esse é o meu primeiro post, e acho que nada melhor do que começar com um fundamento básico do JavaScript, vamos falar sobre as variáveis, e como sabemos elas vão muito além do conceito matemático, então sem perda de tempo, borá lá!',
      content: [
        {
          type: 'paragraph',
          text: 'O que são variáveis?',
          spans: [{ start: 0, end: 20, type: 'strong' }]
        },
        {
          type: 'paragraph',
          text: 'No conceito matemático variável é:',
          spans: []
        },
        {
          type: 'paragraph',
          text: 'Variável é, convencionalmente, um elemento representante do conjunto de todos os resultados possíveis de um fenômeno que podem ou não ser representadas por valores numéricos.',
          spans: [{ start: 0, end: 174, type: 'em' }]
        },
        {
          type: 'paragraph',
          text: 'Fonte: Infoescola',
          spans: [
            { start: 0, end: 17, type: 'em' },
            {
              start: 7,
              end: 17,
              type: 'hyperlink',
              data: {
                link_type: 'Web',
                url: 'https://www.infoescola.com/matematica/conceito-de-variavel/',
                target: '_blank'
              }
            }
          ]
        },
        {
          type: 'paragraph',
          text: 'No nosso contexto podemos definir variáveis como uma forma de armazenar informações para utilizarmos/manipularmos depois.',
          spans: []
        },
        {
          type: 'paragraph',
          text: 'Uma variável é composta basicamente por três partes:',
          spans: []
        },
        { type: 'preformatted', text: 'tipo nome = informação', spans: [] },
        {
          type: 'paragraph',
          text: 'tipo: Aqui informaremos qual o tipo da variável que estamos definindo.',
          spans: [{ start: 0, end: 4, type: 'strong' }]
        },
        {
          type: 'paragraph',
          text: 'nome: Qual o nome que daremos a nossa variável',
          spans: [{ start: 0, end: 4, type: 'strong' }]
        },
        {
          type: 'paragraph',
          text: 'informação: O que armazenaremos dentro dela',
          spans: [{ start: 0, end: 10, type: 'strong' }]
        },
        {
          type: 'paragraph',
          text: 'Nesse post vamos falar sobre duas coisas: nome e informação.',
          spans: [{ start: 0, end: 60, type: 'strong' }]
        },
        { type: 'heading1', text: 'Nomes das variáveis', spans: [] },
        {
          type: 'paragraph',
          text: 'Para darmos um nome a uma variável precisamos seguir algumas regras:',
          spans: []
        },
        {
          type: 'list-item',
          text: 'Não usar acentos nas palavras;',
          spans: []
        },
        {
          type: 'list-item',
          text: 'Não utilizar caracteres especiais (apenas $ e _ são permitidos);',
          spans: [
            { start: 42, end: 43, type: 'strong' },
            { start: 46, end: 47, type: 'strong' }
          ]
        },
        {
          type: 'list-item',
          text: 'Trocar ç por c;',
          spans: [
            { start: 7, end: 8, type: 'strong' },
            { start: 13, end: 14, type: 'strong' }
          ]
        },
        {
          type: 'list-item',
          text: 'Não usar espaço entre as palavras;',
          spans: []
        },
        {
          type: 'list-item',
          text: 'Não podemos começar o nome de uma variável com número.',
          spans: []
        },
        {
          type: 'paragraph',
          text: 'Entendida as regras acima existe um outro “bloqueio” por assim dizer, no Javascript existem palavras que são reservadas e portanto não podem ser usadas como nome de uma variável, entre elas temos::',
          spans: []
        },
        {
          type: 'paragraph',
          text: 'break, case, catch, class, const, continue, debugger, default, delete, do, else, enum, export, extends, false, finally, for, function, if, implements, import, interface, in, instanceof, let, new, package, private, protected, public, return, static, super, switch, this, throw, true, try, typeof, var, void, while, yield.',
          spans: [
            { start: 0, end: 320, type: 'em' },
            { start: 0, end: 320, type: 'strong' }
          ]
        },
        {
          type: 'paragraph',
          text: 'Para nomear variáveis temos alguns padrões de escrita de nomes , vamos conhecê-los abaixo:',
          spans: []
        },
        { type: 'heading1', text: 'camelCase', spans: [] },
        {
          type: 'paragraph',
          text: 'Esse é o padrão mais utilizado e refere-se a pratica de escrever palavras compostas ou frases, na qual a primeira palavra é escrita totalmente em letra minúscula e as seguintes iniciadas por letra maiúscula e escritas em minúscula (ex: nomeCompleto)',
          spans: [{ start: 236, end: 248, type: 'strong' }]
        },
        {
          type: 'preformatted',
          text: 'let camelCase = "vamosEscreverEmCamelCase?"',
          spans: []
        },
        { type: 'heading1', text: 'snake_case', spans: [] },
        {
          type: 'paragraph',
          text: 'Nesse padrão escrevemos todas as palavras em letra minúscula e ao invés de espaços utilizamos “_” (underline) — ex: nome_completo.',
          spans: [{ start: 116, end: 129, type: 'strong' }]
        },
        {
          type: 'preformatted',
          text: 'let snake_case= "vamos_escrever_em_snake_case?"',
          spans: []
        },
        { type: 'heading1', text: 'kebab-case', spans: [] },
        {
          type: 'paragraph',
          text: 'Muito similar ao snake case nesse padrão também escrevemos todas as palavras em letras minúsculas porém ao invés de separarmos as palavras por “_” (underline) separamos por “-” (traço) — ex: nome-completo.',
          spans: [{ start: 17, end: 27, type: 'strong' }]
        },
        {
          type: 'preformatted',
          text: 'let kebab-case= "vamos-escrever-em-kebab-case?"',
          spans: []
        },
        { type: 'heading1', text: 'SCREAMING_SNAKE_CASE', spans: [] },
        {
          type: 'paragraph',
          text: 'Esse padrão não é muito utilizado em Javascript, porém é utilizado em outras linguagens de programação, e se refere a escrita do padrão snake case alterando todas as letras minúsculas para maiúsculas — Ex: NOME_COMPLETO.',
          spans: [{ start: 136, end: 146, type: 'strong' }]
        },
        {
          type: 'preformatted',
          text: 'let SCREAMING_SNAKE_CASE= "VAMOS_ESCREVER_EM_SCREAMING_SNAKE_CASE?"',
          spans: []
        },
        {
          type: 'paragraph',
          text: 'Vale lembrar que o padrão mais utilizado no JavaScript é o padrão camelCase',
          spans: []
        },
        { type: 'heading1', text: 'Valores das variáveis', spans: [] },
        {
          type: 'paragraph',
          text: 'O valor é o conteúdo que vamos armazenar após escrever o nome da variável, para isso usamos um sinal de “=” (igual) e na sequência informamos o valor (o dado que irá ser armazenado naquela variável).',
          spans: []
        },
        {
          type: 'heading1',
          text: 'Alterando o valor de uma variável',
          spans: []
        },
        {
          type: 'paragraph',
          text: 'Além de recuperar também podemos alterar o valor de uma variável e para isso usamos o nome da variável seguido do símbolo “=” (igual) e em seguida o novo valor que queremos atribuir a ela.',
          spans: []
        },
        {
          type: 'paragraph',
          text: 'Note que para alterar o valor de uma variável não precisamos mais informar qual o tipo de variável é, apenas informamos o nome dela.',
          spans: []
        },
        {
          type: 'preformatted',
          text: 'let nome = "João da Silva";\nnome = "Maria Santos";',
          spans: []
        },
        {
          type: 'heading1',
          text: 'Recuperando informação de uma variável',
          spans: []
        },
        {
          type: 'paragraph',
          text: 'Para recuperar essa informação ou valor basta fazer um teste imprimindo o valor com o comando: console.log.',
          spans: [{ start: 95, end: 107, type: 'strong' }]
        },
        {
          type: 'preformatted',
          text: 'let nome = "João da Silva";\nconsole.log(nome);  // Imprimira : João da Silva',
          spans: []
        },
        { type: 'heading1', text: 'Concatenação', spans: [] },
        {
          type: 'paragraph',
          text: 'Vamos supor que temos duas informações ou mais e precisamos uni-las em uma única string, para isso usamos o sinal de “+” (mais) para concatenar (unir) esses valores.',
          spans: []
        },
        {
          type: 'preformatted',
          text: 'let nome = "John";\nlet sobrenome = "Doe";\nconsole.log(nome+sobrenome); // imprimira: JohnDoe',
          spans: []
        },
        {
          type: 'paragraph',
          text: 'Da forma acima a informação estará completa porém notamos que o nome estará grudado ao sobrenome, para que ele seja exibido com espaço no código é necessário inserir precisamente no código como queremos que ele seja mostrado.',
          spans: []
        },
        {
          type: 'preformatted',
          text: 'let nome = "John";\nlet sobrenome = "Doe";\nconsole.log(nome+" "+sobrenome);\n // imprimira: John Doe',
          spans: []
        },
        {
          type: 'paragraph',
          text: 'Além de imprimir podemos atribuir o resultado a uma nova variável.',
          spans: []
        },
        {
          type: 'preformatted',
          text: 'let nome = "John";\nlet sobrenome = "Doe";\nlet nomeCompleto = nome + " " + sobrenome',
          spans: []
        }
      ]
    }
  }
]

export type PostsProps = typeof posts
