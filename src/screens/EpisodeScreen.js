import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EpisodeScreen = ({ route }) => {
  const id = route.params.itemId;
  console.log(route.params);
  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}

export default EpisodeScreen

const styles = StyleSheet.create({})