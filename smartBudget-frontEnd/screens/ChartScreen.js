import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

export default function ChartScreen() {
    let [fontsLoaded] = useFonts({
      Poppins_500Medium,
    });
  
    if (!fontsLoaded) {
      return null;
    }
    return (
      <View style={styles.container}>
        <View style={styles.screenContainer}>
          <View style={styles.screenContent}>
            <Text
              style={styles.texto}
            >Overflow</Text>
          </View>
        </View>
        <View style={styles.blocksContainer}>
          <View style={styles.filter}></View>
          <View style={styles.filter}></View>
          <View style={styles.filter}></View>
        </View>
        <View style={styles.blocksContainer}>
          <View style={styles.graphic}></View>
        </View>
        <View style={styles.blocksContainer}>
          <View style={styles.information}></View>
        </View>
      </View>
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
    screenContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 6,
      paddingTop: 10,
      paddingRight: 6,
      justifyContent: "space-between", // Align screenContent and iconsContainer to the left and right ends, respectively
    },
    screenContent: {
      flexDirection: "row",
      alignItems: "center",
    },
    texto: {
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
    graphic: {
      backgroundColor: "#121212",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
      padding: 10,
      borderRadius: 10,
      flex: 1,
      height:270,
    },
    information: {
      backgroundColor: "#121212",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
      padding: 10,
      borderRadius: 10,
      flex: 1,
      height: 105,
    },
    filter: {
      backgroundColor: "#121212",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
      padding: 10,
      borderRadius: 10,
      flex: 1,
      marginRight: 10,
      height: 30,
    },
  });