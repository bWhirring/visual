import React from 'react'
import ReactEcharts from "echarts-for-react"
import { defaultColor, secordColor } from './config'

const option = {
  title: {
    // text: '基础雷达图'
  },
  tooltip: {},
  radar: {
    name: {
      textStyle: {
        color: '#fff',
        borderRadius: 3,
        padding: [3, 5]
      }
    },
    indicator: [
      { name: '指标1', max: 6500 },
      { name: '指标2', max: 16000 },
      { name: '指标3', max: 30000 },
      { name: '指标4', max: 38000 },
      { name: '指标5', max: 52000 },
      { name: '指标6', max: 25000 }
    ],
    splitArea: {
      show: true,
      areaStyle: {
        color: ['transparent', 'transparent']
        // 图表背景网格的颜色
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        width: 1,
        color: ['#999', '#333'],
        // 图表背景网格线的颜色
      }
    }
  },
  series: [{
    name: '预算 vs 开销（Budget vs spending）',
    type: 'radar',
    data: [
      {
        value: [4300, 10000, 28000, 35000, 50000, 19000],
        name: '任务1',
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
        value: [5000, 14000, 28000, 31000, 42000, 21000],
        name: '任务2',
        itemStyle: {
          normal: {
            color: secordColor,
            lineStyle: {
              color: secordColor,
            }
          }
        }
      }
    ]
  }]
}


export default function Task2(props) {
  return <ReactEcharts
    style={{ width: '100%', height: '100%' }}
    option={option}
    notMerge={true}
    lazyUpdate={true}
    theme={"theme_name"}
  />
}