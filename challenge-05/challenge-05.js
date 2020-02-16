/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarrvar = [ 1 , true , null , false , 'testes' , {nome:'Eduardo'} ]
console.log(myarrvar)

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myarr(arg) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myarr(myarrvar[1]))

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myarr2(arg1,arg2) {
  return arg1[arg2];
}
console.log(myarr2(myarrvar,3));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array5 = [1,'NinjaJs',true,null,undefined,{},[]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myarr(array5));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(nomelivro) {
  var creturn ;
  var livros = {  'livro 1':
                    { quantidadePaginas: 100,
                      autor: 'Monteiro Lobato',
                      editora: 'Abril' },
                  'livro 2':
                    { quantidadePaginas: 200,
                      autor: 'Paulo Coelho',
                      editora: 'Saraiva' },
                  'livro 3':
                    { quantidadePaginas: 300,
                      autor: 'Chico Xavier',
                      editora: 'Luz' }
                };

   return !!nomelivro ? livros[nomelivro] : livros;

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookname = 'livro 1';

console.log('O livro ' + bookname + ' tem '+book(bookname).quantidadePaginas+' paginas' )

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + bookname + ' � ' + book(bookname).autor  )

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookname + '  foi publicado pela editora '+ book(bookname).editora )
