# uni-navigator - 一个微信小程序的导航条组件

## 特性
- [x] 一个自定义组件，提供了一个水平导航条。
- [x] 通过js object来配置导航项。
- [x] 导航项除了支持跳转到tabBar页面之外，还支持跳转到非tabBar页面。
- [x] 导航项除了支持页面之间的跳转之外，还支持页面内的虚拟页切换。
- [x] 支持对导航条实例隐藏指定导航项。
- [ ] 支持对导航条实例的样式进行自定义。

## 组件配置

配置是一个js object，可以放在文件中，比如根目录下的config.js，object中的每一个元素都是一个导航项，元素的key是导航项的标识，元素的value是对导航项的配置，这个配置也是一个object，这个object中的各属性说明如下：

| 属性名 | 属性类型         | 是否必填 | 说明                                                         |
| ------ | ---------------- | -------- | ------------------------------------------------------------ |
| id     | Number           | 是       | 用于循环遍历时的key                                          |
| next   | String           | 是       | 如果type为“bindtap”，则next为处理这次跳转事件的handler，该handler应该与组件属性中的bind:change中指定的handler相一致。如果type为其它值，则next为这次跳转需要到达页面的路径，比如“/pages/logs/logs”。 |
| type   | String           | 是       | 三个有效值：<br />* navigate - 该导航项将跳转至非tabBar页面。<br />* switchTab - 该导航项将跳转至tabBar页面。<br />* bindtap - 该导航项将做页内虚拟页的切换。 |
| title  | String           | 是       | 导航项的名称                                                 |
| data   | JSON格式的String | 否       | 如果导航项的type为“bindtap”，则可能需要传送一些数据给handler，把数据写成json格式，然后用单括号wrap起来，写到data里。在handler中，可以用`JSON.parse(event.detail.data)`来获得这些数据。 |




## 组件属性：
| 属性           | 类型          | 必填  | 说明                         |
| ---------------- | ------------- | ----- | ---------------------------- |
| navigator  | Object        | 是    | 配置                   |
| current       | String        | 是    | 当前导航项的key              |
| exclude      | Array         | 否    | 需屏蔽导航项的key数组        |
| bind:change | String | 否 | 如果配置中有type为‘bindtap‘的配置项，则需要将一个handler赋给这个属性，该属性并非本组件的专用属性，而是借用了小程序原有的事件处理机制。 |

## 示例
代码片段：`wechatide://minicode/c5VjTDmI65Yd` 或者 `git clone`本项目然后用开发者工具打开。

## 截图
<img src="https://raw.githubusercontent.com/clemthedasher/uni-navigator/master/images/demo1.png"/>
<img src="https://raw.githubusercontent.com/clemthedasher/uni-navigator/master/images/demo2.png"/>
<img src="https://raw.githubusercontent.com/clemthedasher/uni-navigator/master/images/demo3.png"/>
