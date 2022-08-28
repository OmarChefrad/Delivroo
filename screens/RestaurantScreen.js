import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native"
import React, { useLayoutEffect } from "react"
import { useRoute } from "@react-navigation/native"
import { useNavigation } from "@react-navigation/native"
import { urlFor } from "../sanity"
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline"
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  StarIcon,
} from "react-native-heroicons/outline"
import Dishrow from "../components/DishRow"
import BasketIcon from "../components/BasketIcon"

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
    <>
      <BasketIcon />

      <ScrollView>
        <View>
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-56 bg-gray-300 p-4"
          />

          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text>{rating}</Text> . {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">Nearby : {adress}</Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4 pl-4">
              {short_description}
            </Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={22} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Allergic Read more here
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {/*Dishrows*/}
          {dishes.map((dish) => (
            <Dishrow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default RestaurantScreen
