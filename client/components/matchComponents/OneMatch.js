import React from 'react';
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';
import MessageComponent from './MessageComponent';

export default class OneMatch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: this.props.personData.user_one,
      // targetUserId: this.props.personData.user_two
      targetUserId: this.props.personData.user_two,
      message: "",
      allMessages: null,
      messagesReceived: null,
      targetUsername: this.props.personData.username,
      description: this.props.personData.description,
      renderMessages: false,
      apiDataRecieved: false
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNavigation = this.handleNavigation.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    console.log(`I am the props for the OneMatch Component`, this.props, "And I am the state!", this.state);
    let msgInput = {
      currentUser: this.state.currentUser,
      targetUserId: this.state.targetUserId,
      message: this.state.message
    }
    services.getAllMessages(msgInput)
    .then(results => {
      console.log(`I am in the messsages Component, here is the result from the back end`, results);
      this.setState({
        messagesReceived: results.data.data,
        apiDataRecieved: true
      })
    })
    .catch(err => {
      console.log(`There was an error receiving data from the back end `, err);
    })
  }
  handleNavigation(){
    console.log(`I am the handleNavigation function and the message button was clicked!`);
  }
  handleSubmit(){
    console.log(`This is the state of the new message`, this.state);
    let msgInput = {
      currentUser: this.state.targetUserId,
      targetUserId: this.state.currentUser,
      message: this.state.message
    }
    services.sendMessage(msgInput)
    .then(result => {
      console.log(`this is the result of the new message`, result);
      let currentState = this.state.messagesReceived;
      currentState.push(result.data.data);
      this.setState({
        messagesReceived: currentState
      }, () => console.log(`This is what I get back`, this.state))
    })
    .catch(err => {
      console.log(`Opps something went wrong`, err);
    })
  }
  whatToRender(){
    return  <View>{this.state.renderMessages ? this.renderMessageScreen() : this.renderInfo()}</View>
  }

  renderMessageScreen(){
    console.log('loaded a message screen', this.state)
    const messages = this.state.messagesReceived.map((message, id) => <MessageComponent {...message} key={id} />)
    return(
      <View>
        {messages}
        {/* <Text>I will be the messages Component</Text> */}
        <TextInput
          style={{marginLeft:15, width: 150, marginTop:5,fontSize:30,marginBottom: 15}}
          placeholder='New message'
          onChangeText={(message) => this.setState({message})}
          value={this.state.password}
        />
        <Button
          onPress={this.handleSubmit}
          title="Submit Message"
        />
      </View>
    )
  }

  renderInfo(){
    return(
      <View>
        <Text>{this.state.description}</Text>
      </View>
    )
  }

  render(){
    return(
      <View>
        <Text>{this.state.targetUsername}</Text>
        {this.state.apiDataRecieved ? this.whatToRender() : ''}
        <Button
          title={this.state.renderMessages ? `See ${this.state.targetUsername}'s info` : `Message ${this.state.targetUsername}`}
          onPress={() => this.setState({renderMessages: !this.state.renderMessages})}
        />
      </View>
    )
  }
}
