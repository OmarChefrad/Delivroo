import { ScrollView, Text } from "react-native"
import React, { useState, useEffect } from "react"
import CategorieCard from "./CategorieCard"
import sanityClient from "../sanity"
import { urlFor } from "../sanity"

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "category"]
    `
      )
      .then((data) => {
        setCategories(data)
      })
  })

  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 10,
        paddingHorizontal: 15,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => (
        <CategorieCard
          key={category._id}
          imgUrl={urlFor(category.image).width(300).url()}
        />
      ))}
    </ScrollView>
  )
}

export default Categories
