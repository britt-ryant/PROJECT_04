import React from 'react';
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';

export default class MessageComponent extends React.Component {

  render(){
    console.log('I AM THE STATE OF THE MESSAGE', this.props);
    let where = "";
    this.props.currentUser === this.props.received_user_id ? where="right" : where="left"
    console.log('I am the where', where);
    return(
      <View>
        <Text style={{textAlign: where}}>{this.props.message}</Text>
      </View>
    )
  }
}
