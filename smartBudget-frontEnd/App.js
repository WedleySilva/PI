import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

import HomeScreen from "./screens/HomeScreen";

import ChartScreen from "./screens/ChartScreen";

import TransactionsScreen from "./screens/TransactionsScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabelStyle: {
            fontFamily: "Poppins_500Medium",
          },
          tabBarActiveTintColor: "#fff",
          tabBarStyle: styles.tabBar,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? {
                    uri: "https://cdn.discordapp.com/attachments/1059425565330911284/1103145711425568808/home.png",
                  }
                : {
                    uri: "https://cdn.discordapp.com/attachments/1059425565330911284/1103145711660437605/home-alt-regular-240.png",
                  };
            } else if (route.name === "Extract") {
              iconName = focused
                ? {
                    uri: "https://cdn.discordapp.com/attachments/1059425565330911284/1103142890781298798/transactions_icon_activated.png",
                  }
                : {
                    uri: "https://cdn.discordapp.com/attachments/1059425565330911284/1103142890458333184/transactions_icon.png",
                  };
            } else if (route.name === "Overflow") {
              iconName = focused
                ? {
                    uri: "https://cdn.discordapp.com/attachments/1059425565330911284/1103144890155683880/chart_activated.png",
                  }
                : {
                    uri: "https://cdn.discordapp.com/attachments/1059425565330911284/1103144889866260560/chart.png",
                  };
            }

            return <Image source={iconName} style={styles.tabBarIcon} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Extract" component={TransactionsScreen} />
        <Tab.Screen name="Overflow" component={ChartScreen} />
      </Tab.Navigator>
      <LinearGradient
        colors={["transparent", "#050505", "#050505"]}
        style={styles.linearGradient}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    paddingTop: 45,
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: "#050505",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 6,
    paddingTop: 10,
    paddingRight: 6,
    justifyContent: "space-between", // Align profileContent and iconsContainer to the left and right ends, respectively
  },
  profileContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 25,
    marginRight: 10,
  },
  message: {
    fontFamily: "Poppins_500Medium",
    fontSize: 22,
    color: "#fff",
    paddingLeft: 10,
    marginLeft: -6,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 30,
  },
  icon: {
    width: 26,
    height: 26,
    marginLeft: 14,
  },
  filterContainer: {
    flexDirection: "row",
    marginTop: 22,
    alignItems: "flex-start", // Align items to the left
    marginLeft: -6, // Move the filter container to the left
  },
  filterButton: {
    borderWidth: 0.4,
    borderColor: "#fff",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginLeft: 8,
  },
  filterText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 6,
    justifyContent: "space-between",
  },
  tabBar: {
    backgroundColor: "#050505",
    elevation: 0,
    shadowOpacity: 0,
    height: 70,
    borderTopColor: "transparent",
  },
  tabBarIcon: {
    width: 26,
    height: 26,
    position: "absolute",
  },
  linearGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
    zIndex: -1,
  },
  blockContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#121212",
  },
  blocksContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  block1: {
    backgroundColor: "#121212",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    height: 100,
  },
  block2: {
    backgroundColor: "#121212",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    height: 100,
  },
  block3: {
    backgroundColor: "#121212",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    height: 100,
  },
  block4: {
    backgroundColor: "#121212",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    height: 100,
  },
  block5: {
    backgroundColor: "#121212",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    height: 35,
  },
  subtitle: {
    color: "#fff",
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    marginBottom: 5,
  },
  amount: {
    color: "#fff",
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
