import React, {useState, useEffect} from "react";
import { ImageBackground, StyleSheet, Text, View, Image,} from "react-native";


export default Game = () => { 
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetchPokemons();
       },[]);
    
       const fetchPokemons = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
        .then(response => response.json())
        .then(pokemons => setPokemons(pokemons.results));
        };

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }

        const respuestaCorrecta = getRandomInt(0, 4); 
        const pokemon = pokemons[getRandomInt(0, pokemons.length)];
    


    return(
        <View>
        <Image
                    style={{width: 150, height: 150}}
                    source={{
                      uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
                    }}
                  />
        <Text>{pokemon.name}</Text>
        <Text>{respuestaCorrecta}</Text>
        </View>
    );
}


