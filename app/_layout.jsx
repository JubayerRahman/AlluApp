import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PagerView from 'react-native-pager-view'
import { useFonts } from 'expo-font'
import {useEffect} from "react"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
// import Home from './Home';
import Onboard from './Onboard';
import { Slot, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Index from './index';


const Layout = () => {

    const [loaded, error] = useFonts({
        "lotoBlack": require('../assets/fonts/Lato/Lato-Black.ttf'),
        "lotoRegular": require('../assets/fonts/Lato/Lato-Regular.ttf'),
        "lotoBlod": require('../assets/fonts/Lato/Lato-Bold.ttf')
      });
    
      useEffect(() => {
        if (loaded || error) {
        //   SplashScreen.hideAsync();
        }
      }, [loaded, error]);
      

  return (
    <View style={styles.container}>
       <Slot>
        <Onboard/>
       </Slot>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        // padding:10
    },
    carousel: {
        flex: 1,
        width:"60%",
        height: 400

    },
    titleSection :{
        marginTop: 30,
        alignItems:"center",
    },
    title:{
        fontFamily:"lotoBlod",
        marginTop:"20%",
        fontSize:50,
        marginBottom:"20%", 
    },
    Allu:{
        fontFamily:"lotoBlod",
        marginTop:"20%",
        fontSize:50,
        marginBottom:"20%",
        color:"#a9ff99",
        backgroundColor:"black",
        width: 100
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


export default Layout

