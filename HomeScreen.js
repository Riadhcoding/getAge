import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View ,TextInput,Image} from 'react-native';
import React ,{useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from './assets/logo.png';

export default function HomeScreen() {


  const [age, setAge] = useState('');

  const [title,setTitle] = useState('Year of birth:')





  const clickHendler = () => {

    const calculatedAge = 2024 - age;
    setAge(Math.abs(calculatedAge).toString());
    setTitle('Your Age is: ')

  }

  return (


    <View style={styles.container}>

<Image style={styles.image}  source={require('./assets/logo.png')}  />

      <Text>{title} {age}</Text>
     <TextInput  
       keyboardType='numeric'
     placeholder='Enter Your Data of birth'
     onChangeText={(val)=> setAge(val)}
     style={styles.input}  />



      <View style={styles.main}>

      <Button  title='Get Your Age' onPress={clickHendler} />

      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  main:{
    marginTop: 20,
  

  },

  input: {
    borderWidth: 2,
    borderColor: 'blue',
    padding: 12,
    margin:10,
    width:300,
    borderRadius:8,

    
  },

  image:{
    width:120,
    height:120,
    marginBottom:100,
    borderColor:'#222',
    borderWidth: 2,
    borderRadius:8,
    resizeMode:'cover',
  }

});
