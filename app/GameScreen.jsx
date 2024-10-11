import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native'
import {useState, useEffect} from 'react'
import { Audio } from 'expo-av';

const GameScreen = () => {

    const [randomImage, setRandomImage] = useState(null)
    const [ModalImage, setModalImage] = useState(null)
    const [ButtonClicked, setButtonClicked] = useState(false)
    const [BoxImages, setBoxImages] = useState([])
    const [player1Moves, setPlayer1Moves] = useState([]);
    const [player2Moves, setPlayer2Moves] = useState([]);
    const [modalView, setModalView] = useState(false)
    const [ExitmodalView, SetExitmodalView] = useState(false)
    const [winnitnTitle, setWiningTitle] = useState("")

    const HideModal = ()=>{
        setBoxImages([])
        setPlayer1Moves([])
        setPlayer2Moves([])
        setModalView(false)
      }

    useEffect(() => {
      const Images =[require('../assets/allu1.png'), require('../assets/oree1.png')]

      const RandomImages = Math.floor(Math.random() * Images.length)
      setRandomImage(Images[RandomImages])


      
    }, [])
    

    const ButtonsFunction = async(num)=>{
        const {sound} = await Audio.Sound.createAsync(
            require('../assets/audioSound.wav')
        )
        await sound.playAsync()
        setButtonClicked(!ButtonClicked)
        
        
        setRandomImage(randomImage === require('../assets/allu1.png') ? require('../assets/oree1.png') : require('../assets/allu1.png'));
        const newBoxImages = [...BoxImages];
        newBoxImages[num] = randomImage;
        setBoxImages(newBoxImages);

        if (randomImage === require('../assets/allu1.png')) {

            setPlayer1Moves((prevMoves) => [...prevMoves, num]);
        } else {
            setPlayer2Moves((prevMoves) => [...prevMoves, num]);
        }
    }
    

    const CheckLogic = async() => {
        let WinPossibility = [
            [1, 2, 3],
            [1, 4, 7],
            [4, 5, 6],
            [2, 5, 8],
            [7, 8, 9],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ];
    
        // Check for Player 1's winning condition
        if (player1Moves.length >= 3) {
            const checking1 = WinPossibility.filter(possibility =>
                possibility.every(index => player1Moves.includes(index))
            );
            if (checking1.length > 0) {
                console.log("Player 1 Won", checking1);
                setWiningTitle("Allu won this Round")
                setModalImage(require('../assets/allu1.png'))
                setModalView(true)
                const { sound } = await Audio.Sound.createAsync(
                    require("../assets/victorySound.mp3")
                )
                await sound.playAsync()
                return; // Player 1 wins, exit function
            }
        }
        
        // Check for Player 2's winning condition
        if (player2Moves.length >= 3) {
            const checking2 = WinPossibility.filter(possibility =>
                possibility.every(index => player2Moves.includes(index))
            );
            if (checking2.length > 0) {
                console.log("Player 2 Won", checking2);
                setWiningTitle("Oree won this Round")
                setModalView(true)
                setModalImage(require('../assets/oree1.png'))
                const { sound } = await Audio.Sound.createAsync(
                    require("../assets/victorySound.mp3")
                )
                await sound.playAsync()
                return; // Player 2 wins, exit function
            }
        }
    }
    
    const exitModal = ()=>{
        SetExitmodalView(true)
    }
    const resetFunction = () =>{
        setBoxImages([])
        setPlayer1Moves([])
        setPlayer2Moves([])
        SetExitmodalView(false)
    }

    useEffect(()=>{
        CheckLogic()
    },[player1Moves, player2Moves])
    
    
  return (
    <View style={styles.container}>
      {/* Game Boxs */}
      <View style={styles.turnBox}>
        {randomImage && <Image style={styles.turnImage}  source={randomImage}/>}
        <Text style={styles.text}>Turn</Text>
      </View>
      <View style={styles.gameBox}>
         <TouchableOpacity style={styles.individualBox} onPress={()=> ButtonsFunction(1)}  ><Image style={styles.boxImage}  source={BoxImages[1]}  /></TouchableOpacity>
         <TouchableOpacity style={styles.individualBox} onPress={()=> ButtonsFunction(2)}  ><Image style={styles.boxImage}  source={BoxImages[2]}  /></TouchableOpacity>
         <TouchableOpacity style={styles.individualBox} onPress={()=> ButtonsFunction(3)}  ><Image style={styles.boxImage}  source={BoxImages[3]}  /></TouchableOpacity>
         <TouchableOpacity style={styles.individualBox} onPress={()=> ButtonsFunction(4)}  ><Image style={styles.boxImage}  source={BoxImages[4]}  /></TouchableOpacity>
         <TouchableOpacity style={styles.individualBox} onPress={()=> ButtonsFunction(5)}  ><Image style={styles.boxImage}  source={BoxImages[5]}  /></TouchableOpacity>
         <TouchableOpacity style={styles.individualBox} onPress={()=> ButtonsFunction(6)}  ><Image style={styles.boxImage}  source={BoxImages[6]}  /></TouchableOpacity>
         <TouchableOpacity style={styles.individualBox} onPress={()=> ButtonsFunction(7)}  ><Image style={styles.boxImage}  source={BoxImages[7]}  /></TouchableOpacity>
         <TouchableOpacity style={styles.individualBox} onPress={()=> ButtonsFunction(8)}  ><Image style={styles.boxImage}  source={BoxImages[8]}  /></TouchableOpacity>
         <TouchableOpacity style={styles.individualBox} onPress={()=> ButtonsFunction(9)}  ><Image style={styles.boxImage}  source={BoxImages[9]}  /></TouchableOpacity>
      </View>
      <Text style={styles.cross} onPress={exitModal} > Reset </Text>
      <Modal animationType='slide' transparent={true} visible={modalView}>
      <View style={styles.modalView}>
            <Image style={styles.ModalImage} source={ModalImage}/>
            <Text style={styles.modalText}>{winnitnTitle}</Text>
            <Text style={styles.cross} onPress={HideModal}>Restart</Text>
        </View>
      </Modal>
      <Modal animationType='slide' transparent={true} visible={ExitmodalView}>
      <View style={styles.modalView}>
            <Image style={styles.ExitImage} source={require("../assets/exitImage.png")}/>
            <Text style={styles.exitText}>Are You Sure You want to reset the game?</Text>
            <Text style={styles.cross} onPress={resetFunction}>Yes</Text>
        </View>
      </Modal>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        // backgroundColor:"black",
        width:"100%",
        height:"100%",
        alignItems:"center",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    turnBox:{
        width:"90%",
        flexDirection: "column",
        alignItems:"center",
        justifyContent:"space-around",
        backgroundColor:"#a9ff99",
        padding: 10,
        borderRadius:10,
        borderWidth: 2,
        borderRightWidth: 4,
        borderBottomWidth: 4,
        marginBottom: 20
    },
    turnImage:{
        height: 150,
        width:110,
        objectFit:"contain"
    },
    text:{
        fontSize: 30,
        fontFamily:"lotoBlod",
        color:"white"
    },
    gameBox: {
        display: "flex",
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"center"
    },
    individualBox:{
        width:"30%",
        height:100,
        alignItems:"center",
        justifyContent:"center",
        borderWidth: 2,
        borderColor:"#a9ff99"
    },
    boxImage:{
        width:"100%",
        height: "100%",
        objectFit:"contain"
    },
    modalView:{
        backgroundColor:"#a9ff99",
        height:"60%",
        marginTop:"40%",
        marginBottom:"25%",
        borderRadius:20,
        padding: 20,
        width:"95%",
        marginLeft:"auto",
        marginRight:"auto",
        borderWidth: 4,
        borderColor:"black",
        alignItems:"center",
        justifyContent:"space-evenly"
      },
      cross:{
        color:"Blacks",
        fontSize:30,
        width:"90%",
        textAlign: "center",
        fontFamily:"lotoBlack",
        padding: 10,
        borderRadius: 20,
        borderWidth: 4,
        marginTop: 20
      },
      ModalImage:{
        width: 200,
        height: 230,
        objectFit:"contain"
      },
      ExitImage:{
        width: 300,
        height: 250,
        objectFit:"contain",
        marginTop: -30,
        borderBottomWidth: 4,
        borderBottomColor:"black",
      },
      modalText:{
        fontFamily: "lotoBlack",
        fontSize: 30,
        color: "white"
      },
      exitText:{
        fontFamily: "lotoBlack",
        fontSize: 20,
        color: "black"
      }
})

export default GameScreen