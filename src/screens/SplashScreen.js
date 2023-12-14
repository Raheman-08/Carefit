import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useEffect } from 'react';

export default function SplashScreen({navigation}) {
  // const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Splashscreen</Text>
      <Button
        title="go to login"
        onPress={() =>
          navigation.navigate('Login')
        }
      /> */}
      <Image
        source={require('../assets/carefit.png')}
        style={styles.logoContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff"
  },

  // text: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   margin: 16,
  // },
  // logoContainer: {
  //   width: '100%',
  //   height: '100%',
  // }
});
