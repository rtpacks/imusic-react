import React, { memo } from 'react'


import Header from '../../common/Header'
import style from './style.module.less'

const IHeader = memo(() => {
  return (
    <div className={style['i-header']}>
      <Header></Header>
    </div>
  )
})

export default IHeader