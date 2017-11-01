<template>
    <div>
        <el-popover :placement="boxConfig.box_config.placement" :trigger="boxConfig.box_config.trigger" popper-class="base-pop-up-box">
            <div :style="boxConfig.box_config.style">
                <el-row>
                    <el-col>
                        <div class="head">{{baseInfo[boxConfig.box_config.titleAttr]}}</div>
                    </el-col>
                </el-row>
                <el-tabs @tab-click="handleClick" :value="this.boxConfig.default_selected">
                    <el-tab-pane v-for="item in modules" :label="item.label" :name="item.label" v-if="item.enable">
                        <span slot="label"><i></i>{{item.label}}</span>
                    </el-tab-pane>
                </el-tabs>
                <!-- 异步加载组件 -->
                <component :is="component" :module_options="module_options"></component>
            </div>
            <!-- 存放点击事件的dom -->
            <span slot="reference">
                    <slot>
                    </slot>
                </span>
        </el-popover>
    </div>
</template>
<script>
    import _ from 'lodash'
    export default {
        name: 'PopUpBox',
        props: {
            options: {      // 实例化时传的配置信息
                type: Object
            },
            config: {    //弹出框的配置
                type: Object
            },
            asyncComponents: {   // 异步加载组件时全局配置
                type: Array
            }
        },
        data() {
            return {
                boxConfig: this.config || {},
                baseInfo: this.options.baseInfo || {},
                modules: this.config.modules || [],
                component: null,
                module_options: null,
                asyncComps: this.asyncComponents || []
            };
        },
        created() {
            var selected_name = this.boxConfig.default_selected || this.modules[0].label;
            this._asyncModule(selected_name);
        },
        mounted() {},
        methods: {
            handleClick(tab, event) {
                var name = tab.name;
                this._asyncModule(name);
            },
            _asyncModule(name) {
                var tab_config = _.find(this.modules, function(v) {
                    return v.label === name;
                }) || {};
                var asyncModule = _.find(this.asyncComps, function(v) {
                    return tab_config.name === v.name;
                }) || {};
                this.component = asyncModule.component;
                this.module_options = Object.assign({}, tab_config.options, this.options);
            }
        }
    };
</script>

<style>
    .base-pop-up-box.el-popover {
        padding: 0px;
    }
    .base-pop-up-box .el-row {
        &:last-child {
            margin-bottom: 0;
        }
    }
    .base-pop-up-box .el-row .head {
        background: #58B7FF;
        height: 37px;
        line-height: 37px;
        color: #ffffff;
        padding-left: 10px;
        font-size: 14px;
        font-weight: bold;
    }
    .base-pop-up-box .el-tabs {
        padding-left: 5px;
        padding-right: 5px;

    }
</style>