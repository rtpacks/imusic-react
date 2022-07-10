import React, { memo } from "react";

import { Input, Avatar } from "antd";
const { Search } = Input;
import { UserOutlined } from "@ant-design/icons";

import IconFont from "../IconFont";
import style from "./style.module.less";

const Header = memo((props) => {
  const { placeholder = "所思所想~" } = props;

  const onSearch = (e) => {
    console.log(e);
  };

  return (
    <div className={style["header"]}>
      <Search
        placeholder={placeholder}
        // allowClear
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
      <div style={{display: "flex", 'align-items': "center", userSelect: "none"}}>
        <Avatar
          size="small"
          icon={<UserOutlined />}
          /* src指定图像地址 */
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F09%2F20210709142454_dc8dc.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660013491&t=2f80e0fbe537783d09d1de6c045fc65d"
        />
        <IconFont
          fontSize="16px"
          color="#777"
          type="icon-hanbaobao"
          style={{ "margin": "0 -18px 0 18px"}}
        />
      </div>
    </div>
  );
});

export default Header;
