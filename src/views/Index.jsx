import React from 'react'

import Task from './charts/Task'
import Task2 from './charts/Task2'
import Task3 from './charts/Task3'
import Task4 from './charts/Task4'
import Task5 from './charts/Task5'
import Memory from './charts/Memory'
import Cpu from './charts/Cpu'
import Main from './charts/Main'

export default function Index() {
  return (
    <>
      <div className="header">
        <h1 className="header-title">大屏数据可视化</h1>
      </div>
      <div className="wrapper">
        <div className="content">
          <div className="col col-l">
            <div className="xpanel-wrapper xpanel-wrapper-50">
              <div className="xpanel xpanel-l-t">
                <div className="title">任务总量</div>
                <Task />
              </div>
            </div>
            <div className="xpanel-wrapper xpanel-wrapper-50">
              <div className="xpanel xpanel-l-b">
                <div className="title">存储容量</div>
                <Memory />
              </div>
            </div>
          </div>
          <div className="col col-c">
            <div className="xpanel-wrapper xpanel-wrapper-40">
              <div className="xpanel no-bg"><Main /></div>
            </div>
            <div className="xpanel-wrapper xpanel-wrapper-60">
              <div className="xpanel xpanel-c-b">
                <div className="title title-long">任务2</div>
                <Task2 />
              </div>
            </div>
          </div>
          <div className="col col-r">
            <div className="xpanel-wrapper xpanel-wrapper-25">
              <div className="xpanel xpanel-r-t">
                <div className="title">任务3</div>
                <Task5 />
              </div>
            </div>
            <div className="xpanel-wrapper xpanel-wrapper-40">
              <div className="xpanel xpanel-r-m" style={{ paddingBottom: 40 }}>
                <div className="title">任务4</div>
                <Cpu />
              </div>
            </div>
            <div className="xpanel-wrapper xpanel-wrapper-35">
              <div className="xpanel xpanel-r-b">
                <div className="title">任务5</div>
                <Task3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
