import { View, Text } from 'react-native'
import React from 'react'
import LoginPage from './src/Screens/LogInPage/LoginPage'
import WelcomePage from './src/Screens/WelcomePage/WelcomePage'
import AccountCreat from './src/Screens/AccountCreatPage/AccountCreat'
import DashBoard from './src/Screens/DashBoardPage/DashBoard'
import AddCarDetails from './src/Screens/AddCarDetailPage/AddCarDetails'
import { NavigationContainer } from '@react-navigation/native'
import { Stack } from 'native-base'
import { createStackNavigator } from '@react-navigation/stack'




export default function App() {
  return (
     //<LoginPage/>
    <WelcomePage/>
   //<AccountCreat/>
    //<DashBoard/>
    // <View>
    //   <Text>
    //     Miroon
    //   </Text>
    // </View>
    //<AddCarDetails/>

    // <NavigationContainer>


    //     <Stack.Navigator>
    //   <Stack.Screen name="WelcomePage" component={WelcomePage} />
    //   <Stack.Screen name="LoginPage" component={LoginPage} />
    //   <Stack.Screen name="AccountCreat" component={AccountCreat} />
    //   <Stack.Screen name="DashBoard" component={DashBoard} />
    //   <Stack.Screen name="AddCarDetails" component={AddCarDetails} />

    // </Stack.Navigator>
    // </NavigationContainer>

  )
  }