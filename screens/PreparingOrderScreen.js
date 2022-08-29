import React from "react"
import { SafeAreaView, View, Text } from "react-native"
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress"
import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"

const PreparingOrderScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery")
    }, 6000)
  }, [])

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/delivroobike.gif")}
        animation="bounceIn"
        iterationCount={1}
        className="h-72 w-72 shadow rounded-lg"
      />

      <Text className="text-lg my-10 text-white font-bold text-center">
        Waiting for Restaurant to accept your order!
      </Text>

      <Progress.Bar size={30} color="white" indeterminate={true} />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen
