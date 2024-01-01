import {View, Text, StyleSheet, Pressable} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const InfoCard = ({type, measurement, unit, icon, onPress}) => {
  return (
    <Pressable style={styles.cardContainer} onPress={onPress}>
      <View style={styles.headerContainer}>
        <Text style={styles.typeText}>{type}</Text>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
      </View>

      <View style={styles.msrmntContainer}>
        <Text style={styles.numberText}>{measurement}</Text>
        <Text style={styles.txtUnit}>{unit}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    padding: 18,
    borderRadius: 18,
    flexDirection: 'column',
    width: 175,
    borderColor: '#E6E6E8',
    ...(Platform.OS === 'android' && {
        width: 185,
      }),
  },

  headerContainer: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  typeText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000'
  },

  icon: {
    fontSize: 24,
    color: '#F15223'
  },

  msrmntContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 60
  },

  numberText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000'
  },

  txtUnit: {
    fontSize: 18,
    color: '#898996'
  },
});

export default InfoCard;
