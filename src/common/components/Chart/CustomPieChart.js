import React from 'react';
import {View} from 'react-native';
import Svg, {Circle, G, Path, Text as SvgText} from 'react-native-svg';
import { Colors } from '../../res';
function CustomPieChart() {
  const rs = '\u20B9';
  const data = [
    {key: 'red', value: 160, color: Colors?.lightOrange, label: 'Sales'},
    {key: 'green', value: 240, color: Colors.lightGreen, label: 'Purchase'},
    {key: 'blue', value: 150, color: Colors.lightBlue, label: 'Expenses'},
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);
  let startAngle = 0;

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 50,
        marginTop: -40,
        marginBottom:20
      }}>
      <Svg width={250} height={250}>
        {data.map((item, index) => {
          const angle = (item.value / total) * 360;
          const endAngle = startAngle + angle;

          const path = `
            M150,150
            L${150 + Math.cos(startAngle * (Math.PI / 180)) * 100},${
            150 + Math.sin(startAngle * (Math.PI / 180)) * 100
          }
            A100,100 0 ${angle > 180 ? 1 : 0},1
            ${150 + Math.cos(endAngle * (Math.PI / 180)) * 100},${
            150 + Math.sin(endAngle * (Math.PI / 180)) * 100
          }
            Z
          `;

          // Calculate the position of the label
          const labelAngle = startAngle + angle / 2;
          const labelRadius = 75; // Adjust as needed
          const labelX =
            150 + Math.cos(labelAngle * (Math.PI / 180)) * labelRadius;
          const labelY =
            150 + Math.sin(labelAngle * (Math.PI / 180)) * labelRadius;

          startAngle = endAngle;

          return (
            <G key={item.key}>
              <Path d={path} fill={item.color} />
              <SvgText fill="#000" fontSize="16" textAnchor="middle">
                <SvgText x={labelX} y={labelY - 10} style={{fontSize: 15, color: '#898e8c'}}>
                  {item.label}
                </SvgText>
                <SvgText
                  x={labelX}
                  y={labelY + 10}
                  style={{fontSize: 15, color: '#898e8c'}}>
                 {rs+item.value}
                  
                </SvgText>
              </SvgText>
            </G>
          );
        })}
        {/* Center Circle */}
        <Circle cx="150" cy="150" r="45" fill="#fff" />
        {/* Center Text */}
        <SvgText x="150" y="145" fill="#000" fontSize="16" textAnchor="middle">
          Profit
        </SvgText>
        <SvgText x="150" y="170" fill="#000" fontSize="16" textAnchor="middle">
          {`${rs} 230`}
        </SvgText>
      </Svg>
    </View>
  );
}

export default CustomPieChart;
