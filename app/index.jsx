// import { View, Text } from 'react-native'
import {useEffect , useState} from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PagerView from 'react-native-pager-view'
import { Audio } from 'expo-av';
import Home from './Home';
import Onboard from './Onboard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Index = () => {

    const [checkOnboard, setOnboard] = useState(null)

    useEffect(() => {
        const Checking = async()=>{
            const OnBoarded = await AsyncStorage.getItem('isOnborded')
            setOnboard(OnBoarded)
        }

        Checking()
     
    }, [])
    

    const ButtonSound = async()=>{
        const {sound} = await Audio.Sound.createAsync(
            require('../assets/audioSound.wav')
        )
        await sound.playAsync()
    }
  return (
    <View>
        {
            checkOnboard ? <Home/> 
            : <Onboard/>
        }
      {/* <Home/> */}
      {/* <Onboard/> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        padding:20,
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
        fontSize:50,
        marginBottom:"20%", 
        padding: 8,
        borderRadius: 20,
        borderWidth: 4,
        borderColor:"white"
    },
    Allu:{
        fontFamily:"lotoBlod",
        marginTop:"20%",
        fontSize:50,
        marginBottom:"20%",
        color:"#a9ff99",
        backgroundColor:"black",
        padding: 8,
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

export default Index