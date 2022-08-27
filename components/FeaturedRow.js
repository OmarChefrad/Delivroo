import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"
import { ArrowRightIcon } from "react-native-heroicons/outline"
import { ScrollView } from "react-native"
import RestaurantCard from "./RestaurantCard"
import sanityClient from "../sanity"

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id] {
          ...,
          restaurants[]->{
            ...,
          dishes[]->,
            type-> {
            name
          }
        },
      }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants)
      })
  }, [id])

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
        {restaurants?.map((restaurants) => (
          <RestaurantCard
            key={restaurants._id}
            id={restaurants._id}
            imgUrl={restaurants.image}
            title={restaurants.name}
            rating={restaurants.rating}
            genre={restaurants.type?.name}
            adress={restaurants.address}
            short_description={restaurants.short_description}
            dishes={restaurants.dishes}
            long={restaurants.long}
            lat={restaurants.lat}
          />
        ))}
        {/*ResCARD*/}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
