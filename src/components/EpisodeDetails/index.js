import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  TouchableRipple,
  Card,
  Title,
  Paragraph,
  Divider,
} from "react-native-paper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import baseManager from "../../api/baseManager";
import Character from "../Character";

const EpisodeDetails = (props) => {
  const { characterURLs, name, episode, airDate } = props;
  const [characterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState(true);

  let ids = [];
  for (let i = 0; i < characterURLs.length; i++) {
    const url = characterURLs[i];
    const id = url.slice(42, 46);
    ids.push(id);
  }

  const getCharacters = async () => {
    await baseManager
      .getEntitiesByIds("/character", ids)
      .then((data) => {
        setCharacterList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error while fetching data:", err);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const episodeInfo = `Season ${episode?.slice(
    1,
    3
  )} • Episode ${episode?.slice(4)}`;

  const renderItem = ({ item }) => {
    return (
      <Character item={item}/>
    );
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator animating={true} color="#309DFF" />
      ) : (
        <View>
          <Card style={styles.card}>
            <Card.Content style={{ marginBottom: 10, alignItems: "center" }}>
              <Title style={styles.title}>{name}</Title>
              <Paragraph>{episodeInfo}</Paragraph>
            </Card.Content>
            <Divider />
            <Card.Content style={styles.content}>
              <MaterialCommunityIcons
                name="timeline-check-outline"
                size={24}
                color="#EA7B26"
              />
              <Title style={styles.episodeName}>{airDate}</Title>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Title>Characters</Title>
              <Divider />
            </Card.Content>

            {characterList && (
              <FlatList
                data={characterList}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
              />
            )}
          </Card>
        </View>
      )}
    </View>
  );
};

export default EpisodeDetails;

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
  episodeName: {
    fontSize: 16,
  },
});
