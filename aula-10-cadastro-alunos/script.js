function cadastrar() {
    // 1. Pegar os valores
    let nome = document.getElementById('nome').value;
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = parseFloat(document.getElementById('n3').value);

    // 2. Validar
    if (!nome || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
    }

    // 3. Calcular Média
    let media = (n1 + n2 + n3) / 3;
    let situacao = "";
    let classeCss = "";

    // 4. Definir Situação
    if (media >= 7) {
        situacao = "Aprovado";
        classeCss = "aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
        classeCss = "recuperacao";
    } else {
        situacao = "Reprovado";
        classeCss = "reprovado";
    }

    // 5. Adicionar na Tabela HTML
    let tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    let novaLinha = tabela.insertRow();

    let celNome = novaLinha.insertCell(0);
    let celMedia = novaLinha.insertCell(1);
    let celSituacao = novaLinha.insertCell(2);

    celNome.innerHTML = nome;
    celMedia.innerHTML = media.toFixed(2);
    celSituacao.innerHTML = `<span class="${classeCss}">${situacao}</span>`;

    // 6. Limpar campos para o próximo
    document.getElementById('nome').value = "";
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
    document.getElementById('n3').value = "";
}