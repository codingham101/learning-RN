import React from 'react'
import { View, Text, Button } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import InputPenyewa from './InputPenyewa'
import Lihatdata from './Lihatdata'

function Root() {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to input sewa"
          onPress={() => navigation.navigate('sewa')}
        />
        <Button
          title="Go to lihat data"
          onPress={() => navigation.navigate('datasewa')}
        />
      </View>
    );
  }
  

const stack = createStackNavigator()

function MyStack() {
    return (
        <stack.Navigator>
            <stack.Screen name="Home" component={HomeScreen}/>
            <stack.Screen name="sewa" component={InputPenyewa}/>
            <stack.Screen name="datasewa" component={Lihatdata}/>
        </stack.Navigator>
    )
}

export default Root
