import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Receitas from "../Receitas";
import Mapa from "../Mapa/mapa";

import Icon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Routes() {
  return (
    <Tab.Navigator 
    initialRouteName="Icon"
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#E45700",
          borderTopWidth: 0,
        },
      }}
    >
    <Tab.Screen
        name="Home"
        component={Receitas}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Icon name="home" size={size} color={color} />;
            }
            return <Icon name="home" size={size} color={color} />;
          },
        }}
    />
      <Tab.Screen
        name="Mapa"
        component={Mapa}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Icon name="map" size={size} color={color} />;
            }
            return <Icon name="map" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
    
  );
}

export default Routes;