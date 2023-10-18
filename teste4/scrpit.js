function calcularImovel(metragem, quartos) {
    const PRECOINICIAL = 3000;
    let preco;

    switch (quartos) {
        case 1:
            preco = metragem * PRECOINICIAL;
            break;
        case 2:
            preco = metragem * PRECOINICIAL * 1.2; // 20% de aumento para 2 quartos
            break;
        case 3:
            preco = metragem * PRECOINICIAL * 1.5; // 50% de aumento para 3 quartos
            break;
        default:
            alert("Não permitido.");
            return; // Sai da função se tiver mais de 3 quartos
    }

    return preco;
}

let metragem = parseFloat(prompt("Digite a metragem do imóvel:"));
let quartos = parseInt(prompt("Digite o número de quartos do imóvel:"));

let preco = calcularImovel(metragem, quartos);

if (preco !== undefined) {
    alert("O preço do imóvel é: R$" + preco.toFixed(2));
}
