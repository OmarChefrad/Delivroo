import React from "react"
import { StyleSheet, Text, Image } from "react-native"
import { TouchableOpacity } from "react-native"

const CategorieCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1">{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})

export default CategorieCard
