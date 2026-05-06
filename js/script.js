let nomeHeroi = "Brandon";
let heroi = 0;
let nivel = "";

// O laço vai rodar 10 vezes, simulando 10 missões
for (let missao = 1; missao <= 10; missao++) {
    // Em cada missão, o herói ganha um valor aleatório entre 500 e 1500 de XP
    let xp = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
    heroi += xp;

    // Lógica de classificação
    if (heroi <= 1000) {
        nivel = "Ferro";
    } else if (heroi <= 2000) {
        nivel = "Bronze";
    } else if (heroi <= 5000) {
        nivel = "Prata";
    } else if (heroi <= 7000) {
        nivel = "Ouro";
    } else if (heroi <= 8000) {
        nivel = "Platina";
    } else if (heroi <= 9000) {
        nivel = "Ascendente";
    } else if (heroi <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`Missão ${missao}: Ganhou ${xp} XP! Total: ${heroi}. Nível: ${nivel}`);
}

console.log(`--- Jornada Finalizada ---`);
console.log(`O ${nomeHeroi} terminou no nível de ${nivel} com um total de ${heroi} de XP!`);