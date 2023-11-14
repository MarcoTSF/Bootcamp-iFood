// Solicita ao usuário que insira o nome do personagem:
const nomePersonagem = gets();

// Solicita ao usuário que escolha entre "Atacar" ou "Fugir":
const acaoEscolhida = gets();

// TODO: Implemente uma solução utilizando lógica de programação;
//TODO: Verifique a ação escolhida e exibir a mensagem correspondente:
if (acaoEscolhida.toLowerCase() === "atacar") {
  print(`${nomePersonagem} escolheu Atacar!`);
} else if (acaoEscolhida.toLowerCase() === "fugir") {
  print(`${nomePersonagem} escolheu Fugir!`);
} else {
  print("Tente novamente");
}