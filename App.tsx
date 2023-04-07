/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  TouchableHighlight,
  //TouchableOpacity
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App(): JSX.Element {
  

  return (
    <SafeAreaView style={styles.background}>
      <Text style={{color:'purple',fontWeight:'bold'}}>

      Hello World.
      {"\n"}
      
      <Text style={{color:'green'}}>  React Native </Text>
      {"\n"}
      
    ogrenme dunyama hoşgeldiniz.
      {"\n"}
  
      </Text>
      <TouchableOpacity onPress={()=>console.log(" image pressed")}>
      <Image source={{uri: 'https://w7.pngwing.com/pngs/979/165/png-transparent-lion-king-simba-illustration-simba-nala-rafiki-mufasa-the-lion-king-hyena-mammal-cat-like-mammal-animals.png'}}
      style={{width: 200, height: 200}}
      resizeMode='stretch' 
    
      />
      </TouchableOpacity>
    
      <TouchableWithoutFeedback onPress={()=>console.log("pressed")}>
      <View style={{width:'100%',height:125,backgroundColor:'red'}}/>
      </TouchableWithoutFeedback>
        
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  background: {
    flex:1,
    backgroundColor:'#FFFFFF',
  },
  
});

export default App;