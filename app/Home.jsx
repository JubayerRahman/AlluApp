// import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PagerView from 'react-native-pager-view'
import { Audio } from 'expo-av';

const Home = () => {

    const ButtonSound = async()=>{
        const {sound} = await Audio.Sound.createAsync(
            require('../assets/audioSound.wav')
        )
        await sound.playAsync()
    }
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.titleSection}>
            {/* title Section */}
            <View style={styles.textBox}>
            <Text style={styles.Allu}>Allu</Text>
            <Text style={styles.title}> Game</Text>
            </View>
        </View>
       <View style={{flexDirection:"row", alignItems:"center"}}>
            <FontAwesome5 name="less-than" size={50} color="#a9ff99" />
            <PagerView style={styles.carousel} initialPage={0}>
            <View style={styles.page} key="1">
                <Image source={require('../assets/allu1.png')} style={styles.image} />
            </View>
            <View style={styles.page} key="2">
                <Image source={require('../assets/oree1.png')}  style={styles.image}/>
            </View>
            </PagerView>
            <FontAwesome5 name="greater-than" size={50} color="#a9ff99" />
       </View>
       <TouchableOpacity onPress={ButtonSound} ><Text style={styles.button}>Let's Play</Text></TouchableOpacity>
  </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        padding:10,
        width:"100%"
    },
    carousel: {
        flex: 1,
        width:"60%",
        height: 400

    },
    textBox:{
        flexDirection:"row"
    },
    titleSection :{
        marginTop: 30,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        fontFamily:"lotoBlod",
        marginTop:"20%",
        textAlign:"center",
        fontSize:50,
        marginBottom:"20%", 
        padding: 8,
        borderRadius: 20,
        borderWidth: 4,
        borderColor:"white"
    },
    Allu:{
        fontFamily:"lotoBlod",
        textAlign:"center",
        marginTop:"20%",
        fontSize:50,
        marginBottom:"20%",
        color:"#a9ff99",
        backgroundColor:"black",
        padding: 10,
        borderRadius: 20,
        borderWidth: 4,
        borderColor:"#a9ff99"
    },
    page: {
        flexDirection:"row",
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: '50%',
    },
    image:{
        height: 250,
        objectFit:"contain",
        marginTop: 200,
        // marginBottom: 75
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
        borderBottomWidth: 4
    }
  });

export default Home