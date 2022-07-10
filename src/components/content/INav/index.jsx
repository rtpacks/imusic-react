import React, { Fragment, memo } from 'react'

import Logo from '../../common/Logo'
import Slide from '../../common/Slide'

import style from './style.module.less'

const INav = memo(() => {
  
  return (
    <div className={style['i-nav']}>
      <Logo height="90px" logoClick={e => {console.log('执行')}}></Logo>
      {/* 注意：使用calc一定要有父高度，可以写成百分比但是一定要有父高度 */}
      <Slide height="calc(100% - 90px)"></Slide>
    </div>
  )
})

export default INav