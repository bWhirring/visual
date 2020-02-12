import React from 'react'
import ReactEcharts from "echarts-for-react"
import { defaultColor, secordColor, axisLine, axisTick } from './config'

const itemStyle = {
  normal: {
    color: defaultColor,
    lineStyle: {
      color: defaultColor
    }
  }
}

const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  xAxis: {
    type: 'category',
    axisLine,
    axisTick,
    data: ['机器1', '机器2', '机器3', '机器4', '机器5', '机器6', '机器7'],
  },
  yAxis: {
    type: 'value',
    axisLine,
    axisTick,
  },
  series: [
    {
      name: '访问数',
      type: 'bar',
      data: [320, 332, 301, 334, 390, 330, 320],
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
      name: '连接数',
      type: 'bar',
      stack: '广告',
      data: [120, 132, 101, 134, 90, 230, 210],
      itemStyle: {
        normal: {
          color: secordColor,
          lineStyle: {
            color: secordColor
          }
        }
      }
    },
    // {
    //   name: '联盟广告',
    //   type: 'bar',
    //   stack: '广告',
    //   data: [220, 182, 191, 234, 290, 330, 310]
    // },
    // {
    //   name: '视频广告',
    //   type: 'bar',
    //   stack: '广告',
    //   data: [150, 232, 201, 154, 190, 330, 410]
    // },
    {
      name: '111',
      type: 'bar',
      stack: '搜索引擎',
      data: [620, 732, 701, 734, 1090, 1130, 1120],
      itemStyle: {
        normal: {
          color: "#0e62d2",
          lineStyle: {
            color: "#0e62d2"
          }
        }
      }
    },
    {
      name: '222',
      type: 'bar',
      stack: '搜索引擎',
      data: [120, 132, 101, 134, 290, 230, 220],
      itemStyle: {
        normal: {
          color: "#1d63bf",
          lineStyle: {
            color: "#1d63bf"
          }
        }
      }
    },
    {
      name: '222',
      type: 'bar',
      stack: '搜索引擎',
      data: [120, 132, 101, 134, 290, 230, 220],
      itemStyle: {
        normal: {
          color: "#17aab9",
          lineStyle: {
            color: "#17aab9"
          }
        }
      }
    },
    {
      name: '333',
      type: 'bar',
      stack: '搜索引擎',
      data: [60, 72, 71, 74, 190, 130, 110],
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



export default function Task2(props) {
  return <ReactEcharts
    style={{ width: '100%', height: '100%' }}
    option={option}
    notMerge={true}
    lazyUpdate={true}
    theme={"theme_name"}
  />
}