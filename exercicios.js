// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


/*
***DICAS EXTRAS***

Dica de como começar a pensar em "clean code" ou "código limpo":
1 - Enquanto estamos aprendendo, é muito útil deixar comentários pelo código, explicando cada trecho. Mas, se nomeamos cada variável/função e etc de uma forma compreensível, não precisamos das explicações, pois o código se torna mais legível;

2 - Enquanto estamos desenvolvendo um projeto, o console.log é nosso melhor amigo. Mas, usando o react, tudo o que precisa ser mostrado estará na tela, sem que precisemos imprimir, então lembrem-se de sempre rever o código e apagar os console.log que ainda estiverem por ele. 

3 - Enquanto estamos escrevendo o código, é comum deixarmos trechos dele comentados, por algum erro ou não termos terminado aquele raciocínio. Mas estes trechos podem acabar sendo mais confusos pra nós no futuro, quando precisarmos rever este código. Então o ideal é que apaguemos todas as partes não usadas do código

4 - Quando criamos uma variável e ela não é usada, ela fica um pouco mais apagada. Uma boa forma de limpar o código é apagar dele tudo o que não foi usado em algum momento. Isso evita que em alguma manutenção que precisemos fazer no código, o autocomplete acabe sugerindo uma variável que nem tem a ver com o que precisamos.

5 - Quando terminarem um projeto/case, lembrem de revisar todo o código. Apagando todas as variáveis não utilizadas, comentários desnecessários e trechos de código comentado! (lembrando que, enquanto estamos aprendendo, essas ferramentas ajudam na compreensão, mas à medida que vamos nos apropriando mais da linguagem, elas vão se tornando apenas um suporte e não alteram o produto final).
*/

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    // return array.reverse() //forma mais resumida, usando o método reverse().
    const novoArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        novoArray.push(array[i])
    }
    return novoArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    // console.log(array) // imprimir no console para entender o tipo de dado que está recebendo.
    // const novoArray = array.sort((a, b)=>{ //forma mais extensa
    //     console.log(a)
    //     console.log(b)
    //     console.log(a-b)
    //     if(a>b){
    //         return 1
    //     } else {
    //         return -1
    //     }
    // })
    // return novoArray
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((numero) => {
        if (numero % 2 === 0) {
            return numero
        }
    })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    // const novoArray = retornaNumerosPares(array) // reaproveita a função do exercício 4.
    // return novoArray.map((numero)=> numero*numero)
    return array.filter((numero) => { // filtra o array, deixando os pares
        if (numero % 2 === 0) {
            return numero
        }
    }).map((numero) => numero ** 2) //percorre o array novamente, multiplicando os números.
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = -Infinity
    for (let numero of array) {
        if (numero > maiorNumero) {
            maiorNumero = numero
        }
    }
    return maiorNumero
    // array.sort((a,b)=> a-b)
    // return array[array.length-1]
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = num1 > num2 ? num1 : num2
    let menorNumero = num1 < num2 ? num1 : num2
    const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    const diferenca = maiorNumero - menorNumero
    return { maiorNumero, maiorDivisivelPorMenor, diferenca }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const arrayPares = []
    for (let num = 0; arrayPares.length < n; num += 2) {
        arrayPares.push(num)
    }
    return arrayPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    const comparaAB = ladoA === ladoB
    const comparaAC = ladoA === ladoC
    const comparaBC = ladoB === ladoC
    if (comparaAB && comparaAC) {
        return "Equilátero"
    } else if (comparaAB || comparaAC || comparaBC) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}
