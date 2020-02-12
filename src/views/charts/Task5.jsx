import React from 'react'
import ReactEcharts from "echarts-for-react"
import { defaultColor, axisLine, axisTick, secordColor } from './config'

const option = {
  grid: { top: 20, },
  xAxis: {
    type: 'category',
    data: ['任务1', '任务2', '任务3', '任务4',],
    axisTick,
    axisLine
  },
  yAxis: {
    type: 'value',
    axisLine,
    axisTick,
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        color: '#999'
      }
    }
  },
  series: [{
    data: [20, 40, 33, 22],
    type: 'line',
    areaStyle: {
      color: defaultColor,
      opacity: 0.2
    },
    itemStyle: {
      normal: {
        color: defaultColor,
        lineStyle: {
          color: defaultColor
        }
      }
    }
  }],
  tooltip: {
    show: true,
    axisPointer: {
      color: defaultColor,
      label: {
        backgroundColor: defaultColor
      }
    },
  },
}

export default function Task5(props) {
  return <ReactEcharts
    style={{ width: '100%', height: '100%' }}
    option={option}
    notMerge={true}
    lazyUpdate={true}
    theme={"theme_name"}
  />
}

