import React from 'react';
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';


export default class Match extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      personData: this.props.personData
    }
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress(){
    console.log(`I am clicked!!!`);
  }

  render(){
    console.log(`I am the state!`, this.state);
    return(
      <View>
        <Button
          title={this.state.personData.username}
          onPress={this.handlePress}
        />
      </View>
    )
  }
}
