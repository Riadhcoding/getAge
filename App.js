import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View ,TextInput,Image} from 'react-native';
import React ,{useEffect, useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import HomeScreen from './HomeScreen';
import SplashScreenView from './SplashScreenView';


export default function App() {

const [isShowSplash , setisShowSplash] = useState(true);

useEffect(() =>{
  setTimeout(()=>{
    setisShowSplash(false);
  },3000);
  
});


   return <>{isShowSplash ? <SplashScreenView/> :   <HomeScreen/> }</>




  
}

