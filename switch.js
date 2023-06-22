// Retorna o dia da semana correspondente a um número
function retornaDiaSemana(number) {
    let dia = '';
    // Sua implementação aqui
    switch(number){
        case 1:
            dia = 'Domingo';
            break;
        case 2:
            dia = 'Segunda';
            break;
        case 3:
            dia = 'Terça';
            break;
        case 4:
            dia = 'Quarta';
            break;
        case 5:
            dia = 'Quinta';
            break;
        case 6:
            dia = 'Sexta';
            break;
        case 7:
            dia = 'Sábado';
            break;
        default:
            dia = 'Este dia não existe na semana';

    }
    console.log(dia);
}
retornaDiaSemana(7)

// Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
    // Sua implementação aqui
    let preco = '';

    switch(code){
        case 'A':
            preco = 'Preço: 10.99';
            break;
        case 'B':
            preco = 'Preço: 5.99';
            break;
        case 'C':
            preco = 'Preço: 7.99';
            break;
      
        default:
            preco = 'Código inválido';

    }
    console.log(preco);
}
retornaPrecoProduto('B')

// Retorna a categoria do produto com base no tipo de produto
function retornaCategoriaProduto(type) {
    // Sua implementação aqui
    let categoria = '';

    switch(type){
        case 'Eletronicos':
            categoria = 'Tecnologia';
            break;
        case 'Roupas':
            categoria = 'Moda';
            break;
        case 'Alimentos':
            categoria = 'Alimentação';
            break;
      
        default:
            categoria = 'Categoria desconhecida';

    }
    console.log(categoria);
}
retornaCategoriaProduto('Eletronicos');
module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };