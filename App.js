import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TailwindProvider } from "tailwindcss-react-native"
import HomeScreen from "./screens/HomeScreen"
import RestaurantScreen from "./screens/RestaurantScreen"
import { Provider } from "react-redux"
import { store } from "./store"

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  )
}

export default App
