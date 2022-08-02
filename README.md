很遗憾，使用的后台服务又挂了，貌似QQ音乐更改了接口。暂停开发，等大佬修复了接口再继续吧，没有网易云音乐会员，听歌有限制。

## vite + react + antd

- https://zhuanlan.zhihu.com/p/518339176
- https://zhuanlan.zhihu.com/p/358403100

## 主题修改

- https://blog.csdn.net/qq_36123470/article/details/119992858

使用less

- https://blog.csdn.net/qq_43382853/article/details/108324623

## 插件（库）

### antd

antd按需引用可以使用两个插件，其中 `vite-plugin-imp`不知道是我是否配置不对，有一些全局样式不能引入，而使用 `vite-plugin-style-import`无问题，`vite-plugin-style-import`依赖于 `consola`。注意在 `vite-plugin-style-import`2.0版本需要使用的是createStyleImpor	tPlugin而不是styleImprot！

- `npm i vite-plugin-style-import consola -D`
- package.json

```json
{
	"devDependencies": {
	"vite-plugin-style-import": "^2.0.0",
	"consola": "^2.15.3"
	},
	"resolutions": {
		"console": "consola"
	}
}
```

- vite.config.js

```js
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import';
export default defineConfig({
	plugins: [
		react(),
		createStyleImportPlugin({
			resolves: [VantResolve()],
		}),
  ],
})
```

### emotion

为了便于css的操作，综合下来选择使用 `emotion`。

原因：

- `module.css`过于麻烦，内联样式不够完美，一些伪类、伪元素不能使用
- `styled-components`的styled不能单独书写css，导致增加很多的组件标签，组件标签多了之后甚至难以检查哪些是styled组件，当然还是可以使用特定的前缀名来识别的，但是还是没有emotion使用方便。
- `tailwindcss`，学习成本高不说，写类名、调试还不如自己写css，个人不是很喜欢这种库。

原有打算选择 `module.css`即可，但是后来发现样式选择过于困难，于是选择 `module.css + emotion`，很完美的搭配 。

## 问题

### 重复渲染

尽管自己在努力抽出容器组件和展示组件，但可能由于习惯写内联函数、内联对象，所以项目目前还是会有无意义的重复渲染，这也是React难度高的原因，写出来简单，性能优化很快困难。

### react-activation无效

未找到原因所在，未能实现keep-alive功能
