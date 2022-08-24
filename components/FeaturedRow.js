import React from "react"
import { View, Text } from "react-native"
import { ArrowRightIcon } from "react-native-heroicons/outline"
import { ScrollView } from "react-native"
import RestaurantCard from "./RestaurantCard"

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/*ResCARD*/}
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo Pizza!"
          rating={4.5}
          genre="Italian"
          adress="123 Main St"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo Pizza!"
          rating={4.5}
          genre="Italian"
          adress="123 Main St"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo Pizza!"
          rating={4.5}
          genre="Italian"
          adress="123 Main St"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo Pizza!"
          rating={4.5}
          genre="Italian"
          adress="123 Main St"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
