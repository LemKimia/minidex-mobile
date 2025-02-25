import {Stack} from "expo-router";
import { TamaguiProvider } from '@tamagui/core'
import { config } from '@/tamagui.config'

const RootLayout = () => {
  return (
    <TamaguiProvider config={config}><Stack/></TamaguiProvider>
  );
}
export default RootLayout;