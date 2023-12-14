import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F57B36',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
  },

  text: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
});

export default Button;
