// BottomSheet.js
import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView, ProgressBarAndroid} from 'react-native';
import Modal from 'react-native-modal';
import {Dimensions} from 'react-native';
import Chart from './Chart';
import DataList from './DataList';


const BottomDrawer = ({isVisible, onClose, heading}) => {

  // const [progress, setProgress] = useState("");

  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onClose}
      swipeDirection={['down']}
      onBackdropPress={onClose}
      style={{justifyContent: 'flex-end', margin: 0}}
      deviceWidth={Dimensions.get('window').width}
      deviceHeight={Dimensions.get('window').height}>
      <View style={styles.modal}>
        <View style={styles.header}>
          <Text style={styles.txtHeader}>{heading}</Text>

          <View style={styles.chartContainer}>
            <Chart text="240" additionalText="kcal" progress='0.5' />
          </View>

          <Text style={styles.dataHeader}>Information</Text>

          <ScrollView style={styles.scrollContainer}>
            <View style={styles.dataContainer}>
              <DataList time="Sunday" measuremnt="50" unit="kcal" />
              <DataList time="Monday" measuremnt="50" unit="kcal" />
              <DataList time="Tuesday" measuremnt="50" unit="kcal" />
              <DataList time="Wednesday" measuremnt="50" unit="kcal" />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: '90%',
  },

  header: {
    flexDirection: 'column',
  },

  txtHeader: {
    fontSize: 25,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 15,
  },

  chartContainer: {
    marginTop: 40,
    alignItems: 'center',
  },

  dataHeader: {
    fontSize: 21,
    color: "#000",
    fontWeight: 'bold',
    marginTop: 20 
  },

  // scrollContainer: {
  //   flex: 1,
  // },


});

export default BottomDrawer;
