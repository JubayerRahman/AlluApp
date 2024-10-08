import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Audio } from 'expo-av';
import { useNavigation, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Onboard = () => {

    const navigation = useNavigation()

    const ButtonSound = async()=>{
        const {sound} = await Audio.Sound.createAsync(
            require('../assets/audioSound.wav')
        )
        await sound.playAsync()

        await AsyncStorage.setItem('isOnborded', 'true')

        navigation.navigate('Home')
    }

  return (
    <View style={styles.container}>
        <View style={styles.imageBox}>
            <Image source={require('../assets/allu1.png')} style={styles.image} />
            <Image source={require('../assets/oree1.png')} style={styles.image2} />
        </View>
      {/* <View style={styles.titleSection}> */}
            {/* title Section */}
            <View style={styles.textBox}>
            <Text style={styles.Allu}>Allu</Text>
            <Text style={styles.title}> Game</Text>
            </View>
        {/* </View> */}
      <Text style={styles.text}>Hii, this Allu game is just a tic-tac-toe game which I made in a fun manner to use my younger brother's and sister's cute images and also to learn app development 😎😎</Text>
      <TouchableOpacity onPress={ButtonSound} ><Text style={styles.button}>Let's Play</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
        // backgroundColor:"black"
    },
    imageBox:{
        flexDirection:"row",
        justifyContent:"space-around",
        paddingLeft:10,
        paddingRight:10
    },
    image:{
        height: 250,
        objectFit:"contain",
        padding: 0,
        transform: [
            { translateX: 20 },   // Translate the image 20 units on the X axis
            { translateY: -10 } ,  // Translate the image -10 units on the Y axis
            {rotate:"-20deg"}
          ],        
    },
    image2:{
        height: 250,
        objectFit:"contain",
        padding: 0,
        transform: [
            { translateX: 20 },   // Translate the image 20 units on the X axis
            { translateY: -10 } ,  // Translate the image -10 units on the Y axis
            {rotate:"20deg"}
          ],        
    },
    textBox:{
        flexDirection:"row",
        alignItems:"",
        justifyContent:"center"
    },
    title:{
        fontFamily:"lotoBlod",
        fontSize:50,
        padding: 8,
        borderRadius: 20,
        borderWidth: 4,
        borderColor:"white"
    },
    Allu:{
        fontFamily:"lotoBlod",
        fontSize:50,
        color:"#a9ff99",
        backgroundColor:"black",
        padding: 8,
        borderRadius: 20,
        borderWidth: 4,
        borderColor:"#a9ff99"
    },
    text:{
        fontFamily:"lotoBlod",
        fontSize:16, 
        padding: 8,
        borderRadius: 20,
        borderWidth: 4,
        borderColor:"white"
    },
    button:{
        fontFamily:"lotoBlack",
        backgroundColor:"#a9ff99",
        // color:"white",
        fontSize: 30,
        padding: 10,
        borderRadius:10,
        borderWidth: 2,
        borderRightWidth: 4,
        borderBottomWidth: 4,
        marginTop: 20
    }
})

export default Onboard