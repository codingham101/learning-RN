import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import firebase from './Firebase'


export class Depan extends Component {
    render() {
        state = {
            rencana :''
        } 
        tambahrencana = () => {
            if(this.state.rencana== null ){
                alert('masukan rencana anda')
                return false
            }

            firebase.database().ref

        }
        

        return (
            <View style={styles.viewWrapper}>
                <View style={styles.viewAktivitas}></View>
                <View style={styles.viewTombol}>
                        <TextInput
                            style = {styles.textinput}
                            placeholder = "masukan apa aja"
                            onChangeText ={(text)=> this.setState({rencana : text})}
                        />
                        <Button title='tambah rencana'
                          onPress={this.tambahrencana}/>
                </View>
                <View style={styles.viewTombolDelete}></View>
                
            </View>
        )
    }
}

export default Depan


const styles = StyleSheet.create({
    viewWrapper : {
        flex : 1,
        backgroundColor : '#ffff',
        padding : 20
    },
    viewAktivitas : {
        flex : 4
    },
    viewTombol : {
        flex : 2,
        textAlign : 'center',
        justifyContent : 'center'
    },
    viewTombolDelete : {
        marginTop : 20
    },
    textinput : {
        borderWidth : 1,
        borderColor : '#afafaf',
        borderRadius : 5,
        paddingHorizontal : 10,
        marginVertical : 20,
        fontSize : 20
    }
})