import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import starterImage from './assets/starterImage.png'

export default function App() {
  return (
    <ImageBackground source={starterImage} resizeMode="cover" >
      <View style={styles.container}>
        <StatusBar style="light" />
        <Text>Hello bruh</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
});
