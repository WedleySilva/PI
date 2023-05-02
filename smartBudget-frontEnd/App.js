import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: 'rgba(34,36,40,1)',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? { uri: "https://cdn.discordapp.com/attachments/1059425565330911284/1103049241858941109/home_icon_active.png" }
              : { uri: "https://cdn.discordapp.com/attachments/1059425565330911284/1091138650101788772/home_4.png" }
          } else if (route.name === 'Settings') {
            iconName = focused
              ? { uri: "https://cdn.discordapp.com/attachments/1059425565330911284/1091138650101788772/home_4.png" }
              : { uri: "https://cdn.discordapp.com/attachments/1059425565330911284/1091138650101788772/home_4.png" }
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 26, height: 26 }} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
