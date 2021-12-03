import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import {TextInnput, TextInput} from 'react-native-gesture-handler'

export default class User extends Component {

    constructor (props){
        super(props);
        this.state={
            RollNo:'',
            StudentName:'',
            Course:'',
            barang:[]
        }
    }

    InsertRecord=()=> {
        var RollNo = this.state.RollNo;
        var StudentName = this.state.StudentName;
        var Course = this.state.Course;
        // var barang = (namabarang, warna, jumlah) => {
        //     var barang = {}
        //     barang.namabarang = namabarang
        //     barang.warna = warna
        //     barang.jumlah = jumlah

        //     return this.state.barang.push(barang)

        //}
    
        if (RollNo.length==0 || StudentName.length==0 || Course.length==0){
            alert("ada sesuatu yang ketinggalan")
        }else{
            var insertAPIURL="http://192.168.43.32/api/insert.php"
            
            var headers ={
                'Accept' : 'application/json',
                'Content-Type':'application/json'
            }
            
            var Data = {
                RollNo : RollNo,
                StudentName : StudentName,
                Course : Course,
                barang : barang
            }

            fetch(insertAPIURL, {
                method : 'POST',
                headers : headers,
                body : JSON.stringify(Data)
            })
            .then((response)=> response.json())
            .then ((response)=>
            {
                alert(response[0].Message);
            }    
            )
            .catch((error)=>{
                alert("error "+error)
            })
        }
    }


    render() {
        return (
            <View style={styles.viewstyle}>
                
                <TextInput style={styles.txtStyle}
                    placeholder={"RollNo"}
                    placeholderTextColor={"#ff0000"}    
                    keyboardType={"numeric"}
                    onChangeText={RollNo=>this.setState({RollNo})}
                />

                <TextInput style={styles.txtStyle}
                    placeholder={"Student Name"}
                    placeholderTextColor={"#ff0000"}
                    onChangeText={StudentName=>this.setState({StudentName})}    
                />

                <TextInput style={styles.txtStyle}
                    placeholder={"Course"}
                    placeholderTextColor={"#ff0000"}
                    onChangeText={Course=>this.setState({Course})}    
                />
                

                <Button
                    title={"save"}
                    onPress={this.InsertRecord}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    viewstyle :{
            flex :1,
            padding:20,
            marginTop : 10
    },
    
    txtStyle : {
        borderBottomWidth :1,
        borderBottomColor :'red',
        marginBottom : 20

    }
})
