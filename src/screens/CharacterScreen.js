import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import baseManager from '../api/baseManager';
import { ActivityIndicator } from "react-native-paper";
import CharacterDetails from '../components/CharacterDetails';

const CharacterScreen = ({route}) => {

  const id = route.params.itemId;
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  const getCharacter = async () => {
    await baseManager
      .getEntityById("/character", id)
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error while fetching data:", err);
      });
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <View style={{ padding: 10 }}>
      {loading ? (
        <ActivityIndicator animating={true} color="#309DFF" />
      ) : (
        <CharacterDetails character={character}/>
      )}
    </View>
  )
}

export default CharacterScreen

const styles = StyleSheet.create({})