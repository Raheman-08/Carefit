// import React from 'react';
// import { View, StyleSheet, Dimensions } from 'react-native';
// import { BarChart } from 'react-native-chart-kit';

// const Chart = () => {
//   const data = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
//     datasets: [
//       {
//         data: [50, 30, 40, 60, 20, 70],
//         colors: [
//           (opacity = 1) => `rgba(255, 165, 0, ${opacity})`, // Orange color
//           (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Lower part color
//           (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Upper part color
//         ],
//       },
//     ],
//   };

//   const chartConfig = {
//     backgroundGradientFrom: '#fff',
//     backgroundGradientTo: '#fff',
//     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     // strokeWidth: 2,
//   };

//   return (
//     <View style={styles.container}>
//       <BarChart
//         data={data}
//         width={Dimensions.get('window').width - 52} // Adjust width based on your needs
//         height={300}
//         chartConfig={chartConfig}
//         style={styles.chart}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 8,
//     marginHorizontal: 16,
//   },
//   chart: {
//     marginVertical: 16,
//     borderRadius: 16,

//   },
// });

// export default Chart;

import React from 'react';
import { View, Text } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import Svg, { Text as SvgText } from 'react-native-svg';

const Chart = ({ progress, innerProgress, middleProgress, text, additionalText }) => {
  const ringSize = 200;
  const strokeWidth = 15; // Adjust the thickness of the ring
  const greyColor = '#F2F2F2';

  return (
    <View style={{ height: ringSize, width: ringSize }}>
      {/* Background circle */}
      <ProgressCircle
        style={{ height: ringSize, width: ringSize }}
        progress={1}
        progressColor={greyColor}
        backgroundColor={'rgba(0, 0, 0, 0)'}
        strokeWidth={strokeWidth}
      />

      {/* Progress circle */}
      <ProgressCircle
        style={{ height: ringSize, width: ringSize, position: 'absolute' }}
        progress={progress}
        progressColor={'#65CF58'} // Adjust color for the progress ring
        backgroundColor={'rgba(0, 0, 0, 0)'}
        strokeWidth={strokeWidth}
      />

      {/* Inner text */}
      <Svg
        height={ringSize}
        width={ringSize}
        style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center' }}
      >
        <SvgText
          x={ringSize / 2}
          y={ringSize / 2 - 10} // Adjust the vertical position of the first text
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={40}
          fill="black"
          fontWeight='600'
        >
          {text}
        </SvgText>

        {/* Second text below the first text */}
        <SvgText
          x={ringSize / 2}
          y={ringSize / 2 + 20} // MarginTop of 10 from the first text
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={20} // Adjust the font size of the second text
          fill="black"
          
        >
          {additionalText}
        </SvgText>
      </Svg>
    </View>
  );
};

export default Chart;

// import React, { useState, useRef } from 'react';
// import { View, StyleSheet, Dimensions, Text, Animated } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';

// const Chart = () => {
//   const screenWidth = Dimensions.get('window').width;
//   const chartWidth = screenWidth - 32; // Subtracting 16 from both sides for spacing

//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const [selectedData, setSelectedData] = useState(null);

//   const data = {
//     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     datasets: [
//       {
//         data: [100, 250, 400, 550, 700, 850, 1000, 2000], // Adjust data values accordingly
//       },
//     ],
//   };

//   const handleDotPress = (value, index) => {
//     // You can customize the label based on your data structure
//     const label = `Data: ${value}, Date: ${data.labels[index]}`;
//     setSelectedData(label);

//     // Animate the label fade-in
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();

//     // Automatically hide the label after a certain duration (e.g., 3 seconds)
//     setTimeout(() => {
//       Animated.timing(fadeAnim, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//       setSelectedData(null);
//     }, 3000);
//   };

//   return (
//     <View style={styles.container}>
//       <LineChart
//         data={data}
//         width={chartWidth}
//         height={300}
//         yAxisInterval={10} // Set the interval based on your data range
//         chartConfig={{
//           backgroundGradientFrom: '#fff',
//           backgroundGradientTo: '#fff',
//           color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           style: {
//             borderRadius: 16,
//           },
//           propsForDots: {
//             r: '6',
//             strokeWidth: '2',
//             stroke: '#ffa726',
//             onPress: (value, index) => handleDotPress(value, index),
//           },
//           yAxis: {
//             labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//             stepSize: 200,
//             min: 100,
//             max: 1000,
//           },
//         }}
//         bezier
//         style={styles.chart}
//       />
//       {selectedData && (
//         <Animated.View style={[styles.labelContainer, { opacity: fadeAnim }]}>
//           <Text style={styles.labelText}>{selectedData}</Text>
//         </Animated.View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 20,
//   },
//   chart: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
//   labelContainer: {
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     padding: 10,
//     borderRadius: 8,
//     position: 'absolute',
//     bottom: 16,
//     alignSelf: 'center',
//   },
//   labelText: {
//     color: '#333',
//     fontSize: 16,
//   },
// });

// export default Chart;

