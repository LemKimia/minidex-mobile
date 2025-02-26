import { Text, View } from "@tamagui/core";
import { IPokemon } from "@/src/utils/type";
import { FlatList } from "react-native";

type HomeScreenProps = {
  pokemonList: IPokemon[];
};

const HomeScreen = ({ pokemonList }: HomeScreenProps) => {
  return (
    <View my={2}>
      <FlatList
        data={pokemonList}
        keyExtractor={(item, index) => `${item.name}-${index.toString()}`}
        renderItem={({ item: pokemon }) => <Text>{pokemon.name}</Text>}
      />
    </View>
  );
};

export default HomeScreen;
