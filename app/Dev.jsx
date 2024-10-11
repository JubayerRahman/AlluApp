import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Dev = () => {
  return (
    <View style={Styles.container}>
        <FontAwesome name="user-secret" size={350} color="black" />
      <Text>Hii, I am Jobayer Rahman Ohee. I made this small game. Here is my portfolio.</Text>
      <Link style={Styles.Portfolio}  href="https://jobayerportfolio2.netlify.app/">Jobayer Rahman</Link>
    </View>
  )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        padding:10,
        width:"100%",
        height:"100%",
        justifyContent:"center"
    },
    Portfolio:{
        fontSize:30,
        fontFamily: "lotoBlack",
        color:"skyblue",
        textAlign:"left",
        width:"100%"
    }
})

export default Dev