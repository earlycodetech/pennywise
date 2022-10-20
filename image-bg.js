import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

let imgAddress =
  'https://images.pexels.com/photos/3876332/pexels-photo-3876332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: imgAddress }}
        style={styles.bg}
        resizeMode="cover">
        <View style={styles.topLayer}>
          <Text style={styles.paragraph}>Image and Image ImageBackground</Text>
          <Image source={require('./assets/snack-icon.png')} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
  },
  topLayer: {
    flex: 1,
    backgroundColor: 'rgba(36,218,27,0.2)',
    // backgroundColor:'#9FF39Bc0'
  },
  paragraph: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
