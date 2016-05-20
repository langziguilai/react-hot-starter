##action文件夹不是用来保存action对象的，而是用来发出action请求的
##reducer文件夹是用来保存reducer的：用来解析action并返回新的状态
##constant文件夹是用来保存一些常亮的，比如：action：type
##container用于保存与store相关的组件
##component用于保存与store无关的组件
##template是保存需要引用的模板

可以一次dispatch()多个action
可以在不同的reducer中接受相同的actionType，都会执行
