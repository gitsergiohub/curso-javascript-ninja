# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(x) {
    return !!x;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0)
isTruthy(-0)
isTruthy(null)
isTruthy(undefined)
isTruthy('')
isTruthy()
isTruthy(false)
isTruthy(NaN)

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

isTruthy(1)
isTruthy(true)
isTruthy('a')
isTruthy({})
isTruthy([])
isTruthy(-1)
isTruthy('teste')
isTruthy(function() {})
isTruthy(9)
isTruthy(10)

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {   marca: 'Jaguar',
                modelo:  'r-type',
                placa:  'EDU2025',
                ano:  '2025',
                cor:  'Cinza',
                quantasPortas: 2,
                assentos: 5 ,
                quantidadePessoas: 0,
            };

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudacor = function(novacor) {
    carro.cor = novacor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obtercor = function() {
    return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function() {
    return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
    return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
    var marcamodelo = 'Esse carro � um ' + carro.obterMarca() + ' ' + carro.obterModelo();
    return marcamodelo;
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.pessoas = function(x) {
    var nocupantes ;
    var nlugares ;
    var ndisponivel;
    var cmenssagem ;

    //console.log(x); //mostrar no console o resultado ( equivalente ao conout no advpl )

    if(x < 0 && carro.quantidadePessoas === 0 ){
        return 'O carro esta vazio, n�o h� ocupantes para remover';
    } else if ( x < 0  && x*(-1) > carro.quantidadePessoas ) {
        carro.quantidadePessoas > 1 ? 
        cmenssagem = 'Existem apenas ' + carro.quantidadePessoas + ' pessoas para serem removidas.' : 
        cmenssagem = 'Existe apenas ' + carro.quantidadePessoas + ' pessoa para ser removida.'
        return cmenssagem
    } else if( x < 0 ){
        carro.quantidadePessoas -= x*(-1) ;
    }

    nocupantes = carro.quantidadePessoas;
    nlugares = carro.assentos;
    ndisponivel = nlugares - nocupantes;

    if( ndisponivel === 0) {
        return 'O carro esta lotado !' ;
     } else if( x > ndisponivel  ) {
        ndisponivel > 1 ? cmenssagem = 'Existem apenas ' + ndisponivel + ' lugares no carro.' : cmenssagem =  'Existe apenas ' + ndisponivel + ' lugar no carro';
        return cmenssagem ;
     } else {
         x > 0 ? carro.quantidadePessoas += x : carro.quantidadePessoas += 0 ;
         return 'Ja temos ' + carro.quantidadePessoas + ' pessoas no carro.';
    }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); // Cinza

// Mude a cor do carro para vermelho.
carro.mudacor('vermelho');

// E agora, qual a cor do carro
'vermelho'

// Mude a cor do carro para verde musgo.
carro.mudacor('verde musgo');

// E agora, qual a cor do carro?
'verde musgo'

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); // 'Esse carro � um Jaguar r-type'

// Adicione 2 pessoas no carro.
carro.pessoas(2); //Ja temos 2 pessoas no carro

// Adicione mais 4 pessoas no carro.
carro.pessoas(4); // Existem apenas 3 lugares no carro

// Faça o carro encher.
carro.pessoas(3); //Ja temos 5 pessoas no carro

// Tire 4 pessoas do carro.
carro.pessoas(-4);

// Adicione 10 pessoas no carro.
carro.pessoas(10); // O Carro ja esta lotado

// Quantas pessoas temos no carro?
1
