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
    // console.log(`The current loggedin user is ${this.state.currentUser} and the current browsing user is ${this.state.browsingUser}`);
    let likeData = {
      like_sent: this.props.currentUser,
      like_received: this.props.browsingUser
    }
    services.addToLikeTable(likeData)
    .then(result => {
      // console.log(`back to services, successful!`, result);
      this.checkForLikeBack(likeData)
    })
    .catch(err => {
      console.log(`back to services, unsuccessful`, err);
    })
  }
  checkForLikeBack(data){
    // console.log('here', data);
    services.checkForMatch(data)
    .then(result => {
      // console.log(`I am the result for check for match!`, result);
      if(result.data.data === 1){
        this.setState({
          match: true
        }, () => this.props.handleLike())
      } else {
        this.setState({
          match: false
        }, () => this.props.handleLike())
      }
    })
    .catch(err => {
      console.log(`I am the error handle for checkForMatch`, err);
    })
    // this.props.handleLike()
  }
  callMatch(){
    // Alert.alert("Its a match!")
    console.log("Its a match");
  }
  render(){
    return(
      <View>
        <Button
          title="LIKE"
          onPress={this.handleSubmit}
        />
        {console.log("Is this a match??", this.state.match)}
        {this.state.match ? this.callMatch() : ''}
      </View>
    )
  }
}
