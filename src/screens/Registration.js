import {SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useState} from 'react';
import axios from 'axios';
import Button from '../components/Button';
import SocialButton from '../components/SocialButton';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Registration() {
  // const { name } = route.params;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://192.168.1.107:3000/api/users/register', {
        name: name,
        email: email,
        password: password
      });
      console.log(response.data);
      Alert.alert('Success', 'User registered successfully');
      // Optionally, you can navigate to another screen after successful registration
      navigation.navigate('Connect');
    } catch (error) {
      console.error('Failed to register user:', error.message);
      Alert.alert('Error', 'Failed to register user. Please try again.');
    }
  };

//   const handleRegister = async () => {
//     const success = await register(name, email, password);
//     if (success) {
//         Alert.alert('Success', 'User registered successfully');
//         navigation.navigate('Connect');
//     } else {
//         Alert.alert('Error', 'Failed to register user. Please try again.');
//     }
// };
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Form Heading */}

      <View style={styles.txtContainer}>
        <Text style={styles.txtHeading}>Sign Up With Email</Text>
        <Text style={styles.txtContent}>Create account and enjoy your workout!</Text>
      </View>

      {/* // Form Fields */}

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}  // Use the 'name' state variable
            onChangeText={text => setName(text)}  // Update the 'name' state variable
            placeholder="Enter your name"
            autoCapitalize="none"  // No need for keyboardType="email-address" for name
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
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Enter your password"
              secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
            />
            <TouchableOpacity
              style={styles.eyeIconContainer}
              onPress={() => setShowPassword(!showPassword)}>
              <MaterialCommunityIcons
                name={showPassword ? 'eye-off' : 'eye'}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>


        <View>
          <Button title="Sign Up" onPress={handleRegister}/>
        </View>

        <View style={styles.optionContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.line} />
            <View>
              <Text style={styles.lineTxt}>Or</Text>
            </View>
            <View style={styles.line} />
          </View>
        </View>

        <View style={styles.smButton}>
          <SocialButton title="Sign In With Apple" />
          <View style={styles.btnSpacing} />
          <SocialButton title="Sign In With Google" />
        </View>

        <View style={styles.signUpContainer}>
          <View>
            <Text>Have An Account?</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.txtSignUp}>Sign In Here</Text>
          </TouchableOpacity>
        </View>
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
    width: '100%'
  },
  spacing: {
    marginBottom: 5,
  },

  btnSpacing: {
    marginBottom: 15,
  },


  forgotContainer: {
    marginTop: 1,
  },

  txtForgot: {
    textAlign: 'right',
    color: '#898996',
  },

  optionContainer: {
    marginTop: 24,
    // margin: 16,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E6E6E8',
  },

  lineTxt: {
    width: 50,
    textAlign: 'center',
    color: '#898996',
    fontWeight: 'bold',
  },

  smButton: {
    marginTop: 24,
  },

  signUpContainer: {
      marginTop: 24,
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      alignItems: 'center',
      gap: 5
  },

  txtSignUp: {
    color: '#F57B36',
    fontWeight: '400'
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },

  eyeIconContainer: {
    position: 'absolute',
    right: 10,
    marginRight: 10
  },

  eyeIcon: {
    fontSize: 24,
    color: '#898996',
  },
});
