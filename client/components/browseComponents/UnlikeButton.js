import React from 'react';
import { Button, View } from 'react-native';


export default class UnlikeButton extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(){
    console.log("I was clicked!");
    this.props.handleLike()
  }
  render(){
    return (
      <View>
        <Button
        onPress={this.handleSubmit}
        title="Dislike"
      />
      </View>
    )
  }
}
