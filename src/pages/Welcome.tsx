import React from 'react'
import { View, Text, Image } from 'react-native'

import wateringImg from '../assets/watering.png'

 export function Welcome(){
     return(
        <View>
            <Text>
                Gerencia suas plantas de forma fácil
            </Text>

            <Image source={wateringImg}/>
        </View>
     )
 }