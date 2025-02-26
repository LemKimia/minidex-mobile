import { Stack } from "expo-router";
import { TamaguiProvider } from "@tamagui/core";
import { config } from "@/tamagui.config";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <TamaguiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </QueryClientProvider>
    </TamaguiProvider>
  );
};
export default RootLayout;
