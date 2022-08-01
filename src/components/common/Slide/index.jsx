import React, { memo } from "react";

import { Menu } from "antd";

import IconFont from "@/components/common/IconFont";
import style from "./style.module.less";

/* 在线音乐 */
const online_music = [
  getItem("推荐", "推荐", <IconFont type="icon-xingxing" />),
  getItem("音乐馆", "音乐馆", <IconFont type="icon-yinle" />),
  getItem("视频", "视频", <IconFont type="icon-shipin1" />),
  getItem("电台", "电台", <IconFont type="icon-diantai" />),
];

/* 我的音乐 */
const mine_music = [
  getItem("我喜欢", "我喜欢", <IconFont type="icon-xihuan-mianxing" />),
  getItem("本地和下载", "本地和下载", <IconFont type="icon-pc-monitor" />),
  getItem("最近播放", "最近播放", <IconFont type="icon-yinleliebiao1" />),
  getItem("已购音乐", "已购音乐", <IconFont type="icon-dagouyouquan" />),
];

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
    getItem("国风精选篇", "国风精选篇"),
    getItem("国语 | 听着歌", "国语 | 听着歌"),
  ]),
];

const nav_list = [
  // 在线音乐
  getItem("在线音乐", "在线音乐", null, online_music, "group"),
  getItem("我的音乐", "我的音乐", null, mine_music, "group"),
  ...playlist,
];
const defaultKeys = ["创建的歌单", "收藏的歌单"];

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Slide = memo((props) => {
  return (
    <div
      className={style.slide}
      style={props?.height ? { height: props.height } : {}}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["推荐"]}
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
