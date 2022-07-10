import React, { memo } from "react";

import style from "./style.module.less";

const Logo = memo((props) => {

  const {logoClick=()=>console.log('iMusic')} = props

  return (
    <div className={style.header} style={{height: props?.height ? props.height : "90px"}}>
      <img src="/src/assets/images/logod.jpg" draggable={false} alt="logo" onClick={logoClick} />
    </div>
  );
});

export default Logo;
