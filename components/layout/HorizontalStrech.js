import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native'

class HorizontalStrech extends Component{
    render(){
        return(
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.item1}>
                        <Text>Item 1</Text>
                    </View>
                    <View style={styles.item2}>
                        <Text>Item 2</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

var styles=StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%"
    },
    item1:{
       backgroundColor:"green",
       flex:0.5
    },
    item2:{
        backgroundColor:"red",
        flex:0.5
     }
})

export default HorizontalStrech;