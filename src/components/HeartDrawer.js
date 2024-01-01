// BottomSheet.js
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import {Dimensions} from 'react-native';
import Chart from './Chart';
import DataList from './DataList';


const HeartDrawer = ({isVisible, onClose}) => {
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
          <Text style={styles.txtHeader}>Heart Detail</Text>

          <View style={styles.chartContainer}>
            <Chart />
          </View>

          {/* <Text style={styles.dataHeader}>Information</Text>

          <ScrollView style={styles.scrollContainer}>
            <View style={styles.dataContainer}>
              <DataList time="1 hour ago" measuremnt="50" unit="kcal" />
              <DataList time="1 hour ago" measuremnt="50" unit="kcal" />
              <DataList time="1 hour ago" measuremnt="50" unit="kcal" />
              <DataList time="1 hour ago" measuremnt="50" unit="kcal" />
            </View>
          </ScrollView> */}
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
    height: '50%',
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
    marginTop: 5,
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

export default HeartDrawer;
