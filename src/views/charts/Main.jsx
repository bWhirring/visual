import React from 'react'
import ReactEcharts from "echarts-for-react"
import { defaultColor, axisTick, axisLine, secordColor } from './config'
const option = {
  legend: {
    y: 'bottom',
    // left: '1%',
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {},
  dataset: {
    source: [
      ['product', '2015', '2016'],
      ['1月', 43.3, 85.8,],
      ['2月', 83.1, 73.4,],
      ['3月', 86.4, 65.2,],
      ['4月', 72.4, 53.9,],
      ['5月', 72.4, 53.9,],
      ['6月', 72.4, 53.9,],
      ['7月', 72.4, 53.9,],
      ['8月', 72.4, 53.9,],
      ['9月', 72.4, 53.9,],
      ['10月', 72.4, 53.9,],
      ['11月', 72.4, 53.9,],
      ['12月', 72.4, 53.9,],
    ]
  },
  xAxis: {
    type: 'category',
    axisTick,
    axisLine
  },
  yAxis: {
    axisTick,
    axisLine: {
      lineStyle: { color: '#999' }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#999'
      }
    }
  },
  series: [
    {
      type: 'bar',
      barGap: '0%',
      itemStyle: {
        normal: {
          color: defaultColor,
          lineStyle: {
            color: defaultColor
          }
        }
      }
    },
    {
      type: 'bar',
      barGap: '0%',
      itemStyle: {
        normal: {
          color: secordColor,
          lineStyle: {
            color: secordColor
          }
        }
      }
    },

  ]
}




export default function Main(props) {
  return <ReactEcharts
    style={{ width: '100%', height: '100%' }}
    option={option}
    notMerge={true}
    lazyUpdate={true}
    theme={"theme_name"}
  />
}