/*
//resolução com a comparação da segunda comparação completa (com as partes que podemos omitir, por estarem tratadas já na primeira condição)
if(comparaAB && comparaAC){
        return "Equilátero"
    } else if ((comparaAB && !comparaAC) || (comparaAC && !comparaAB) || (comparaBC && !comparaAC)){
        //na resolução final eu tirei os comparativos do false, porque no primeiro if ele já pega todos os casos equiláteros, então aqui a gente só precisa que dois dos lados sejam iguais.
        return "Isósceles"
    } else {
        return "Escaleno"
    }
*/

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    //usei a função criada no exercício 3 (que ordena o array), para ordenar o array recebido pelo parâmetro
    const arrayOrdenado = retornaArrayOrdenado(array)
    // e então peguei os valores do penúltimo elemento e segundo elemento do array retornado, para retornar o que foi pedido.
    // OBS: se ficar confuso entender sobre o retorno da função, sugiro colocar o console.log no array e no arrayOrdenado para que possam ver o resultado.
    return [arrayOrdenado[arrayOrdenado.length - 2], arrayOrdenado[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    // console.log(filme)
    // neste return precisamos acessar cada propriedade do objeto.
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}
/* resultado do console.log(filme)
{nome: 'O Diabo Veste Prada', ano: 2006, diretor: 'David Frankel', atores: Array(4)}
 */

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    // console.log(pessoa)

    // const novoObjeto = {
    //     ...pessoa,
    //     nome: "ANÔNIMO"
    // }
    // console.log("anonimo", novoObjeto)
    // return novoObjeto

    // pessoa.nome = "ANÔNIMO"
    // return pessoa

    //      NÃO altera o objeto original
    return { ...pessoa, nome: "ANÔNIMO" }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    console.log(pessoas)
    const pessoasAutorizadas = pessoas.filter((pessoa) => {
        if (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5) {
            return pessoa
        }
    })
    console.log("autorizadas", pessoasAutorizadas)
    return pessoasAutorizadas
    // return pessoas.filter((pessoa) => (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5))
}
// resultado de console.log(pessoas)
// {nome: 'B', idade: 20, altura: 1.3}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    // método filter percorre o array e cria um novo array apenas com os elementos que são retornados pela condição dada
    const pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
        if (pessoa.idade <= 14 || pessoa.idade >= 60 || pessoa.altura < 1.5) {
            return pessoa
        }
    })
    console.log("Não autorizadas", pessoasNaoAutorizadas)
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    // console.log(contas)
    const contasAtualizadas = contas.map((conta) => {
        let gastoTotal = 0
        // console.log(conta.compras)
        conta.compras.map((compra) => {
            gastoTotal += compra
        })
        conta.saldoTotal -= gastoTotal
        conta.compras = []
        return conta
    })
    return contasAtualizadas
}
// resultado de console.log(contas)
// {cliente: 'Paula', saldoTotal: 7500, compras: Array(2)}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    // Resolvendo usando o sort de maneira mais verbosa
    // Strings podem ser comparadas com > ou < pois o JS tem valores numéricos para as letras. Estes valores são crescentes em ordem alfabética;
    // console.log(consultas)
    // const arrayOrdenado = consultas.sort((a, b) => {
    //     if (a.nome > b.nome) {
    //         return 1
    //     } else {
    //         return -1
    //     }
    // })
    // return arrayOrdenado

    // resolução mais curta. 
    return consultas.sort((a, b) => a.nome > b.nome ? 1 : -1)
}
// {nome: 'Márcia', dataDaConsulta: '04/05/2021'}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    const arrayOrdenado = consultas.sort((a, b) => {
        // Date é um objeto global(existe para o JS e não precisa ser declarado) do JS, não se preocupem em decorar o funcionamento e os métodos (são muitos!), recorram à documentação sempre que necessário!!!
        // método split com o parâmetro "/" transforma a string em um array, separando pelas "/" dela
        // método getTime() é do objeto Date, podem dar uma olhada na doc se quiserem maiores explicações
        const consultaA = new Date(a.dataDaConsulta.split("/").reverse()).getTime()
        const consultaB = new Date(b.dataDaConsulta.split("/").reverse()).getTime()
        // console.log(consultaA, consultaB)
        // como os valores foram transformados em number, a subtração de um pelo outro resultará no valor positivo ou negativo que ordenará o array.
        return consultaA - consultaB
    })
    return arrayOrdenado
}