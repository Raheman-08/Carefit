import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DataList = ({ time, measuremnt, unit }) => {
  return (
    <View style={styles.container}>
      <Text>{time}</Text>
      <View style={styles.measure}>
      <Text style={styles.txtMeasurement}>{measuremnt}</Text>
      <Text style={styles.txtUnit}>{unit}</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF8ED',
        padding: 16,
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 15
    },

    measure: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'baseline',
        marginTop: 20
    },

    txtMeasurement: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000'
    },

    txtUnit: {
        fontSize: 18,
        fontWeight: 'normal',
        color: '#000'
    },
});

export default DataList;