import React from 'react'
import ReactEcharts from "echarts-for-react"

const defaultColor = '#006EFF'
const option = {
  grid: {
    top: 20,
    bottom: 40
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      hoverAnimation: false,
      label: {
        normal: {
          show: true,
          // position: 'center',
          formatter: function (params) {
            return params.data.value
          }
        },
      },
      labelLine: {
        normal: {
          show: true
        }
      },
      data: [
        { value: 70, name: '使用', itemStyle: { color: defaultColor } },
        { value: 30, name: '未使用', itemStyle: { color: '#00C8DC' } },
      ]
    }
  ]
}



export default function Cpu(props) {
  return <ReactEcharts
    style={{ width: '100%', height: '100%' }}
    option={option}
    notMerge={true}
    lazyUpdate={true}
    theme={"theme_name"}
  />
}