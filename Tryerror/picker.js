import React, { Component } from 'react'
import { Text, StyleSheet, View,  } from 'react-native'
import {Picker} from '@react-native-picker/picker'


export default class picker extends Component {
    
    state = {
        language : 'english'
    }
    
    render() {
        return (
            <View>
                <Picker 
                style={{width : '100%'}}
                selectedValue ={this.state.language}
                onValueChange={(itemValue, itemIndex)=> this.setState({language:itemValue})}
                >
                    <Picker.Item label='spanish' value='spanish'/>
                    <Picker.Item label='english' value='english'/>
                </Picker>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({})
c