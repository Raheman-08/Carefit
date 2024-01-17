import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {avatar} from '../assets/image/avatar';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useState, useEffect} from 'react';
import {isToday} from 'date-fns';
import ProgressRing from '../components/ProgressRing';
import BottomDrawer from '../components/BottomDrawer';
// import ActivityCard from '../components/ActivityCard';
import InfoCard from '../components/InfoCard';
// import BottomDrawer from '../components/BottomDrawer';
import {useNavigation} from '@react-navigation/native';
import BottomBar from './Navigation/BottomBar';

export default function HomeScreen() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  // const [progress, setProgress] = useState(0.2);

  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [heading, setHeading] = useState('');
  // const [progress, setProgress] = useState("");

  const openBottomSheet = type => {
    // console.log(newprogress, "world")
    // setProgress(newprogress);
    setHeading(type);
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  const navigation = useNavigation();

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setSelectedDate(date);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.infoContainer}>
            <View>
              <Image source={avatar} />
            </View>
            <View>
              <Text style={styles.txtName}>Hello, Michael👋</Text>
              <Text style={styles.txtCalendar}>
                {selectedDate
                  ? isToday(selectedDate)
                    ? selectedDate.toLocaleDateString('en-US', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'long',
                      })
                    : selectedDate.toLocaleDateString('en-US', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'long',
                      })
                  : 'Select a date'}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.iconContainer}
            onPress={showDatePicker}>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <Icon name="calendar" style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.chartContainer}>
          <View>
            <ProgressRing
              progress={0.7}
              innerProgress={0.6}
              middleProgress={0.5}
            />
          </View>

          <View Style={styles.txtData}>
            <View>
              <View style={styles.txtIcon}>
                <FontAwesome5
                  name="fire"
                  style={{color: '#65CF58', fontSize: 18}}
                />
                <Text style={styles.msrType}>Calories Burn</Text>
              </View>

              <View style={styles.msrContainer}>
                <Text style={styles.measurement}>240</Text>
                <Text style={styles.unit}>kcal</Text>
              </View>
            </View>

            <View style={styles.spacing} />
            <View>
              <View style={styles.txtIcon}>
                <FontAwesome6
                  name="droplet"
                  style={{color: '#437EF0', fontSize: 18}}
                />
                <Text style={styles.msrType}>Oxygen</Text>
              </View>

              <View style={styles.msrContainer}>
                <Text style={styles.measurement}>120</Text>
                <Text style={styles.unit}>bpm</Text>
              </View>
            </View>

            <View style={styles.spacing} />

            <View>
              <View style={styles.txtIcon}>
                <FontAwesome6
                  name="heart-pulse"
                  style={{color: '#EB6260', fontSize: 18}}
                />
                <Text style={styles.msrType}>Heart Rate</Text>
              </View>

              <View style={styles.msrContainer}>
                <Text style={styles.measurement}>100</Text>
                <Text style={styles.unit}>sys</Text>
              </View>
            </View>
          </View>
        </View>

        {/* <View style={styles.mapContainer}>
        <Text style={styles.txtHeading}>Recent Activities</Text>
        <View style={styles.spacing} />
        <View style={styles.mapContent}>
          <ActivityCard name="Running" number="3.4" />
        </View>
      </View> */}

        <View style={styles.detailContainer}>
          <Text style={styles.txtHeading}>Today Information</Text>

          <View style={styles.cardContainer}>
            <InfoCard
              type="Calories"
              icon={
                <FontAwesome5
                  name="fire"
                  style={{fontSize: 24, color: '#F15223'}}
                />
              }
              measurement="620.84"
              unit="kcal"
              // onPress={() => navigation.navigate('CalorieDetail')}
              onPress={() => openBottomSheet('Calories Detail')}
            />

            <InfoCard
              type="Heart"
              icon={
                <FontAwesome6
                  name="heart-pulse"
                  style={{fontSize: 24, color: '#FF9416'}}
                />
              }
              measurement="74"
              unit="bpm"
              onPress={() => openBottomSheet('Heart Rate Details')}
            />
          </View>

          <View style={styles.secondContainer}>
            <InfoCard
              type="Stress"
              icon={
                <FontAwesome5
                  name="brain"
                  style={{fontSize: 24, color: '#5F9BF4'}}
                />
              }
              measurement="90"
              unit="stress level"
              onPress={() => openBottomSheet('Stress Level Details')}
            />

            <InfoCard
              type="Oxygen"
              icon={
                <FontAwesome6
                  name="droplet"
                  style={{fontSize: 24, color: '#4CB04C'}}
                />
              }
              measurement="620.84"
              unit="sp02"
              onPress={() => openBottomSheet('Oxygen Level Details')}
            />
          </View>
        </View>

        {/* <View>
          <BottomSheet
            visible={this.state.visible}
            onBackdropPress={() => this.setState({visible: false})}
            height={400}>
            <View style={styles.content}>
              <Text>This is the content of the bottom sheet!</Text>
            </View>
          </BottomSheet>
        </View> */}

        {/* <View>
          <Image source='.' />
        </View> */}

        

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <BottomDrawer
            isVisible={bottomSheetVisible}
            onClose={closeBottomSheet}
            heading={heading}
          />
        </View>        
      </ScrollView>
      <BottomBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerContainer: {
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  txtName: {
    fontSize: 14,
    fontWeight: '500',
    // marginBottom: 16,
    color: '#898996',
  },

  txtCalendar: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },

  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  iconContainer: {
    borderWidth: 1,
    borderColor: '#E6E6E8',
    borderRadius: 40,
  },

  icon: {
    fontSize: 24,
    padding: 16,
  },

  chartContainer: {
    marginTop: 25,
    marginHorizontal: 16,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },

  txtData: {
    flexDirection: 'column',
    // gap: 10,
    // justifyContent: 'space-between',
    paddingVertical: 10,
  },

  msrType: {
    fontSize: 18,
    color: '#898996',
  },

  measurement: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000',
  },

  spacing: {
    marginBottom: 20,
  },

  txtIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  unit: {
    fontSize: 18,
    color: '#898996',
  },

  msrContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },

  // mapContainer: {
  //   marginTop: 32,
  //   marginHorizontal: 16,
  // },

  txtHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },

  // mapContent: {
  //   padding: 16,
  //   backgroundColor: '#000',
  //   borderRadius: 16,
  // },

  detailContainer: {
    marginTop: 32,
    marginHorizontal: 16,
  },

  cardContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  secondContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
