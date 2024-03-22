import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import {useState} from 'react';
import Button from '../components/Button';
// import CookieManager from '@react-native-cookies/cookies';
import SocialButton from '../components/SocialButton';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login() {
  // const { name } = route.params;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://192.168.157.104:3000/api/users/login",{email,password})
      console.log(response.data);
      Alert.alert('Success', 'Logged in successfully');

    //   const { userId } = response.data;

    // // Store user ID in cookies
    // await CookieManager.setFromResponse('http://localhost:3000/', {
    //   name: 'userId',
    //   value: userId,
    // });

      // await Cookies.set('userId', response.data.userId);
      // Optionally, you can navigate to another screen after successful login
      // navigation.navigate('Connect');
      navigation.navigate('Connect');
    } catch (error) {
      console.error('Failed to login:', error);
      Alert.alert('Error', 'Failed to login. Please try again.');
    }
  };

  // const handleLogin = async () => {
  //   const success = await login(email, password);
  //   if (success) {
  //     Alert.alert('Success', 'Logged in successfully');
  //     navigation.navigate('Main');
  //   } else {
  //     Alert.alert('Error', 'Failed to login. Please try again.');
  //   }
  // };
  

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.txtContainer}>
      <Text style={styles.txtHeading}>Sign In With Email</Text>
      <Text style={styles.txtContent}>Input your registered account</Text>
    </View>

    <View style={styles.formContainer}>
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
            onChangeText={text => setPassword(text)}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
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

      <View style={styles.forgotContainer}>
        <Text style={styles.txtForgot} onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot Password?
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <Button title="Sign In" onPress={handleLogin} />
      </View>

      <View style={styles.optionContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
          <Text>Don't Have An Account?</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.txtSignUp}>Sign Up Here</Text>
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

  btnContainer: {
    marginTop: 24,
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
    gap: 5,
  },

  txtSignUp: {
    color: '#F57B36',
    fontWeight: '400',
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