# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma( x , y){
    var nsoma = x + Y ;
    return nsoma
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var nresultado = soma(2,3) + 5 ;

// Qual o valor atualizado dessa variável?
10

// Declare uma nova variável, sem valor.
var myvar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function msg( x , y ) {
    var nresultado = x + y ;
    return 'O valor da variavel agora é ' + nresultado ;
}

// Invoque a função criada acima.
nresultado = msg( nresultado , 2 )

// Qual o retorno da função? (Use comentários de bloco).
/* O resultado da 
   função será uma string com a soma de nresultado + 2 ) = 12 */
12

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function calculo( x , y , z ) {
    var nretorno ;
    if( x == null ||  x === undefined ) {;
        return 'preencha todos os valores corretamente, valor de x não informado'; 
    } else if( y == null ||  y === undefined ) {;
        return 'preencha todos os valores corretamente, valor de y não informado'; 
    } else if( z == null ||  z === undefined) {;
        return 'preencha todos os valores corretamente, valor de z não informado'; 
    } else {;
        nretorno = ( ( x * y * x   ) + 2 );
        return nretorno
    };
}

// Invoque a função criada acima, passando só dois números como argumento.
var a ;
var b = 2;
var c = 2;
var nret = calculo(a,b,c)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
'preencha todos os valores corretamente, valor de x não informado'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
var a = 2
var b = 2;
var c = 2;
var nret = calculo(a,b,c)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function calculo2( x , y , z ) {
    if( x != null ||  x !== undefined  &&  y == null ||  y === undefined  &&  z == null ||  z === undefined ) {;
        return x;
    } else if( x == null ||  x === undefined  &&  y != null ||  y !== undefined  &&  z == null ||  z === undefined ) {;
        return y;
    } else if( x == null ||  x === undefined  &&  y == null ||  y === undefined  &&  z != null ||  z !== undefined ) {;
        return z;
    } else if( x != null ||  x !== undefined  &&  y != null ||  y !== undefined  &&  z == null ||  z === undefined ) {;
        return x + y;
    } else if( x != null ||  x !== undefined  &&  y == null ||  y === undefined  &&  z != null ||  z !== undefined ) {;    
        return x + z;
    } else if( x == null ||  x === undefined  &&  y != null ||  y !== undefined  &&  z != null ||  z !== undefined ) {;        
        return y + z;
    } else if( x != null ||  x !== undefined  &&  y != null ||  y !== undefined  &&  z != null ||  z !== undefined ) {;            
        return ( x + y ) / z
    } else if( x == null ||  x === undefined  &&  y == null ||  y === undefined  &&  z == null ||  z === undefined ) {;                
        return false;
    } else {;
        return null;
    };
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
var a;
var b;
var c;
var d;

var d = calculo2(a,b,c);

a = 1
d = calculo2(a,b,c)

a = 1
b = 2
d = calculo2(a,b,c)

a=1
b=2
c=3
d-calculo2(a,b,c)
