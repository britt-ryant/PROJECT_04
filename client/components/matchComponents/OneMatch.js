import React from 'react';
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';

export default class OneMatch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: 1,
      userToMessage: 7,
      newMessageBody: "",
      messageHistory: null,
      messagesReceived: false
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    services.getAllMessages(this.state)
    .then(results => {
      this.setState({
        messagesReceived: true,
        messageHistory: results.data.data
      })
    })
  }
  renderData
}
