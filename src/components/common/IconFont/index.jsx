import { createFromIconfontCN } from '@ant-design/icons';
const Icon = createFromIconfontCN({
  scriptUrl: "/src/assets/fonts/iconfont.js",
});

export default function IconFont(props={}) {
  const {fontSize="18px", color="#2b2b2b", style={}} = props
  return <Icon {...props} style={{fontSize, color, ...style}}></Icon>
}