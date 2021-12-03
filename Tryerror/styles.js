import {StyleSheet} from 'react-native'
export const Styles = StyleSheet.create({

    container  : {
        flex : 1,
        
    },
    formcontainer : {
        flex : 2,
    },
    inputcontainer : {
        padding : 30,
        alignItems : 'center',        
    },
    input : {
        padding : 20,
        width : 350,
        height : 185,
        backgroundColor : '#dcdde1',
        borderRadius : 30,
        justifyContent : 'space-between'
    },
    txtinput : {
        fontSize : 20,
        borderBottomWidth : 1,
        paddingLeft : 8,
        borderBottomEndRadius : 20
        
    },
    Btn : {
        padding : 50,
        backgroundColor :'#2ed573',
       width :'50%',
       height : 50,
       alignItems : 'center',
       justifyContent : 'center'
       
    }
})