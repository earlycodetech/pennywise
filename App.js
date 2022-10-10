import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./framework/navigation/Stack";
import { AppProvider } from "./globals/AppContext";
import { DefaultTheme } from "@react-navigation/native";

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:"transparent"
  }
};

export default function App() {
  return (
    <AppProvider>
        <NavigationContainer theme={theme}>
          <StackNavigator/>
        </NavigationContainer>
    </AppProvider>
  );
}
