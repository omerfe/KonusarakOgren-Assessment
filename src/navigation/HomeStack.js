import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import EpisodeScreen from "../screens/EpisodeScreen";
import CharacterScreen from "../screens/CharacterScreen";

const HomePageStack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <HomePageStack.Navigator screenOptions={{headerStyle: {
        backgroundColor: '#EA7B26',
    }}}>
      <HomePageStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Episodes",
        }}
      />
      <HomePageStack.Screen name="Episode" component={EpisodeScreen} options={{headerTintColor: '#000'}} />
      <HomePageStack.Screen name="Character" component={CharacterScreen} />
    </HomePageStack.Navigator>
  );
};

export default HomeStack;
