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
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useState, useEffect} from 'react';
import {isToday} from 'date-fns';
import ProgressRing from '../components/ProgressRing';
import BottomDrawer from '../components/BottomDrawer';
// import ActivityCard from '../components/ActivityCard';
import InfoCard from '../components/InfoCard';
// import BottomDrawer from '../components/BottomDrawer';
import {useNavigation} from '@react-navigation/native';
import AppleHealthKit from 'react-native-health';
// import appleHealthKit, {} from 'react-native-health';
import BottomBar from './Navigation/BottomBar';
import {HomeTabNavigator} from '../../App';

// const permissions = HealthKitPermissions();

const permissions = {
  permissions: {
    read: [
      AppleHealthKit.Constants.Permissions.HeartRate,
      AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
      AppleHealthKit.Constants.Permissions.OxygenSaturation,
      AppleHealthKit.Constants.Permissions.StepCount,
      AppleHealthKit.Constants.Permissions.Steps,
    ],
    write: [
      AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
      AppleHealthKit.Constants.Permissions.OxygenSaturation,
      AppleHealthKit.Constants.Permissions.StepCount,
      AppleHealthKit.Constants.Permissions.Steps,
    ],
  },
};

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

  // AppleHealthKit.initHealthKit();
  // useEffect(() => {
  //   AppleHealthKit.initHealthKit(permissions, (error) => {
  //     if (error) {
  //       console.log('[ERROR] Cannot grant permissions!');
  //     } else {
  //       console.log('HealthKit initialized successfully!');
  //     }
  //   });
  // }, []);

  const HEART_RATE = 220;
  const CALORIES_BURN = 2500;
  const OXYGEN_LEVEL = 100 / 100;
  const STEP_COUNT = 10_000;

  const [hasPermissions, setHasPermissions] = useState(false);
  // const [steps, setSteps] = useState(0)
  const [heartRate, setHeartRate] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [oxygenLevel, setOxygenLevel] = useState(0);
  const [stepCount, setStepCount] = useState(0);

  const heartMeasure = heartRate.toFixed();
  const oxygenMeasure = Math.round(oxygenLevel * 100);
  const calorieMeasure = Math.round(caloriesBurned.toString());
  const stepMeasure = Math.round(stepCount.toString());

  let today = new Date();
let startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6, 0, 0); // Set start time to 6:00 AM

  useEffect(() => {
    AppleHealthKit.initHealthKit(permissions, error => {
      if (error) {
        console.log('[ERROR] Cannot grant permissions!');
      }

      setHasPermissions(true);
    });
  }, []);

  useEffect(() => {
    if (!hasPermissions) {
      return;
    }

    let options = {
      unit: 'bpm', // optional; default 'bpm'
      startDate: new Date(2018, 10, 1).toISOString(), // required
      endDate: new Date().toISOString(), // optional; default now
      ascending: false, // optional; default false
      limit: 1, // optional; default no limit
    };

    AppleHealthKit.getHeartRateSamples(options, (err, results) => {
      if (err) {
        console.log('Error fetching heart rate data: ', err);
        return;
      }

      if (results && results.length > 0) {
        console.log('Heart rate fetched successfully: ', results[0].value);
        setHeartRate(results[0].value);
      } else {
        console.log('No heart rate data found');
      }
    });

    // Calories Burn
    const optionsCalories = {
      // startDate: new Date(2021, 0, 0).toISOString(), // required
      // endDate: new Date().toISOString(), // optional; default now
      value: 2000,
      startDate: new Date(2016, 6, 2, 6, 0, 0).toISOString(),
      endDate: new Date(2023, 6, 2, 6, 30, 0).toISOString(),
      ascending: true, // optional
      includeManuallyAdded: true, // optional
    };

    AppleHealthKit.getActiveEnergyBurned(optionsCalories, (err, results) => {
      if (err) {
        console.log('Error fetching calorie data: ', err);
        return;
      }

      if (results && results.length > 0) {
        console.log('Calorie data fetched successfully: ', results[0].value);
        setCaloriesBurned(results[0].value);
        // Assuming results[0].value contains the calorie data
        // Handle the calorie data as needed, e.g., set state
      } else {
        console.log('No calorie data found');
      }
    });

    //Oxygen Level

    let optionsOxygen = {
      startDate: new Date(2021, 1, 1).toISOString(), // required
      endDate: new Date().toISOString(), // optional; default now
      ascending: false, // optional; default false
      limit: 10, // optional; default no limit
    };

    AppleHealthKit.getOxygenSaturationSamples(optionsOxygen, (err, results) => {
      if (err) {
        console.log('Error fetching oxygen level: ', err);
        return;
      }

      if (results && results.length > 0) {
        console.log('Oxygen Level fetched successfully: ', results[0].value);
        setOxygenLevel(results[0].value);
        // Assuming results[0].value contains the calorie data
        // Handle the calorie data as needed, e.g., set state
      } else {
        console.log('No oxygen level found');
      }
    });

    //Step Count

    let optionsSteps = {
      // startDate: (new Date(2024,2,11)).toISOString(), // required
      // endDate:   (new Date()).toISOString() // optional; default now
      value: 100,
      startDate: new Date(2016, 6, 2, 6, 0, 0).toISOString(),
      endDate: new Date(2023, 6, 2, 6, 30, 0).toISOString(),
    };
    
    AppleHealthKit.getDailyStepCountSamples(optionsSteps, (err, results) => {
      if (err) {
        console.log('Error fetching step counts: ', err);
        return;
      }
    
      if (results && results.length > 0) {
        console.log('Step count fetched successfully: ', results[0].value);
        setStepCount(results[0].value);
      } else {
        console.log('No step count found');
      }
    });
  }, [hasPermissions]);

  return (
    <SafeAreaView style={styles.container}>
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

        <TouchableOpacity style={styles.iconContainer} onPress={showDatePicker}>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <Icon name="calendar" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.chartContainer}>
          <View>
            <ProgressRing
              progress={caloriesBurned / CALORIES_BURN}
              innerProgress={heartRate / HEART_RATE}
              middleProgress={oxygenLevel * OXYGEN_LEVEL}
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
                <Text style={styles.measurement}>
                  {caloriesBurned.toString()}
                </Text>
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
                <Text style={styles.measurement}>
                  {Math.round(oxygenLevel * 100)}%
                </Text>
                <Text style={styles.unit}>SpO2</Text>
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
                <Text style={styles.measurement}>{heartRate.toFixed()}</Text>
                <Text style={styles.unit}>BPM</Text>
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
              measurement={calorieMeasure}
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
              measurement={heartMeasure}
              unit="bpm"
              onPress={() => openBottomSheet('Heart Rate Details')}
            />
          </View>

          <View style={styles.secondContainer}>
            <InfoCard
              type="Steps"
              icon={
                <Ionicons
                  name="footsteps"
                  style={{fontSize: 24, color: '#5F9BF4'}}
                />
              }
              measurement={stepMeasure}
              unit="Steps Count"
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
              measurement={oxygenMeasure}
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
