import React, { memo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu } from "antd";

import IconFont from "@/components/common/IconFont";
import style from "./style.module.less";

function getItem(key, label, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

/* 歌单 */
const playlist = [
  /* 创建的歌单 */
  getItem("创建的歌单", "创建的歌单", null, [
    getItem("亭台", "亭台"),
    getItem("Download", "Download"),
    getItem("古风调", "古风调"),
    getItem("音乐课", "音乐课"),
  ]),
  /* 收藏的歌单 */
  getItem("收藏的歌单", "收藏的歌单", null, [
    // getItem("国风精选篇", "国风精选篇"),
    // getItem("国语 | 听着歌", "国语 | 听着歌"),
  ]),
];

const Slide = memo((props) => {
  const { list = [], height, onClick = console.log, routes } = props;

  const location = useLocation();

  /* 在线音乐 */
  const [online_music] = useState([
    getItem(routes.get("推荐"), "推荐", <IconFont type="icon-xingxing" />),
    getItem(routes.get("音乐馆"), "音乐馆", <IconFont type="icon-yinle" />),
    getItem(routes.get("视频"), "视频", <IconFont type="icon-shipin1" />),
    getItem(routes.get("电台"), "电台", <IconFont type="icon-diantai" />),
  ]);

  /* 我的音乐 */
  const [mine_music] = useState([
    getItem(
      routes.get("我喜欢"),
      "我喜欢",
      <IconFont type="icon-xihuan-mianxing" />
    ),
    getItem(
      routes.get("本地和下载"),
      "本地和下载",
      <IconFont type="icon-pc-monitor" />
    ),
    getItem(
      routes.get("最近播放"),
      "最近播放",
      <IconFont type="icon-yinleliebiao1" />
    ),
    getItem(
      routes.get("已购音乐"),
      "已购音乐",
      <IconFont type="icon-dagouyouquan" />
    ),
  ]);

  const [nav_list] = useState([
    getItem("在线音乐", "在线音乐", null, online_music, "group"),
    getItem("我的音乐", "我的音乐", null, mine_music, "group"),
    getItem(
      `${routes.get("歌单")}/created`,
      "创建的歌单",
      null,
      // list[0] || []
      playlist[0].children || []
    ),
    getItem(
      `${routes.get("歌单")}/collected`,
      "收藏的歌单",
      null,
      list[1] || []
    ),
  ]);

  const defaultKeys = [
    `${routes.get("歌单")}/created`, //  创建的歌单
    `${routes.get("歌单")}/collected`, // 收藏的歌单
  ];

  const defaultSelectedKeys = [location.pathname];

  console.log("Slide执行");

  return (
    <div className={style.slide} style={{ height: height }}>
      <Menu
        onClick={onClick}
        mode="inline"
        defaultSelectedKeys={defaultSelectedKeys}
        defaultOpenKeys={defaultKeys}
        style={{
          width: "100%",
        }}
        items={nav_list}
      />
    </div>
  );
});

export default Slide;
