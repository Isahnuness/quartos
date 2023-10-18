function calcularImovel() {
    // Obtém os valores de metragem e número de quartos dos campos de entrada
    let metragem = parseFloat(document.querySelector('.oi:nth-child(2)').value);
    let quartos = parseInt(document.querySelector('.oi:nth-child(4)').value);

    // Preço inicial do metro quadrado
    const precoMetroQuadrado = 3000;

    // Variável para armazenar o preço do imóvel
    let preco;

    // Verifica o número de quartos usando o comando switch
    switch (quartos) {
        case 1:
            preco = metragem * precoMetroQuadrado * 1.2; // 20% de aumento para 1 quarto
            break;
        case 2:
            preco = metragem * precoMetroQuadrado * 1.1; // 10% de aumento para 2 quartos
            break;
        case 3:
            preco = metragem * precoMetroQuadrado; // Preço padrão para 3 quartos
            break;
        default:
            alert("Não permitido.");
            return; // Não calcula o preço se houver mais de 3 quartos
    }

    // Exibe o preço do imóvel em um alerta
    alert("Preço do imóvel: R$" + preco.toFixed(2));
}
