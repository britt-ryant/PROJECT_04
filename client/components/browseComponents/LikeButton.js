import React from 'react'
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';


export default class LikeButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      browsingUser: this.props.browsingUser,
      currentUser: this.props.currentUser,
      match: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    // console.log(`I am hitting the like button`, this.state);
    let likeData = {
      like_sent: this.props.currentUser,
      like_received: this.props.browsingUser
    }
    services.addToLikeTable(likeData)
    .then(result => {
      this.checkForLikeBack(likeData)
    })
    .catch(err => {
      console.log(`back to services, unsuccessful`, err);
    })
  }
  checkForLikeBack(data){
    services.checkForMatch(data)
    .then(result => {
      // console.log(`I am the result for check for match!`, result.data.data);
      if(result.data.data === 1){
        //shoot this to the parent to handle the match
        this.props.handleMatch()
      } else {
        // console.log("not a match, but can still call any function that I want!");
        this.props.handleLike()
      }
    })
    .catch(err => {
      console.log(`I am the error handle for checkForMatch`, err);
    })
  }

  render(){
    return(
      <View>
        <Button
          title="LIKE"
          onPress={this.handleSubmit}
        />
        {/* {console.log("Is this a match??", this.state.match)} */}
        {/* {this.state.match ? this.callMatch() : ''} */}
      </View>
    )
  }
}
