import { StyleSheet, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableRipple, Card, Title, Avatar  } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Character = ({ item }) => {
  const navigation = useNavigation();
  let characterName = item?.name;
  if (characterName.length > 14) {
    characterName = characterName.slice(0,12) + "..."
  }
  let characterStatus = item?.status === 'unknown' ? 'Unk' : item?.status;
  

  return (
    <TouchableRipple
      onPress={() => navigation.navigate("Character", { itemId: item.id })}
      style={{ marginTop: 10 }}
    >
      <Card.Content style={styles.characterContainer}>
        <View style={styles.content}>
          <Avatar.Image size={30} source={{uri: item?.image}} style={styles.icon}/>
          <Title style={{fontSize: 18}}>{characterName}</Title>
        </View>
        <View style={styles.content}>
          <MaterialCommunityIcons
            name={item.status === 'Dead' ? "robot-dead-outline" : "arm-flex-outline"}
            size={24}
            color="#309DFF"
            style={styles.icon}
          />
          <Title style={{fontSize: 18}}>{characterStatus}</Title>
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
