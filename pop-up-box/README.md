# base-pop-up-box

> y

``` bash
# 使用说明
#具体的调用方式可参照components/example/index.vue
## 1、注册组件,template上写组件的dom，并在组件内写信息到时候会插入到弹出框的插槽中

<popup :options="options" :config="config" :asyncComponents="asyncComponents">
     <el-button>click 激活</el-button>  <!--到时候会插入到弹出框的插槽中-->
 </popup>

## 2、弹出框中接收的参数有
    options----- (包括begin_time,end_time,baseInfo等等),
    config -----(弹出框的配置)
    asyncComponents ----(异步加载全局配置)



#开发过程中发现的些注意点
## 1、开发过程中有时候为了方便测试，而需要获取些全局的配置信息，我们可以本地模拟个配置文件,然后在main.js文件中引用并设置，目前全局的模块配置设置是 Vue.prototype.$config = {}; 异步加载组件全局配置为 Vue.prototype.$asyncComponents = []
## 2、异步加载组件写法:异步加载组件import信息需要去异步加载组件全局配置,获取到后给:is属性赋值; 可自己设置属性把对应的些配置传给子组件
    <component :is="component" :module_options="module_options"></component>

```
## 模块配置
``` js
{
    "box_config": {
        "style": {  //弹出框外层的样式
            "width": "400px",  
            "height": "500px"
        },
        "titleAttr": "title",  // 弹出框头部显示的内容,会去传过来的baseInfo中获取
        "trigger": "click",  // 弹出框显示方式 click/focus/hover/manual
        "placement": "right"   // 位置top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end
    },
    "default_selected": "页签2",  // 默认显示页签
    "modules": [{
        "name": "HelloWorld",   // 组件名称
        "label": "页签1",  //标题
        "enable": true,  // 是否显示
        "options": {   // 组件模块配置
            "type": "test"
        }
    }, {
        "name": "HelloWorld11",
        "label": "页签2",
        "enable": true,
        "options": {
            "type": "test2"
        }
    }, {
        "name": "login-form",
        "label": "页签3",
        "enable": true,
        "options": {
            "type": "test4"
        }
    }]
}

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
