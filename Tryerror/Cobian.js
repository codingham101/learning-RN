import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import firebase from './Firebase'
export default class Cobian extends Component {
    
    constructor(props){
        super(props)
       this.state={
        nama : '',
        no_hp : '',
        alamat : '',
        namabarang : '',
        jumlah : 0,
        harga : 0,
        total : 0,
        barang : []
       }

    }
    
    create = (namabarang, jumlah, harga ) => {
        let barang = this.state.barang
        let total = harga * jumlah

        barang.push ({
            namabarang : namabarang,
            jumlah : jumlah,
            harga : harga,
            total : total
        })
        this.setState({barang})
    }

    onSubmit = () => {
        const daftarBarang = firebase.database().ref('Pelanggan')
        const pelanggan = {
            nama : this.state.nama,
            no_hp : this.state.no_hp,
            alamat : this.state.alamat,
            barang : this.state.barang
        }

        daftarBarang
        .push(pelanggan)
        .then((data)=> {
            alert('sukses')
        })
        .catch((error)=>{
            alert('eror : ', error)
        })
    }


    render() {
        return (
            <View style = {styles.container}>
                <View style ={styles.datapel}>
                <TextInput
                    style={styles.TinputBarang}
                    placeholder = 'masukan nama barang'
                    onChangeText = {nama => this.setState({nama})}
                    value = {this.state.nama}
                /><TextInput
                style={styles.TinputBarang}
                placeholder = 'masukan nama barang'
                onChangeText = {no_hp => this.setState({no_hp})}
                value = {this.state.no_hp}
            /><TextInput
            style={styles.TinputBarang}
            placeholder = 'masukan nama barang'
            onChangeText = {alamat => this.setState({alamat})}
            value = {this.state.alamat}
        />
                </View>
                <View style = {styles.tampil2}>

                    <View style={styles.data}>
                        <Text style={styles.judul}>Nama Barang</Text>
                        
                    </View>

                    <View style={styles.data}>
                        <Text style={styles.judul}>Jumlah</Text>
                        
                    </View>

                    <View style={styles.data}>
                        <Text style={styles.judul}>Harga</Text>
                        
                    </View>

                    <View style={styles.data}>
                        <Text style={styles.judul}>Total Harga</Text>
                        
                    </View>

                    </View>
                <FlatList
                data = {this.state.barang}
                renderItem={({item, index}) => (
                    <TouchableOpacity style = {styles.tampil}>

                    <View style={styles.data}>
                        <Text>{item.namabarang}</Text>
                    </View>

                    <View style={styles.data}>
                        <Text>{item.jumlah}</Text>
                    </View>

                    <View style={styles.data}>
                        <Text>{item.harga}</Text>
                    </View>

                    <View style={styles.data}>
                        <Text>{item.total}</Text>
                    </View>
                    </TouchableOpacity>
                )}
                />
                
                <View style = {styles.Tinput}>
                <TextInput
                    style={styles.TinputBarang}
                    placeholder = 'masukan nama barang'
                    onChangeText = {namabarang => this.setState({namabarang})}
                    value = {this.state.namabarang}
                />
                <TextInput
                    style={styles.Tinputjumlah}
                    placeholder = 'jumlah'
                    keyboardType = {'numeric'}
                    onChangeText = {jumlah => this.setState({jumlah})}
                    value = {this.state.jumlah}
                />
                <TextInput
                    style={styles.Tinputharga}
                    placeholder = 'harga'
                    keyboardType = {'numeric'}
                    onChangeText = {harga => this.setState({harga})}
                    value = {this.state.harga}
                />

                
                </View>
                <View style={styles.tombol}>
                <TouchableOpacity
                        style={styles.btntambah}
                        onPress = {()=>this.create(this.state.namabarang, this.state.jumlah, this.state.harga)}>
                        <Text style={styles.btntext}>Tambah</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.btninput}
                    onPress = {()=>this.onSubmit()}
                >
                <Text style={styles.btntext}>Input</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    tampil : {
        flex : 10,
        flexDirection : 'row',
        justifyContent : 'space-between',
        backgroundColor : '#dfe6e9'
    },
    tampil2 : {
        height : 50,
        flexDirection : 'row',
        justifyContent : 'space-between',
        backgroundColor : '#dfe6e9'
    },
    Tinput : {
        height : 50,
        flexDirection :'row',
        alignItems : 'center'
    },
    TinputBarang : { 
        height: 40, 
        width : 205, 
        borderColor: '#b2bec3', 
        borderWidth:3,
        borderRadius : 5,  
        backgroundColor : 'white',
        paddingLeft : 8
        
    },
    Tinputjumlah : { 
        height: 40, 
        width : 80, 
        borderColor: '#b2bec3', 
        borderWidth:3,
        borderRadius : 5, 
        backgroundColor : 'white',
        paddingLeft : 8
        
    },
    Tinputharga : { 
        height: 40, 
        width : 130, 
        borderColor: '#b2bec3', 
        borderWidth:3,
        borderRadius : 5, 
        backgroundColor : 'white',
        paddingLeft : 8
        
    },
    data : {
        width : 101,
        paddingTop : 5,
        backgroundColor : '#ffff',
        alignItems : 'center',

        
    },
    judul : {
        fontSize : 20,
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 20,
        fontWeight : 'bold'
    },
    tombol : {
        height : 80,
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center'
    },
    btntambah : {
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#0984e3',
        height : 50,
        width : 200,
        borderRadius : 10
    },
    btninput : {
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#2ecc71',
        height : 50,
        width : 200,
        borderRadius : 10
    },
    btntext : {
        fontSize : 20,
        color : '#ffff',
        justifyContent : 'center',
        alignItems : 'center',
        fontWeight : 'bold'
    },
    datapel : {
        height : 120,
        backgroundColor : 'red'
    }
    

})
