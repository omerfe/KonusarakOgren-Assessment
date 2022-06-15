import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CharacterScreen = ({route}) => {

  const id = route.params.itemId;
  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}

export default CharacterScreen

const styles = StyleSheet.create({})