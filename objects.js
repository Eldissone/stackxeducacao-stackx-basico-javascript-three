// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
    // Sua implementação aqui
    retangulo = {
        largura: 5,
        altura: 3
    }
    let area = retangulo.largura * retangulo.altura
    let perimetro = 2 * (retangulo.largura + retangulo.altura)
    console.log("A área do retângulo é igual a:",area)
    console.log("O Perímetro do retângulo é igual a:",perimetro)
   
}
calcularRetangulo()

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
    // Sua implementação aqui
    pessoa = {
        nome: 'Eldissone',
        idade: 25,
        cidade: 'New York'
    }
    
    if(pessoa.idade >= 18){
        console.log('Vc é Adulto');
    }else{
        console.log('Vc não é Adulto');
    }
}
ehAdulto();


// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    // Sua implementação aqui
    obj = {
        marca: 'Mercedes',
        cor: 'Vermelha'
    }
    console.log(obj.marca + obj.cor)
}
concatenaValores()

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
