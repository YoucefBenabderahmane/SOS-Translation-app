import { StyleSheet, Text, View } from 'react-native';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import AnimatedSplashScreen from './AnimatedSplashScreen'; // Update the path accordingly



SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Britanica Condensed Bold": require("../assets/fonts/Britanica Condensed Bold.ttf"),
    "Britanica Expanded Black Italic": require("../assets/fonts/Britanica Expanded Black Italic.ttf"),
    "Britanica Expanded Regular": require("../assets/fonts/Britanica Expanded Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return <AnimatedSplashScreen />; // Show animated splash screen while fonts are loading
  }

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='bookedTranslator' options={{ headerShown: false }} />
      <Stack.Screen name='reviewPapers' options={{ headerShown: false }} />
      <Stack.Screen name='translatedPapers' options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
