import React from 'react'
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';


export default class LikeButton extends React.Component {
  constructor(props){
    super(props);
    //change the currentBrowsedUserId
    this.state = {
      browsingUser: this.props.browsingUser,
      currentUser: this.props.currentUser,
      match: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    console.log(`The current loggedin user is ${this.state.currentUser} and the current browsing user is ${this.state.browsingUser}`);
    let likeData = {
      like_sent: this.state.currentUser,
      like_received: this.state.browsingUser
    }
    services.addToLikeTable(likeData)
    .then(result => {
      console.log(`back to services, successful!`, result);
      this.checkForLikeBack(likeData)
    })
    .catch(err => {
      console.log(`back to services, unsuccessful`, err);
    })
  }
  checkForLikeBack(data){
    console.log('here', data);
    services.checkForMatch(data)
    .then(result => {
      console.log(`I am the result for check for match!`, result);
      if(result.data.data === 1){
        this.setState({
          match: true
        }, () => this.props.handleLike())
      } else {
        this.props.handleLike()
      }
    })
    .catch(err => {
      console.log(`I am the error handle for checkForMatch`, err);
    })
    // this.props.handleLike()
  }
  render(){
    return(
      <View>
        <Button
          title="LIKE"
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}
