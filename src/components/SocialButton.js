import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const SocialButton = ({title, onPress}) => {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#FFFFFF',
      padding: 16,
      borderWidth: 1,
      border: 1,
      borderColor: '#E6E6E8',
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      height: 56,
    },
  
    text: {
      fontWeight: 'regular',
      color: '#000000',
      fontSize: 16,
    },
  });

export default SocialButton;