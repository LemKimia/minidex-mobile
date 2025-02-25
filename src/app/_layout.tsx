import {Stack} from "expo-router";
import { TamaguiProvider } from '@tamagui/core'
import { config } from '@/tamagui.config'

const RootLayout = () => {
  return (
    <TamaguiProvider config={config}><Stack><Stack.Screen name="index" options={{headerShown: false}}/></Stack></TamaguiProvider>
  );
}
export default RootLayout;