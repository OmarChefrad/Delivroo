import { ScrollView, Text } from "react-native"
import React from "react"
import CategorieCard from "./CategorieCard"

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 10,
        paddingHorizontal: 15,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategorieCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 1"
      />
      <CategorieCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 2"
      />
      <CategorieCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 3"
      />
      <CategorieCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 4"
      />
      <CategorieCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 5"
      />
      <CategorieCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 6"
      />
      <CategorieCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 7"
      />
      <CategorieCard
        imgUrl="https://links.papareact.com/gn7"
        title="testing 8"
      />
    </ScrollView>
  )
}

export default Categories
