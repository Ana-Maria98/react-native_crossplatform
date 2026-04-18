import { Stack } from "expo-router";
import "@/global.css"
import {useFonts} from "expo-font";
import {useEffect} from "react";
import {SplashScreen} from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "sans-regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "sans-medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "sans-semibold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "sans-bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "sans-light": require("../assets/fonts/Quicksand-Light.ttf"),
  });
  useEffect(() => {
    if(fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])
  if(!fontsLoaded) return  null;
  return <Stack screenOptions={{headerShown: false}} />;
}
