import React from 'react'
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';
import LikeButton from './LikeButton';


export default class ShowAllProfiles extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      apiDataLoaded: false,
      currentProfile: null,
      currentUser: 1,
      //this trait will need to be set based on props that are passed in from the user
      seeking: "F"
      //should also consider passing in the gender of me to use to filter the "searching for" trait of the user
      // gender: "M"
      //this can all be an object of the current user that passes in all of the information of the user, this will allow for additional data to be passes through the user search query in the SQL request
    }
  }
  componentDidMount(){
    console.log("this.state.searchResults Monitor", this.state.searchResults);
      services.getAllProfiles(this.state.seeking)
      .then(result => {
        console.log(result);
        this.setState({
          searchResults: result.data.data
        }, () => this.processSearchResults())
      })
      .catch(err => {
        console.log('I am returning an error!', err);
      })
    }
  processSearchResults(){
    let searchResults = this.state.searchResults
    let randomIndex = Math.floor(Math.random()*searchResults.length + 1)
    this.setState({
      currentProfile: this.state.searchResults[randomIndex],
      apiDataLoaded: true,
      indexToRemove: randomIndex
    })
  }
  handleLike(){
    console.log("My state was lifted in react native!");
  }
  renderData(){
    return (
      <View style={styles.tiny}>
        <Text>My name is {this.state.currentProfile.username}</Text>
        <Text>I am a {this.state.currentProfile.gender}</Text>
        <Text>Looking for a {this.state.currentProfile.seeking}</Text>
        <Text>About me: {this.state.currentProfile.description}</Text>
        <LikeButton
          handleLike={() => this.handleLike()}
          browsingUser={this.state.currentProfile.user_id}
          currentUser={this.state.currentUser}
        />
      </View>
    )
  }
  render(){
    return(
        <View style={styles.tiny}>
          {this.state.apiDataLoaded ? this.renderData() : ''}
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tiny: {
    maxHeight: "50%"
  }
});
