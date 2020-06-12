import React, {Component} from 'react'

import {
    Text
} from 'react-native'

class Welcome extends Component{
    constructor(){
        super();

        this.state={
            clicks:0
        }
    }

    updateClicks=()=>{
        this.setState({
            clicks:this.state.clicks+1
        })
    }

    render(){
        return(
            <Text onPress={this.updateClicks} style={{fontSize:"20px"}}>Welcome to {this.props.name} - ({this.state.clicks})</Text>
        )
    }
}

export default Welcome;