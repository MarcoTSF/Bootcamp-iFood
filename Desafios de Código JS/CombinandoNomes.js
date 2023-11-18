function combinandoNomesPokemons(palavra) {
    // Concatenando a palavra com "saur" para formar o nome completo do Pokémon
    let palavraPokemon = palavra + "saur";
    
    // Retornando o nome completo do Pokémon
    return palavraPokemon;
}

// Entrada da palavra usando a função gets():
var nomeEntrada = gets();

// Chamando a função "combinandoNomesPokemons" com o nome do Pokémon informado e armazenando o resultado na variável "palavraGerada":
var palavraGerada = combinandoNomesPokemons(nomeEntrada);

// Exibindo a palavra gerada:
print(palavraGerada);