import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import services from './services/apiServices';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      apiDataLoaded: false,
      apiData: null
    }
  }
  componentDidMount(){
    services.connect()
    .then(results => {
      console.log(results);
    })
    .catch(err => {
      console.log('youre an idiot', err);
    })
    // console.log("Finally a console log!");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
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
