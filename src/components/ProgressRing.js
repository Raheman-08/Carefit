// import {ProgressChart} from 'react-native-chart-kit';
// import {View, Text, Dimensions} from 'react-native';

// const screenWidth = Dimensions.get('window').width;
// const data = {
//   labels: ['Swim', 'Bike', 'Run'], // optional
//   data: [0.4, 0.6, 0.8],
// };
// // const chartConfig = {};

// const ProgressRing = () => {
//   return (
//     <View>
//       <ProgressChart
//         data={data}
//         width={screenWidth}
//         height={220}
//         strokeWidth={16}
//         radius={32}
//         chartConfig={{
//           backgroundColor: 'rgba(0, 0, 0, 0)', // Set to "transparent" or undefined
//           backgroundGradientFrom: "#fff",
//           backgroundGradientTo: "#e2e2e2",
//           decimalPlaces: 2, // optional, defaults to 2dp
//           color: (opacity = 1) => `rgba(13, 136, 56, ${opacity})`,
//           labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           style: {
//             borderRadius: 16,
//           },
//           propsForDots: {
//             r: "6",
//             strokeWidth: "2",
//             stroke: "#218838",
//           },
//         }}
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//         hideLegend={false}
//       />
//     </View>
//   );
// };

// export default ProgressRing;

import React from 'react';
import { View } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';

const ProgressRing = ({ progress, innerProgress, middleProgress }) => {
  const ringSize = 200;
  const strokeWidth = 15; // Adjust the thickness of the rings
  const gapSize = 10; // Adjust the size of the gap between the rings
  const greyColor = '#F2F2F2';

  return (
    <View style={{ height: ringSize, width: ringSize }}>
      {/* Outer ring with grey background */}
      <ProgressCircle
        style={{ height: ringSize, width: ringSize, position: 'absolute' }}
        progress={1}
        progressColor={greyColor}
        backgroundColor={'rgba(0, 0, 0, 0)'}
        strokeWidth={strokeWidth}
      />
      {/* Outer ring with progress */}
      <ProgressCircle
        style={{ height: ringSize, width: ringSize }}
        progress={progress}
        progressColor={'#65CF58'} // Adjust color for the outer ring
        backgroundColor={'rgba(0, 0, 0, 0)'}
        strokeWidth={strokeWidth}
      />
      {/* Middle ring with grey background */}
      <ProgressCircle
        style={{
          position: 'absolute',
          top: strokeWidth + gapSize,
          left: strokeWidth + gapSize,
          height: ringSize - (strokeWidth + gapSize) * 2,
          width: ringSize - (strokeWidth + gapSize) * 2,
        }}
        progress={1}
        progressColor={greyColor}
        backgroundColor={'rgba(0, 0, 0, 0)'}
        strokeWidth={strokeWidth}
      />
      {/* Middle ring with progress */}
      <ProgressCircle
        style={{
          position: 'absolute',
          top: strokeWidth + gapSize,
          left: strokeWidth + gapSize,
          height: ringSize - (strokeWidth + gapSize) * 2,
          width: ringSize - (strokeWidth + gapSize) * 2,
        }}
        progress={middleProgress}
        progressColor={'#437EF0'} // Adjust color for the middle ring
        backgroundColor={'rgba(0, 0, 0, 0)'}
        strokeWidth={strokeWidth}
      />
      {/* Inner ring with grey background */}
      <ProgressCircle
        style={{
          position: 'absolute',
          top: (strokeWidth + gapSize) * 2,
          left: (strokeWidth + gapSize) * 2,
          height: ringSize - (strokeWidth + gapSize) * 4,
          width: ringSize - (strokeWidth + gapSize) * 4,
        }}
        progress={1}
        progressColor={greyColor}
        backgroundColor={'rgba(0, 0, 0, 0)'}
        strokeWidth={strokeWidth}
      />
      {/* Inner ring with progress */}
      <ProgressCircle
        style={{
          position: 'absolute',
          top: (strokeWidth + gapSize) * 2,
          left: (strokeWidth + gapSize) * 2,
          height: ringSize - (strokeWidth + gapSize) * 4,
          width: ringSize - (strokeWidth + gapSize) * 4,
        }}
        progress={innerProgress}
        progressColor={'#EB6260'} // Adjust color for the inner ring
        backgroundColor={'rgba(0, 0, 0, 0)'}
        strokeWidth={strokeWidth}
      />
    </View>
  );
};

export default ProgressRing;


