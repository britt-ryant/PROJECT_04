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
      messagesReceived: false,
      username: this.props.personData.username,
      description: this.props.personData.description,
      renderMessages: false
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNavigation = this.handleNavigation.bind(this)
  }
  componentDidMount(){
    console.log(`I am the props for the OneMatch Component`, this.props, "And I am the state!", this.state);
    this.setState({
      apiDataLoaded: true
    })
    // services.getAllMessages(this.state)
    // .then(results => {
    //   this.setState({
    //     messagesReceived: true,
    //     messageHistory: results.data.data
    //   })
    // })
  }
  handleNavigation(){
    console.log(`I am the handleNavigation function and the message button was clicked!`);
  }
  whatToRender(){
    return  <View>{this.state.renderMessages ? this.renderMessageScreen() : this.renderInfo()}</View>
  }

  renderMessageScreen(){
    return(
      <View>
        <Text>I will be the messages Component</Text>
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
        <Text>{this.state.username}</Text>
        {this.state.apiDataLoaded ? this.whatToRender() : ''}
        <Button
          title={this.state.renderMessages ? `See ${this.state.username}'s info` : `Message ${this.state.username}`}
          onPress={() => this.setState({renderMessages: !this.state.renderMessages})}
        />
      </View>
    )
  }
}
