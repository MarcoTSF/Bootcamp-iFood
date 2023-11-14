// Lê a jogada do personagem:
var jogadaPersonagem = parseInt(gets());

// Lê a jogada do monstro:
var jogadaMonstro = parseInt(gets());

// TODO: Crie uma função ou outro conceito de lógica de programação para realizar o combate e retornar o resultado:
function  battle(){
//TODO: Implemente uma estrutura condicional if/else para verificar a jogada do personagem e a jogada do monstro, prossiga: 
  if (jogadaPersonagem > jogadaMonstro) {
    return "Você venceu a batalha!";
  } else if (jogadaPersonagem < jogadaMonstro) {
    return "Você perdeu a batalha!"
  } else {
    return "Foi um empate!"
  }
}

// TODO: Agora chame a função para realizar o combate para exibir o resultado:
var resultado =  battle();
print(resultado);