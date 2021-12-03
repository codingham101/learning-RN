import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class Async extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            nama : '',
            alamat : '',
            tmp :[]
        }

        

    }

    componentDidMount(){
        this.getData()
    }



    create = (nama, alamat) => {
        let tmp = this.state.tmp

        tmp.push({nama: nama, 
                  alamat : alamat
                })
        this.setState({tmp})

        this.saveData(tmp)
    }

    saveData = async(tmp) => {
        try {
            await AsyncStorage.setItem('@database', JSON.stringify(tmp))
        } catch (error) {
            console.log('save error', error)  
        }

        this.setState({})
    }

    getData =  async()=>{
        try {
            let value = await AsyncStorage.getItem('@database')
            value = JSON.parse(value)

            if (value !== null){
                this.setState({tmp: value})
            }
        } catch (error) {
            console.log('save error', error)  
            
        }
    }


    render() {
        return (
            <View style={{flex : 1}}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(nama) => this.setState({nama})}
                    value={this.state.nama}
                    placeholder="masukan nama"
                    />

                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(alamat) => this.setState({alamat})}
                    value={this.state.alamat}
                    placeholder="masukan alamat"
                    />

                <TouchableOpacity
                style={{marginTop : 20}}                
                onPress={()=>this.create(this.state.nama, this.state.alamat)}> 
                <Text>masukan data</Text>
                 </TouchableOpacity>

                <FlatList
                    data={this.state.tmp} //data mana yang akan ditampilkan
                    //data yang ingin ditampilkan
                    renderItem={({item, index}) => (
                        <View> 
                            <Text>{item.nama} rumah nya {item.alamat}</Text>
                        </View>
                    )}
                
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({})
