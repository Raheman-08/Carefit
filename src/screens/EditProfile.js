import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { avatar } from '../assets/image/avatar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../components/Button';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState(null);
  const navigation = useNavigation();

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    })
      .then(image => {
        // console.log(image);
        setProfile(image.path)
      })
  };

//  useEffect = () => {
//    const getUser = async()=>{
//     try {
//       // const userId = 
//       const user = await axios.get(`http://localhost:3000/api/users/${userId}`);
//     } catch (error) {
      
//     }
//    }
//  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.txtContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
          <MaterialIcons name="arrow-back-ios-new" style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.txtContainer}>
          <Text style={styles.txtHeading}>Edit Profile</Text>
        </View>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={profile ? {uri: profile} : avatar} />
          <TouchableOpacity onPress={pickImage} style={styles.editContainer}>
            <MaterialCommunityIcons
              name="circle-edit-outline"
              style={styles.editIcons}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Raheman Ali</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Enter your name"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.spacing} />

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.spacing} />

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>

        <View>
          <Button title="Save" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  txtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
  },

  txtHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    justifyContent: 'center',
  },

  profileContainer: {
    flex: 0.7,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10, // Adjust the marginTop here
    alignContent: 'center',
  },

  img: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },

  name: {
    fontSize: 24,
    color: '#000',
    top: -20,
  },

  editContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#F57B36',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
    top: -35, // Adjust the top here
  },

  editIcons: {
    fontSize: 28,
    color: '#fff',
  },

  imgContainer: {
    alignItems: 'flex-end',
  },

  infoContainer: {
    alignItems: 'center',
  },

  formContainer: {
    paddingTop: 15,
    margin: 16,
  },

  inputContainer: {
    marginBottom: 20,
  },

  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#898996',
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#E6E6E8',
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    height: 53,
  },
  backArrow: {
    marginRight: 0,
  },

  backIcon: {
    fontSize: 28,
    color: '#000',
  },
});

export default EditProfile;
