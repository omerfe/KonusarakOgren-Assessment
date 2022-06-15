import { View } from "react-native";
import React, { useEffect, useState } from "react";
import EpisodeDetails from "../components/EpisodeDetails";
import { ActivityIndicator } from "react-native-paper";
import baseManager from "../api/baseManager";

const EpisodeScreen = ({ route }) => {
  const id = route.params.itemId;
  const [episode, setEpisode] = useState({});
  const [loading, setLoading] = useState(true);

  const getEpisode = async () => {
    await baseManager
      .getEntityById("/episode", id)
      .then((data) => {
        setEpisode(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error while fetching data:", err);
      });
  };

  useEffect(() => {
    getEpisode();
  }, []);

  return (
    <View style={{ padding: 10 }}>
      {loading ? (
        <ActivityIndicator animating={true} color="#309DFF" />
      ) : (
        <EpisodeDetails characterURLs={episode?.characters} name={episode?.name} episode={episode?.episode} airDate={episode?.air_date}/>
      )}
    </View>
  );
};

export default EpisodeScreen;