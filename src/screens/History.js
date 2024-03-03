import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Dropdown from '../components/Dropdown';
import HistoryChart from '../components/HistoryChart';


const History = () => {
  const Heartdata = [50, 10, 40, 95, 120, 200, 50];
  const Oxygendata = [50, 10, 40, 95, 120, 200, 50];
  const Stressdata = [50, 10, 40, 95, 120, 200, 50];
  const Caloriedata = [50, 10, 40, 95, 120, 200, 50];

  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (value) => {
    setSelectedOption(value);
  };

  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.txtContainer}>
        <Text style={styles.txtHeading}>History</Text>
      </View>

      <View style={styles.drpContainer}>
        <Dropdown />
      </View>

      <View style={styles.spacing} />
<ScrollView>
      <View style={styles.heartContainer}>
        <Text style={styles.txtHeart}>Heart Rate</Text>
        <HistoryChart data={Heartdata} />
      </View>

      <View style={styles.spacing} />

      <View style={styles.heartContainer}>
        <Text style={styles.txtHeart}>Oxygen Rate</Text>
        <HistoryChart data={Oxygendata} />
      </View>

      <View style={styles.heartContainer}>
        <Text style={styles.txtHeart}>Stress Level</Text>
        <HistoryChart data={Stressdata} />
      </View>

      <View style={styles.heartContainer}>
        <Text style={styles.txtHeart}>Calories Burn</Text>
        <HistoryChart data={Caloriedata} />
      </View>

      </ScrollView>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
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

  drpContainer: {
    marginHorizontal: 16,
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

  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#898996',
  },

  heartContainer: {
    marginHorizontal: 16,
  },

  txtHeart: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },

  spacing: {
    marginBottom: 10,
  },
});

export default History;