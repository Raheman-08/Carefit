import React from 'react';
import {View} from 'react-native';
import {BarChart, Grid, YAxis, XAxis} from 'react-native-svg-charts';

class HistoryChart extends React.PureComponent {
  render() {
    const fill = 'rgb(134, 65, 244)';
    const { data }  = this.props;
    const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const contentInset = {top: 10, bottom: 30, left: 10, right: 10};
    const yMax = 1000; // Maximum value on the y-axis

    return (
      <View style={{flexDirection: 'column', height: 300, paddingVertical: 16}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <YAxis
            data={data}
            contentInset={contentInset}
            svg={{
              fill: 'grey',
              fontSize: 10,
            }}
            numberOfTicks={10}
            formatLabel={value => `${value}`}
            yMax={yMax}
          />
          <View style={{flex: 1, marginLeft: 8}}>
            <BarChart
              style={{flex: 1}}
              data={data}
              svg={{fill}}
              contentInset={contentInset}
              yMax={yMax}
              spacingInner={0.2} // Adjust spacing between bars within the same group
              spacingOuter={0} // Adjust spacing between groups of bars
              gridMin={0} // Set the minimum value for the y-axis
            >
              <Grid />
            </BarChart>
            <XAxis
              style={{marginHorizontal: -10, height: 30}}
              data={data}
              formatLabel={(value, index) => weeks[index]}
              contentInset={{left: 35, right: 35}}
              svg={{fontSize: 10, fill: 'black'}}
              spacingInner={0.2}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default HistoryChart;
