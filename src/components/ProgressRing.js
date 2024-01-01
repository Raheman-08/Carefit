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