import React, { useLayoutEffect } from "react"
import { View, Text, SafeAreaView, Image, TextInput } from "react-native"
import { useNavigation } from "@react-navigation/native"
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
} from "react-native-heroicons/outline"
import { ScrollView } from "react-native"
import Categories from "../components/Categories"
import FeaturedRow from "../components/FeaturedRow"

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className="bg-white pt-5">
      {/*Header*/}
      <View className="flex-row pb-3 items-center px-2 space-x-2">
        <Image
          source={{ uri: "http://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={30} color="#00CCBB" />
      </View>
      {/*Body*/}
      <View className="flex-row items-center space-x-2 pb-2 px-2">
        <View className="flex-row rounded-lg flex-1 space-x-2 bg-gray-200 p-3">
          <SearchIcon color="gray" size={25} />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>
      {/*body*/}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/*Categories*/}
        <Categories />
        {/*Features*/}
        <FeaturedRow id="123" title="Featured" description="Paid parterns" />
        <FeaturedRow
          id="234"
          title="Tasty Discounts"
          description="Everyone enjoying these juicy discounts"
        />
        <FeaturedRow
          id="345"
          title="Offers near you"
          description="Why not support your local restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
