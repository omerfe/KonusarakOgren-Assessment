import { StyleSheet } from "react-native";
import React from "react";
import {
  TouchableRipple,
  Button,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import useImage from "../../hooks/useImage";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Episode = ({ episode }) => {
  const navigation = useNavigation();
  const { imgSource } = useImage(`${episode?.id}`);
  const episodeName = `Season ${episode?.episode.slice(
    1,
    3
  )} • Episode ${episode?.episode.slice(4)}`;

  return (
    <TouchableRipple
      onPress={() => navigation.navigate("Episode", { itemId: episode?.id })}
    >
      <Card style={styles.card}>
        <Card.Content style={[styles.content, {paddingBottom: 5}]}>
          <Title>{episode?.name}</Title>
          <Paragraph>{episode?.air_date}</Paragraph>
        </Card.Content>
        <Card.Cover source={imgSource} />
        <Card.Content style={[styles.content, {paddingTop: 5}]}>
          <MaterialCommunityIcons name="movie-open-outline" size={24} color='#EA7B26' />
          <Title style={styles.episodeName}>{episodeName}</Title>
        </Card.Content>
      </Card>
    </TouchableRipple>
  );
};

export default Episode;

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  episodeName: {
    fontSize: 16,
  },
});
