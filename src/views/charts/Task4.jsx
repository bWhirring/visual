import React from 'react'
import ReactEcharts from "echarts-for-react"
import { defaultColor, axisLine, axisTick } from './config'

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
        barBorderRadius: 10,
        lineStyle: {
          color: defaultColor
        }
      }
    }
  }],
  tooltip: {
    show: true,
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      color: defaultColor,
      label: {
        backgroundColor: defaultColor
      }
    },
    formatter: function (params) {
      var result = ''
      var dotHtml = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#006EFF"></span>'
      params.forEach(function (item) {
        result += item.axisValue + "</br>" + dotHtml + item.data
      })
      return result
    }
  },
}

export default function Task4(props) {
  return <ReactEcharts
    style={{ width: '100%', height: '100%' }}
    option={option}
    notMerge={true}
    lazyUpdate={true}
    theme={"theme_name"}
  />
}

