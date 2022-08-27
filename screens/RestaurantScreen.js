import { ScrollView, Text } from "react-native"
import React, { useLayoutEffect } from "react"
import { useRoute } from "@react-navigation/native"
import { useNavigation } from "@react-navigation/native"

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      adress,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute()

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <ScrollView>
      <Text>{title}</Text>
    </ScrollView>
  )
}

export default RestaurantScreen
