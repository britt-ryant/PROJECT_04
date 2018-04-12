import React from 'react'
import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import services from '../../services/apiServices';
import LikeButton from './LikeButton';
import UnlikeButton from './UnlikeButton';


export default class ShowAllProfiles extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      apiDataLoaded: false,
      currentProfile: null,
      currentUser: 3,
      //this trait will need to be set based on props that are passed in from the user
      seeking: "M"
      //should also consider passing in the gender of me to use to filter the "searching for" trait of the user
      // gender: "M"
      //this can all be an object of the current user that passes in all of the information of the user, this will allow for additional data to be passes through the user search query in the SQL request
    }
  }
  componentDidMount(){
    // console.log("this.state.searchResults Monitor", this.state.searchResults);
    this.querySearch()
    }
  processSearchResults(){
    let searchResults = this.state.searchResults
    let randomIndex = Math.floor(Math.random()*(searchResults.length))
    this.setState({
      currentProfile: this.state.searchResults[randomIndex],
      apiDataLoaded: true,
      indexToRemove: randomIndex
    })
  }
  handleLike(){
    if(this.state.searchResults.length === 1){
      this.querySearch()
    } else {
      let newState = this.state.searchResults.splice(this.state.indexToRemove, 1)
      this.processSearchResults()
    }
  }

  querySearch(){
    services.getAllProfiles(this.state.seeking)
    .then(result => {
      this.setState({
        searchResults: result.data.data
      }, () => this.processSearchResults())
    })
    .catch(err => {
      console.log('I am returning an error!', err);
    })
  }

  handleMatch(){
    services.createMatch(this.state)
    .then(result => {
      console.log("I am the result of inserting into the match table!", result);
      this.setState({
        match: true,
      }, () => this.messageOption())
    })
    .catch(err => {
      console.log("I am the error for the match handler", err);
    })
  }
  messageOption(){
    //Alert that can direct to either continue or keep swiping or I can use the previously modified state to address this situation but I think this function chain is best...
    this.handleLike()
  }


  renderData(){
    let currentUser = this.state.currentUser;
    let currentProfile = this.state.currentProfile.user_id;
    return (
      <View style={styles.tiny}>
        <Text>My name is {this.state.currentProfile.username}</Text>
        <Text>I am a {this.state.currentProfile.gender}</Text>
        <Text>Looking for a {this.state.currentProfile.seeking}</Text>
        <Text>About me: {this.state.currentProfile.description}</Text>
        <LikeButton
          handleLike={() => this.handleLike()}
          handleMatch={() => this.handleMatch()}
          browsingUser={currentProfile}
          currentUser={currentUser}
        />
        <UnlikeButton
          handleLike={() => this.handleLike()}
        />
      </View>
    )
  }
  render(){
    return(
        <View style={styles.tiny}>
          {this.state.apiDataLoaded ? this.renderData() : console.log('loading..')}
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
