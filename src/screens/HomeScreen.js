import { FlatList, StyleSheet, View } from "react-native";
import React, {useState, useEffect} from "react";
import { ActivityIndicator } from "react-native-paper";
import baseManager from '../api/baseManager'
import Episode from "../components/Episode";

const HomeScreen = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getEpisodes = async () => {
    const data = await baseManager.getAll('/episode').then((obj) => obj.results);
    setEpisodes(data);
    setLoading(false);
  }
  
  useEffect(() => {
    getEpisodes();
  }, [])

  const renderItem = ({ item }) => {
    return <Episode episode={item} />
  }
  
  return (
    <View style={{padding: 10}}>
      {loading ? (
        <ActivityIndicator animating={true} color='#309DFF' />
      ) : (
        <FlatList
          data={episodes}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
