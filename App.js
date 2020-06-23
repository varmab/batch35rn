import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Todos from './components/Todos'
import Users from './components/Users'

const App=()=>{
    return(
        <View style={{flex:1,width:"100%",height:"100%"}}>
            <Todos/>
        </View>
    )
};

export default App;
