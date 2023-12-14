import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const WatchList = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.watchName}>{text}</Text>

      <TouchableOpacity>
        <Text style={styles.txtConnect}>Connect</Text>
      </TouchableOpacity>
    </View>

    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E6E6E8',
    padding: 20,
    borderRadius: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },


  txtConnect: {
    color: '#F57B36',
  },
  
});

export default WatchList;
