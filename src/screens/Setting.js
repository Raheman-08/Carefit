import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Setting = () => {
  const [toggle, setToggle] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.txtHeading}>Settings</Text>
      </View>

      <ScrollView>
        <View style={styles.accContainer}>
          <Text style={styles.subHeading}>Account</Text>

          <View style={styles.innerContainer}>
            <View style={styles.txtIcon}>
              <MaterialCommunityIcons
                style={styles.icon}
                name="account-edit-outline"
              />
              <Text style={styles.menuHeading}>Edit Profile</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
              <SimpleLineIcons name="arrow-right" style={styles.iconOpen} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.genContainer}>
          <Text style={styles.subHeading}>General</Text>

          <View style={styles.innerContainer}>
            <View style={styles.txtIcon}>
              <MaterialCommunityIcons style={styles.icon} name="bell-outline" />
              <Text style={styles.menuHeading}>Notification</Text>
            </View>
            <View>
              <Switch
                trackColor={{false: 'gray', true: '#00FF00'}}
                thumbColor="white"
                ios_backgroundColor="gray"
                onValueChange={value => setToggle(value)}
                value={toggle}
              />
            </View>
          </View>

          <View style={styles.spacing} />

          <View style={styles.innerContainer}>
            <View style={styles.txtIcon}>
              <MaterialCommunityIcons
                style={styles.icon}
                name="cards-heart-outline"
              />
              <Text style={styles.menuHeading}>Health</Text>
            </View>
            <TouchableOpacity>
              <SimpleLineIcons name="arrow-right" style={styles.iconOpen} />
            </TouchableOpacity>
          </View>

          <View style={styles.spacing} />

          <View style={styles.innerContainer}>
            <View style={styles.txtIcon}>
              <MaterialCommunityIcons style={styles.icon} name="lock-outline" />
              <Text style={styles.menuHeading}>Privacy</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
              <SimpleLineIcons
                name="arrow-right"
                style={styles.iconOpen}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.logoutContainer}>
          <TouchableOpacity style={styles.innerContainer}>
            <View style={styles.txtIcon}>
              <MaterialIcons style={styles.logoutIcon} name="logout" />
              <Text style={styles.menuHeading}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  txtContainer: {
    margin: 16,
  },

  txtHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },

  accContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    flexDirection: 'column',
  },

  genContainer: {
    marginHorizontal: 16,
    marginTop: 50,
    flexDirection: 'column',
  },

  logoutContainer: {
    marginHorizontal: 16,
    marginTop: 250,
    flexDirection: 'column',
    borderTopWidth: 5,
    borderTopColor: '#F0F0F0',
  },

  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#898996',
  },

  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },

  menuHeading: {
    fontSize: 22,
    color: '#000',
  },

  icon: {
    fontSize: 28,
  },

  logoutIcon: {
    fontSize: 28,
    color: '#F57B36',
  },

  iconOpen: {
    fontSize: 18,
  },

  txtIcon: {
    flexDirection: 'row',
    gap: 10,
  },

  spacing: {
    marginBottom: 20,
  },
});

export default Setting;
