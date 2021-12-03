import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, SafeAreaView  } from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import {Styles} from './styles'

export default class Barang extends Component {

    state={
        custom_fields:[]
    }

    addCustomField = () => {
        this.setState({
            custom_fields : [...this.state.custom_fields, {meta_nama :'value', meta_warna: 'value', meta_jumlah:'value'}]
        })
    }

    onCustomInputNamaHandler = (value, index) => {
        this.state.custom_fields[index].meta_nama = value
        this.setState({custom_fields:this.custom_fields})
    }

    onCustomInputWarnaHandler = (value, index) => {
        this.state.custom_fields[index].meta_warna = value
        this.setState({custom_fields:this.custom_fields})
    }
    onCustomInputJumlahHandler = (value, index) => {
        this.state.custom_fields[index].meta_jumlah = value
        this.setState({custom_fields:this.custom_fields})
    }

    render() {
        return (
            <ScrollView style={Styles.container}>
                {
                    this.state.custom_fields.map((customInput, key)=>{
                        return (
                            <View key={key} style={Styles.formcontainer}>
                                <View style={Styles.inputcontainer}>
                                    <View style={Styles.input}>
                                    <TextInput
                                        style = {Styles.txtinput}
                                        value = {customInput.key}
                                        onChangeText = {nama => this.onCustomInputNamaHandler(nama,key)}
                                        placeholderTextColor = 'black'
                                        placeholder = 'nama'
                                    />
                                    <TextInput
                                        style = {Styles.txtinput}
                                        value = {customInput.key}
                                        onChangeText = {warna => this.onCustomInputWarnaHandler(warna,key)}
                                        placeholderTextColor = 'black'
                                        placeholder = 'warna'
                                    />
                                    <TextInput
                                        style = {Styles.txtinput}
                                        value = {customInput.key}
                                        onChangeText = {jumlah => this.onCustomInputJumlahHandler(jumlah,key)}
                                        placeholderTextColor = 'black'
                                        placeholder = 'jumlah'
                                    />
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
                

                <TouchableOpacity  
                    style={Styles.Btn}
                    onPress={()=>{this.addCustomField()}}
                >
                    <Text>TAMBAH</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}
