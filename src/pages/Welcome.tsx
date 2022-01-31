import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'
import { Button } from '../components/Button'

 export function Welcome(){
     return(
        <SafeAreaView style={styles.container}> 
            <Text style={styles.title}>
                Gerencia  {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            <Image source={wateringImg} style={styles.image}/>

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre
                que precisar.
            </Text>

            <Button/>
            
        </SafeAreaView>
     )
 }

 const styles = StyleSheet.create({
     container: {
         flex:1,
         alignItems:'center',
         justifyContent:'space-between'
     },
     title:{
         fontSize:32,
         fontWeight:'bold',
         textAlign:'center',
         color: colors.heading,
         marginTop: 48
     },
     subtitle: {
         textAlign: 'center',
         fontSize: 18,
         paddingHorizontal: 20,
         color: colors.heading
     },
     button: {
         backgroundColor: colors.green,
         justifyContent: 'center',
         alignItems: 'center',
         borderRadius: 16,
         marginBottom:10,
         height:56,
         paddingHorizontal: 10
     },
     image: {
         width: 292,
         height: 284,
     },
     buttonText: {
         color: colors.white,
         fontSize: 24,
     }
 })