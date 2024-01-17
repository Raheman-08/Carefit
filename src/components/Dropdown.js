import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, AppRegistry} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [{Show: 'Daily'}, {Show: 'Weekly'}, {Show: 'Monthly'}];

const Dropdown = () => {
  const [selectedType, setSelectedType] = useState('Select');
  const [isClicked, setIsClicked] = useState(false);

  return (
    <View>
      <Text style={styles.label}>Show As</Text>
      <TouchableOpacity
        style={styles.dropdownSelector}
        onPress={() => {
          setIsClicked(!isClicked);
        }}>
        <Text>{selectedType}</Text>
        {isClicked ? (
          <Ionicons
            name="chevron-up-outline"
            style={{color: '#000', fontSize: 20, fontWeight: 'normal'}}
          />
        ) : (
          <Ionicons
            name="chevron-down-outline"
            style={{color: '#000', fontSize: 20, fontWeight: 'normal'}}
          />
        )}
      </TouchableOpacity>
      {isClicked ? (
        <View style={styles.dropdownArea}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={styles.dataItem}
                onPress={() => {
                  setSelectedType(item.Show);
                  setIsClicked(!isClicked);
                }}>
                <Text>{item.Show}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#898996',
  },

  dropdownSelector: {
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#E6E6E8',
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    height: 53,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },

  dropdownArea: {
    height: 150,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#898996',
    marginTop: 20,
  },

  dataItem: {
    width: '100%',
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#E6E6E8',
    justifyContent: 'center', // Center the Text vertically
    paddingLeft: 15,
  },
});

export default Dropdown;
