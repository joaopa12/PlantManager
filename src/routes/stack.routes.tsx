import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import colors from "../src/styles/colors";
import { Welcome } from "../src/pages/Welcome";
import { UserIdentification } from "../src/pages/UserIdentification";
import { Confirmation } from "../src/pages/Confirmation";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator screenOptions={{
       cardStyle: {
           backgroundColor: colors.white
       } 
    }}>

    <stackRoutes.Screen
    name="Welcome"
    component={Welcome}
    />

    <stackRoutes.Screen
    name="UserIdentification"
    component={UserIdentification}
    />

    <stackRoutes.Screen
    name="Confirmation"
    component={Confirmation}
    />
    
    </stackRoutes.Navigator>
)

export default AppRoutes;