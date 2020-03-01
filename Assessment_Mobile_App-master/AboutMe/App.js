import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Alert, ImageBackground } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    alert('Welcome to Pigpocket App!');
    return (
      <View style={styles.container}>
       <ImageBackground source={{uri:'https://www.desktopbackground.org/download/1280x800/2015/03/10/915007_soft-grunge-wallpapers-tumblr-images_1920x1080_h.jpg'}} style={{width: '100%', height: '100%'}}>
        <Text style={styles.title}>About Me!!</Text>
        <Image style={styles.pic} source={{uri:'https://www.crescentavalleyweekly.com/wp-content/uploads/2018/10/No-1-Ariana-Coba-and-Claire-Gantan-WEB.jpg'}} />
        <Text style={styles.header}>~Claire Gantan~</Text>
        <Text style={styles.normal}>I am from Los Angeles, California and have been interested in computer science since I was 10. I love baking, swimming, singing and playing random musical instruments at a mediocre level :P I love supporting groups that empower women, especially in STEM!!</Text>
      </ImageBackground>
      </View>
    );
  }

}



const styles = StyleSheet.create({
  pic: {
  borderColor: '#FFF',
  width: 150,
  height: 150,
  resizeMode: 'cover',
  alignSelf: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 30,
    color: '#FFF',
    textAlign: 'center',
    margin: 10,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 5,
  },
  normal: {
      fontSize: 20,
      textAlign: 'center',
      color: '#FFF',
      marginBottom: 5,
    },
});
