
import { Button, StyleSheet, Text, View ,TextInput,Image,ImageBackground } from 'react-native';
import Img from './assets/splash.png';


export default function SplashScreenView() {

    return(
        <View style={styles.container}>


<ImageBackground
        source={require('./assets/splash.png')}
        style={styles.backgroundImage}
        resizeMode="cover" 
      />



<View>

</View>


        </View>
    )



}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundImage: {
        width: '100%', // Adjust based on your layout needs
        height: '100%', // Adjust based on your layout needs
        justifyContent: 'center',
        alignItems: 'center',
      },
    text: {
      color: 'white',
      fontSize: 20,
    },
  });