



function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}


function determinarNivel(vitorias) {
    if (vitorias < 10) return "Ferro";
    if (vitorias <= 20) return "Bronze";
    if (vitorias <= 50) return "Prata";
    if (vitorias <= 80) return "Ouro";
    if (vitorias <= 90) return "Diamante";
    if (vitorias <= 100) return "Lendário";
    return "Imortal";
}


function exibirResultado(nome, saldo, nivel) {
    console.log(`O Herói ${nome} tem saldo de ${saldo} e está no nível ${nivel}`);
}


function calcularRankeadas(nome, vitorias, derrotas) {
    const saldo = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(vitorias);
    exibirResultado(nome, saldo, nivel);
}


calcularRankeadas("Ainz", 120, 0);       
calcularRankeadas("Kirito", 95, 30);     
calcularRankeadas("Dr. Stone", 30, 12);  
