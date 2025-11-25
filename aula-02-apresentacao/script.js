function mudarCor() {
    const cores = ['#f0f8ff', '#faebd7', '#e6e6fa', '#fffacd'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
    alert("Cor de fundo mudou");
}