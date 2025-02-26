import { Text, View } from "@tamagui/core";
import { IPokemon } from "@/src/utils/type";
import { FlatList } from "react-native";
import { Button } from "@tamagui/button";
import { ChevronLeft, ChevronRight } from "@tamagui/lucide-icons";
import { XStack } from "@tamagui/stacks";

type HomeScreenProps = {
  pokemonList: IPokemon[];
};

const HomeScreen = ({ pokemonList }: HomeScreenProps) => {
  return (
    <View>
      <FlatList
        data={pokemonList}
        keyExtractor={(item, index) => `${item.name}-${index.toString()}`}
        renderItem={({ item: pokemon }) => <Text>{pokemon.name}</Text>}
      />
      <XStack>
        <Button icon={ChevronLeft}>Back</Button>
        <Button icon={ChevronRight}>Next</Button>
      </XStack>
    </View>
  );
};

export default HomeScreen;
