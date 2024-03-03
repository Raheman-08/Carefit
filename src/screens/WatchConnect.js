import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import WatchList from '../components/WatchList';
import Button from '../components/Button';
import SocialButton from '../components/SocialButton';
import { useNavigation } from '@react-navigation/native';

export default function WatchConnect() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.txtHeading}>Connect Your Watch</Text>
        <Text style={styles.txtContent}>
          Connect watch for health tracking.
        </Text>
      </View>

      <View style={styles.spacing} />

      <View style={styles.listContainer}>
        <WatchList text="Iwatch Series 8" />
        <WatchList text="Iwatch Series 8" />
      </View>

      <View style={styles.btnContainer}>
        <Button title="Search Devices" />
        <SocialButton title="Skip For Now" onPress={() => {
          navigation.navigate('Main')
        }}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  txtContainer: {
    margin: 16,
  },

  txtHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },

  txtContent: {
    fontSize: 20,
    color: '#898996',
    marginTop: 8,
  },

  listContainer: {
    marginHorizontal: 16,
  },

  btnContainer: {
    flexDirection: 'column',
    margin: 16,
    justifyContent: 'flex-end',
    gap: 10,
    flex: 1,
  },
});
