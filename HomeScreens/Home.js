import React from 'react'
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'


import { borderColor, primaryColor, secondaryColor } from '../publicValues/Color'

export default function Home() {
    return (
       <View style={styles.container}>
             <StatusBar
        BarbarStyle="dark-content"
        backgroundColor={primaryColor}></StatusBar>
           <Text style={styles.topText}>Bienvenue sur ...</Text>
          
           <View style={{
               justifyContent:"space-between"
           }}>
           <Text style={styles.label}>Enter votre lien </Text>
           <TextInput style={styles.input}></TextInput>
            
           <TouchableOpacity style={styles.btn}>
               <Text style={{
                     color:"#fff",
                     alignSelf:"center",
                     fontSize:28,
                     fontWeight:"500"
               }}>Enter</Text>
           </TouchableOpacity>
           <View style={styles.bottomView}> 
             <TouchableOpacity style={styles.touchBottom}>
             <Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
/>
                 <Text style={{
                     color:"#fff",
                     alignSelf:"center",
                     fontSize:22,
                     fontWeight:"500"
               }}>Scan</Text>
             </TouchableOpacity >

             <TouchableOpacity style={styles.touchBottom}>
                
                 <Text style={{
                     color:"#fff",
                     alignSelf:"center",
                     fontSize:22,
                     fontWeight:"500"
               }}>Admin</Text>
             </TouchableOpacity>
         </View>
           </View>
        
       </View>
    )
}
const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:primaryColor,
            flex:1,
            justifyContent:"space-around",
            padding:20


        },
        topText:{
            fontSize:28,
            fontWeight:"700",
            textAlign:"left",
            color:"#fff"

        },
        label:{
            fontSize:18,
            fontWeight:"300",
            color:"#fff"

        },
        input:{
            borderWidth:4,
            borderColor:borderColor,
            height:60,
            width:"100%",
            marginTop:10,
            borderRadius:12

        },
        btn:{
        justifyContent:"center",
        alignContent:"center",
        height:80,
        alignSelf:"center",
        width:"70%",
        backgroundColor:secondaryColor,
        borderRadius:47,
        marginTop:20

        },
        bottomView:{
            flexDirection:"row",
            justifyContent:"space-between"
        },
        touchBottom:{
        backgroundColor:borderColor,
        height:100,
        width:100,
        borderRadius:19,
        marginTop:50,
        justifyContent:"center"
        }
    }
)