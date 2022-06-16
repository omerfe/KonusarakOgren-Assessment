import { StyleSheet } from "react-native";
import React from "react";
import { Card, Title, Paragraph, Divider } from "react-native-paper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const CharacterDetails = ({ character }) => {
  return (
    <Card style={styles.card}>
      <Card.Content style={{ marginBottom: 10, alignItems: "center" }}>
        <Title style={styles.title}>{character?.name}</Title>
        <Paragraph>{character?.species}</Paragraph>
      </Card.Content>
      <Divider />
      <Card.Cover source={{ uri: character?.image }}/>
      <Card.Content style={styles.content}>
        <MaterialCommunityIcons
          name="home-circle-outline"
          size={24}
          color="#EA7B26"
        />
        <Title style={styles.episodeName}>{character?.origin.name}</Title>
      </Card.Content>
      <Card.Content style={styles.content}>
        <Ionicons name="location-outline" size={24} color="#EA7B26" />
        <Title style={styles.episodeName}>{character?.location.name}</Title>
      </Card.Content>
      <Card.Content style={styles.content}>
        <MaterialCommunityIcons name={character?.gender === 'Male' ? "gender-male" : "gender-female"} size={24} color="#EA7B26" />
        <Title style={styles.episodeName}>{character?.gender}</Title>
      </Card.Content>
    </Card>
  );
};

export default CharacterDetails;

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
