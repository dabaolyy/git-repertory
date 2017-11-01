<template>
    <div>
        <popup :options="options" :config="config" :asyncComponents="asyncComponents">
            <el-button>click 激活</el-button>  <!--到时候会插入到弹出框的插槽中-->
        </popup>
    </div>
</template>
<script>
    import box from '@/components/pop-up-box'
    import config from './box-config.json'
    import _ from 'lodash'
    import asyncComponents from './module-configure.js'

    export default {
        name: 'boxMain',
        components: {
            'popup': box
        },
        data() {
            return {
                options: {
                    baseInfo: {
                        title: '乾务水库'
                    },
                    begin_time: '',
                    module_key: ''
                },
                config: config,
                asyncComponents: asyncComponents
            }
        },
        created() {
            this.config = config;
        },
        mounted() {},
        methods: {}
    };
</script>