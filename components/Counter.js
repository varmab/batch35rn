import React, {Component} from 'react'

import {
    View,
    Text,
    Button
} from 'react-native'

class Counter extends Component{
    constructor(){
        super();

        this.state={
            count:0,
            disabled:true
        }
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1,
            disabled:false
        })
    }

    decrement=()=>{
        this.setState({
            count:this.state.count-1
        },()=>{
            if(this.state.count==0){
                this.setState({
                    disabled:true
                })
            }
        })
    }

    render(){
        return(
            <View>
                <Text>{this.state.count}</Text>
                <Button onPress={this.increment} title="Increment"/>
                <Button disabled={this.state.disabled} onPress={this.decrement} title="Decrement"/>
            </View>
        )
    }
}

export default Counter;