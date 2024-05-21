import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect, useState} from 'react';
import 'react-native-reanimated';
import {Provider, useSelector} from "react-redux";

import { useColorScheme } from '@/hooks/useColorScheme';
import {Store} from "@/components/store/store";
import Confetti from "@/components/confetti/Confetti";
import {selectGConfetti} from "@/components/store/reducers/globalStore";
import {useAppDispatch, useAppSelector} from "@/components/store/hooks";
import {View} from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const GlobalComponents: React.FC = ({}) => {
  const showConfetti = useAppSelector(selectGConfetti);
  return <View style={{zIndex: 999999999}}>
    {showConfetti && <Confetti />}
  </View>;
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <>
        <Provider store={Store}>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="webview" options={{headerShown: false}} />
              <Stack.Screen name="carewallet" options={{headerShown: false}} />
              <Stack.Screen name="+not-found" />
            </Stack>
          </ThemeProvider>
          <GlobalComponents />
        </Provider>
      </>
  );
}
