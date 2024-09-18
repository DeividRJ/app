## Linguagem de programação

Maneira de dar instrução ao computador.
Como um lego, você irá utilizar peças para criar algoritmos, ou seja, para resolver problemas.

> **Algoritmo** : Sequência de passos lógica e finita para resolução de um problema.


## Peças de uma linguagem

- Comentários.
- Delcaração de váriaveis (const, let)
- Operadores (atribuição, concatenação, matemáticos, lógicos)
- Tipos de dados (string, number, boolean)
- Estrutura de dados (functions, object, array)
- Controle de fluxo (if/else)
- Estrutura de repetição (for, while)

# Fases da resolução de um problema

Coletar os dados
Processar os dados (Manipular, alterar ...)
apresentar os dados

## Escopo e váriaveis:

Váriaveis globais e locais = Globais (fora de chaves ex) locais = (dentro de chaves ex) 
Constantes = (Não pode alterar o valor dentro do mesmo escopo)

## Tipos de dados:

Strings (textos): "" '' ``
Number: 2, 1.4
Function
Boolean = (true or false)

## Operadores:

Operadores de atribuição de valores : Por exemplo =
Operador de concatenação

## Estrutura de dados:

### Arrays:

Uma lista que contém qualquer tipo de dado

Exemplo de Array :

let metas = ["Deivid", "Alô" ]
console.log(metas[1] + " " + metas[0] )

### Objetos:

Atributos e métodos
Criação e manipulação de objetos
Acesso a propriedades de objetos
Todo objeto vai receber uma propriedade e valor

Exemplo de Objeto : 

let meta = {
    value: 'Ler um Livro',
    checked: true
}
console.log(meta.value)

### Functions:

- Criar, passar argumentos
- Executar
- arrow function / named function

### Estrutura de repetição

- while

### Condicionais

- switch

### Módulos em node.js:

- Importação de módulos (require, CommonJS)
- Biblioteca 'inquirer' para criar prompts alternativos

## Programação assíncrona e Promises :

- Uso de funções assíncronas (async/await)