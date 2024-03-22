import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Notification = ({ message, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  message: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Notification;
