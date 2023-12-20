import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ActivityCard = ({name, number}) => {
  return (
    <View style={styles.container}>
      <View style={styles.txtHeader}>
        <FontAwesome5 name="running" style={{color: '#F57B36', fontSize: 24}} />
        <Text style={styles.typeText}>{name}</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.lastText}>Last Activity</Text>
        <Text style={styles.measurement}>{number} Km</Text>
      </View>

      <View style={styles.txtTime}>
        <Text style={styles.lastText}>2 min ago</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 16,
    width: 180,
    height: 180,
    borderRadius: 16,
    borderWidth: 1,
  },

  txtHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  typeText: {
    fontSize: 20,
    color: '#898996',
    fontWeight: '600',
  },

  lastText: {
    fontSize: 18,
    color: '#898996',
  },

  bottomContainer: {
    marginTop: 38,
    marginTop: Platform.OS === 'android' ? 25 : 20,
  },

  measurement: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000',
  },

  txtTime: {
    marginTop: 5,
  },
});

export default ActivityCard;
