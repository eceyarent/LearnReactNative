/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState}from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
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

      <View style={{flex:1, backgroundColor:"pink",/*position:"absolute",top:40,left:40,zIndex:4*/}}/>
      <View style={{flex:1,backgroundColor:"purple",/*position:"absolute",top:60,left:60,zIndex:2*/}}/>
      <View style={{flex:1,backgroundColor:"green",/*position:"absolute",top:80,left:80,zIndex:5*/}}/>
   
    
    </SafeAreaView>
  );

  }

const styles = StyleSheet.create({
  background: {
    
    backgroundColor:'lightblue',
    flex:1,
    //flexDirection:"row", //main : y secondary: x
    //flexDirection:"column", //main : x secondary: y
    //justifyContent:"center",
    //alignItems:"center",
    //flexWrap:"wrap",
    //alignContent:"center"
    
    

  },
  

  
});

export default App;

//section 1
/* <Text style={{color:'purple',fontWeight:'bold'}}>

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
      </TouchableWithoutFeedback> */

//section 2
      //const [text,setText] =useState("")
      // <TextInput style={{ width: 200, height: 50, borderWidth: 1, padding: 7 }}
      //     placeholder='What is your name?'
      //     value={text}
      //     onChangeText={setText}
      //     secureTextEntry={true} />
      //     <Text>Text:{text}</Text>

      //   {/* <Button title = "press me" onPress={()=>console.log("button pressed")}/> */}

      //   <Button title = "press me" onPress={()=>Alert.alert("Hello " + text, "Do you enjoy the tutorial?",
      //   [

      //     {text:"Yes", onPress:()=>console.log("yes")},
      //     {text:"No", onPress:()=>console.log("No")}
      //   ]
        
        
        
      //   )}/>

      //section 3
      //{
       // data.map(item=><Text style={{fontSize:20,borderWidth:1,borderColor:"pink",margin:10}}>{item.body}</Text>)
     // }


    //section 4
    // const data = [
    //   {
    //     "userId": 1,
    //     "id": 1,
    //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    //   },
    //   {
    //     "userId": 1,
    //     "id": 2,
    //     "title": "qui est esse",
    //     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    //   },
    //   {
    //     "userId": 1,
    //     "id": 3,
    //     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    //     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    //   },
    //   {
    //     "userId": 1,
    //     "id": 4,
    //     "title": "eum et est occaecati",
    //     "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    //   },
    //   {
    //     "userId": 1,
    //     "id": 5,
    //     "title": "nesciunt quas odio",
    //     "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    //   },
    //   {
    //     "userId": 1,
    //     "id": 6,
    //     "title": "dolorem eum magni eos aperiam quia",
    //     "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    //   },
    // ]
    // 
    //   const [refreshing,setRefreshing]=useState(false)
    //   const _onRefresh = () =>{
    //     setRefreshing(true)
    //     setTimeout(() => {
    //       setRefreshing(false)
    //     }, 2000);
    //   } 


    //   <FlatList data={data}
    //     renderItem={({item})=><Text key={item.id} style={{fontSize:30,fontWeight:"bold",borderColor:"purple",borderWidth:1,marginVertical:10}}>{item.body}</Text>}
        
    //     refreshControl={<RefreshControl refreshing={refreshing} onRefresh={_onRefresh}/>}
    //     />

    //section 5
//     console.log(Dimensions.get("screen"))
//   return (
//     <SafeAreaView style={styles.background}>

//       <View>
//         <Text style={[styles.text, styles.title]}>Hello everyone!!!!</Text>
//         <Text style={styles.text}>Hello everyoneee</Text>
//         <Text style={styles.text}>Hello everyone</Text>
//         <Text>width: {Dimensions.get("screen").width}</Text>
//         <Text>height: {Dimensions.get("screen").height}</Text>
        
//       </View>
    
//     </SafeAreaView>
//   );

//   }

// const styles = StyleSheet.create({
//   background: {
//     flex:1,
//     backgroundColor:'#FFFFFF',
//     justifyContent:'center',
//     alignItems:'center', 

//   },
//   text : {
//     color:'pink',
//     fontSize:20,
//     fontWeight:'bold'
//   },
//   title: {
//     color:'purple',
//     fontSize:50,
//     fontWeight:'bold'

//   }