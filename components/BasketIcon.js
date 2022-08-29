import { Text, View } from "react-native"
import React from "react"
import { useSelector } from "react-redux"
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice"
import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity } from "react-native"
import Currency from "react-currency-formatter"

const BasketIcon = () => {
  const items = useSelector(selectBasketItems)
  const navigation = useNavigation()
  const basketTotal = useSelector(selectBasketTotal)

  if (items.length === 0) {
    return null
  } else {
  }

  return (
    <View className="absolute bottom-10 w-full z-50 shadow-2xl">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5 p-4 rounded-lg flex-row bg-[#00CCBB] items-center space-x-1"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          Go To Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon
