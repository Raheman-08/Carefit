import {SafeAreaView, Text, View, StyleSheet, PermissionsAndroid, Platform} from 'react-native';
import WatchList from '../components/WatchList';
import Button from '../components/Button';
import SocialButton from '../components/SocialButton';
import { useNavigation } from '@react-navigation/native';
import { BleManager } from 'react-native-ble-plx';
import { useState, useEffect } from 'react';

export default function WatchConnect() {
  const navigation = useNavigation();
  const [devices, setDevices] = useState([]);
  const bleManager = new BleManager();

  useEffect(() => {
    requestBluetoothPermissions(); // Request Bluetooth permissions when component mounts
  }, []);

  const requestBluetoothPermissions = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION, {
            title: 'Location permission for bluetooth scanning',
            message: 'wahtever',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        ); 
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission for bluetooth scanning granted');
          scanForDevices(); // Start scanning for devices after permissions granted
        } else {
          console.log('Location permission for bluetooth scanning revoked');
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const scanForDevices = () => {
    bleManager.state().then((state) => {
      if (state === 'PoweredOn') {
        bleManager.startDeviceScan(null, null, (error, scannedDevice) => {
          if (error) {
            console.error('Error scanning devices:', error);
            return;
          }
          // Update state with scanned devices
          setDevices(prevDevices => [...prevDevices, scannedDevice]);
        });
      } else {
        console.log('Bluetooth is not enabled');
      }
    }).catch((error) => {
      console.error('Error getting Bluetooth state:', error);
    });
  };

  const connectToDevice = async (device) => {
    try {
      // Stop scanning when a device is selected for connection
      await bleManager.stopDeviceScan();
      // Connect to the selected device
      const connectedDevice = await device.connect();
      // Navigate to next screen or perform actions as needed
      navigation.navigate('ConnectedDeviceScreen', { device: connectedDevice });
    } catch (error) {
      console.error('Error connecting to device:', error);
    }
  };
  
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
      {devices.map(device => (
          <WatchList
            key={device.id}
            name={device.name || 'Unknown Device'}
            id={device.id}
            onPress={() => connectToDevice(device)}
          />
        ))}
      </View>

      <View style={styles.btnContainer}>
        <Button title="Search Devices" onPress={scanForDevices} />
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
