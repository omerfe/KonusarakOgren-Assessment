import { StyleSheet, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableRipple, Card, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Character = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableRipple
      onPress={() => navigation.navigate("Character", { itemId: item.id })}
      style={{ marginTop: 10 }}
    >
      <Card.Content style={styles.characterContainer}>
        <View style={styles.content}>
          <MaterialCommunityIcons
            name="alien-outline"
            size={24}
            color="#309DFF"
            style={styles.icon}
          />
          <Title style={{fontSize: 18}}>{item.name}</Title>
        </View>
        <View style={styles.content}>
          <MaterialCommunityIcons
            name={item.status === 'Dead' ? "robot-dead-outline" : "arm-flex-outline"}
            size={24}
            color="#309DFF"
            style={styles.icon}
          />
          <Title style={{fontSize: 18}}>{item.status}</Title>
        </View>
      </Card.Content>
    </TouchableRipple>
  );
};

export default Character;

const styles = StyleSheet.create({
  characterContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between'
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});
