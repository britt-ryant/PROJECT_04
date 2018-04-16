import React from 'react'
import { TextInput, Alert, Button, StyleSheet, Text, View, Image } from 'react-native';
import services from '../../services/apiServices';
import LikeButton from './LikeButton';
import UnlikeButton from './UnlikeButton';
import StackNavigator from 'react-navigation'


export default class ShowAllProfiles extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      apiDataLoaded: false,
      currentProfile: null,
      currentUser: this.props.currentUserId,
      seeking: this.props.seeking,
      message: ""
    }
    this.handleNavigation = this.handleNavigation.bind(this)
    this.handleEditPress = this.handleEditPress.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.props.navigation.setParams({
      handlePress: this.handleEditPress,
      handleSecondPress: this.handleLogout
    })
  }


  static navigationOptions = ({navigation}) => ({
      headerRight:
        <Button onPress={() => navigation.state.params.handlePress()} title='Edit' />,
      title: "Connection",
      headerLeft: <Button onPress={() => navigation.state.params.handleSecondPress()} title='Logout' />,
      gesturesEnabled: false
    })

  handleLogout(){
    const {navigate} = this.props.navigation
    // this.props.screenProps = this.state.currentUser
    navigate("SignupScreen")
  }

  handleEditPress(){
    // console.log('i made it in click');
    const {navigate} = this.props.navigation
    this.props.screenProps = this.state.currentUser
    navigate("EditScreen", this.state)
  }
  componentDidMount(){
    // console.log(`I am mounting`, this.state);
    this.props.navigation.setParams({handlePress: this.handleEditPress })
    // console.log("My properties Monitor", this.props);
    this.querySearch()
    }
  processSearchResults(){
    console.log(`I am here in the process searchResults`, this.state.searchResults);
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
    services.getAllProfiles(this.state)
    .then(result => {
      console.log(`I am the response`, result);
      if(result.data.data){
        this.setState({
          searchResults: result.data.data
        }, () => this.processSearchResults())
      } else {
        this.setState({
          message: result.data.message,
        }, ()=> console.log(`The state was set!`, this.state.message))
      }
    })
    .catch(err => {
      console.log('I am returning an error!', err);
    })
  }

  handleMatch(){
    services.createMatch(this.state)
    .then(result => {
      // console.log("I am the result of inserting into the match table!", result);
      this.setState({
        match: true,
      }, () => this.messageOption())
    })
    .catch(err => {
      console.log("I am the error for the match handler", err);
    })
  }
  messageOption(){
    this.alertFunction()
    this.handleLike()
  }
  handleNavigation(){
    const {navigate} = this.props.navigation
    navigate("MatchesScreen", this.state)
  }
  alertFunction(){
    const {navigate} = this.props.navigation
    Alert.alert(
      'You got a match!',
      '',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Go to matches', onPress: ()=> this.handleNavigation()},
      ],
      { cancelable: false }
    )
  }


  renderData(){
    let currentUser = this.state.currentUser;
    let currentProfile = this.state.currentProfile.user_id;
    // console.log(`I am the image----> `, this.state.currentProfile.image);
    return (
      <View style={styles.tiny}>
        <Image
          source={{uri:this.state.currentProfile.image}}
          style={styles.newcontainer}
          resizeMode='cover'
        />
        <Text style={styles.bigwords}>My name is {this.state.currentProfile.username}</Text>
        {/* <Text>I am a {this.state.currentProfile.gender}</Text>
        <Text>Looking for a {this.state.currentProfile.seeking}</Text> */}
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
          <Button
            onPress={this.handleNavigation}
            title="View your matches"
          />
          {this.state.message ? <Text style={{textAlign: "center"}}>{this.state.message}</Text> : ""}
          {this.state.apiDataLoaded ? this.renderData() : "loading"}
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
  newcontainer: {
    height: 400,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tiny: {
    maxHeight: "50%"
  },
  bigwords: {
    fontSize: 25
  }
});
