import React from 'react';
import services from './services/apiServices';
import { Button, StyleSheet, Text, View } from 'react-native';
// import Login from './components/userComponents/Login';
// import SignUp from './components/userComponents/SignUp'
// import UserProfile from './components/userComponents/UserProfile';
// import EditProfile from './components/userComponents/EditProfile';
// import CreateProfile from './components/userComponents/CreateProfile';
// import DeleteProfile from './components/userComponents/DeleteProfile';
import ShowAllProfiles from './components/browseComponents/ShowAllProfiles';



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      apiDataLoaded: true,
      apiData: null
    }
  }
  // componentDidMount(){
  //   services.connect()
  //   .then(results => {
  //     // console.log(results.data);
  //     this.setState({
  //       apiDataLoaded: true,
  //       apiData: results.data.data
  //     })
  //   })
  //   .catch(err => {
  //     console.log('youre an idiot', err);
  //   })
  // }

  renderData() {
    return (
      <View style={styles.container}>
        {/* <Login /> */}
        {/* <SignUp /> */}
        {/* <UserProfile /> */}
        {/* <EditProfile /> */}
        {/* <CreateProfile /> */}
        {/* <DeleteProfile/> */}
        <ShowAllProfiles />
      </View>
    );
  }
  render(){
    console.log('loaded', this.state)
    return(
      <View style={styles.container}>
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
});
