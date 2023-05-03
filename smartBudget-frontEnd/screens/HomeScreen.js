import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileContent}>
          <Image
            source={{
              uri: "https://cdn.discordapp.com/attachments/1059425565330911284/1090778821386567710/317769461_531223468937840_7323651060704758280_n_1.jpg",
            }}
            style={styles.profileImage}
          />

          <Text style={styles.message}>{`${getPeriodOfDay()}`}</Text>
        </View>
      </View>
      <View style={styles.blocksContainer}>
        <View style={styles.mainAccount}>
          <View style={styles.mainItem1}>
            <Image
              source={{
                uri: "https://em-content.zobj.net/thumbs/120/twitter/322/flag-brazil_1f1e7-1f1f7.png",
              }}
              style={styles.accountImage}
            />
            <Text style={styles.mainItem2}>Main account</Text>
          </View>
          <View style={styles.amountInfo}>
            <Text style={styles.amountItem1}>Your total amount is</Text>
            <Text style={styles.amountItem2}>R$ 420,29</Text>
          </View>
          <View></View>
        </View>
      </View>
      <View style={styles.blocksContainer}>
        <View style={styles.block2}></View>
        <View style={styles.block3}></View>
      </View>
      <View style={styles.blocksContainer}>
        <View style={styles.block4}></View>
      </View>
      <View style={styles.blocksContainer}>
        <View style={styles.block5}></View>
      </View>
    </View>
  );
}

function getPeriodOfDay() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

function getPersonsName() {
  return "Augusto";
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
    justifyContent: "space-between",
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
  accountImage: {
    width: 16,
    height: 16,
    borderRadius: 25,
    marginRight: 10,
  },
  toolImage: {
    width: 29,
    height: 29,
  },
  message: {
    fontFamily: "Poppins_500Medium",
    fontSize: 22,
    color: "#fff",
    paddingLeft: 10,
    marginLeft: -6,
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
  mainAccount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    height: 100,
    flexDirection: "column",
    flex: 1,
    alignItems: "flex-start",
  },
  mainItem2: {
    fontFamily: "Poppins_500Medium",
    color: "#fff",
    textAlign: "left",
    fontSize: 11,
    color: "gray",
  },
  mainItem1: {
    flexDirection: "row",
  },
  amountInfo: {
    paddingTop: 10,
  },
  amountItem1: {
    fontFamily: "Poppins_500Medium",
    color: "#fff",
    textAlign: "left",
    fontSize: 13,
    color: "gray",
  },
  amountItem2: {
    fontFamily: "Poppins_500Medium",
    color: "#fff",
    textAlign: "left",
    fontSize: 20,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    height: 35,
    flexDirection: "row",
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
