import React from 'react';
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';


export default class Match extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      personData: this.props.personData
    }
  }

  render(){
    console.log(`I am the state!`, this.state);
    return(
      <View>
        <Text>You matched with: {this.state.personData.username}</Text>
      </View>
    )
  }
}
