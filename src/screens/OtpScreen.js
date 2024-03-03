import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import Button from '../components/Button';
import SocialButton from '../components/SocialButton';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function OtpScreen() {
  // const { name } = route.params;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Form Heading */}

      <View style={styles.txtContainer}>
        <Text style={styles.txtHeading}>Forgot Password</Text>
        <Text style={styles.txtContent}>Enter email to reset the password</Text>
      </View>

      {/* // Form Fields */}

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

        <View style={styles.btnContainer}>
          <Button title="Reset Now" onPress={() => navigation.navigate('OtpScreen')} />
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
    marginTop: 10,
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