## vite + react + antd
- https://zhuanlan.zhihu.com/p/518339176
- https://zhuanlan.zhihu.com/p/358403100

## 主题修改
- https://blog.csdn.net/qq_36123470/article/details/119992858

使用less
- https://blog.csdn.net/qq_43382853/article/details/108324623

## 插件选择
antd按需引用可以使用两个插件，其中`vite-plugin-imp`不知道是我是否配置不对，有一些全局样式不能引入，而使用`vite-plugin-style-import`无问题，`vite-plugin-style-import`依赖于`consola`。注意在`vite-plugin-style-import`2.0版本需要使用的是createStyleImportPlugin而不是styleImprot！

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
	    vue(),
	    createStyleImportPlugin({
	      resolves: [VantResolve()],
	    }),
  ],
})
```


