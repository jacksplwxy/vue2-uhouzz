<template>
    <div style="background:#fff;">
        <div id="main" style="height:300px;"></div>
        <ul class='tips'>
            <li v-for="(tip,index) in tips">{{tip}}</li>
        </ul>
    </div>
</template>
<script>
let strategies = {
    0: ['美国', 'us', [18.2, 18.24, 18.3, 18.33, 18.5, 18.46, 18.7, 18.78, 18.7], ['15-08', '15-09', '15-10', '15-11', '15-12', '16-01', '16-02', '16-03', '16-04'], ['经济强国', '教育领先', '政策完善', '私有制永久产权']],
    1: ['英国', 'uk', [26, 26, 27, 27, 28, 27, 27, 28, 27], ['15-08', '15-09', '15-10', '15-11', '15-12', '16-01', '16-02', '16-03', '16-04'], ['经济强国', '法律完善', '地价攀升', '回报率高', '年租金5%以上']],
    2: ['澳大利亚', 'au', [18.2, 18.24, 18.3, 18.33, 18.5, 18.46, 18.7, 18.78, 18.7], ['15-08', '15-09', '15-10', '15-11', '15-12', '16-01', '16-02', '16-03', '16-04'], ['经济强国', '教育领先', '政策完善', '私有制永久产权']],
    3: ['加拿大', 'ca', [18.2, 18.24, 18.3, 18.33, 18.5, 18.46, 18.7, 18.78, 18.7], ['15-08', '15-09', '15-10', '15-11', '15-12', '16-01', '16-02', '16-03', '16-04'], ['经济强国', '教育领先', '政策完善', '私有制永久产权']],
    4: ['新西兰', 'nz', [18.2, 18.24, 18.3, 18.33, 18.5, 18.46, 18.7, 18.78, 18.7], ['15-08', '15-09', '15-10', '15-11', '15-12', '16-01', '16-02', '16-03', '16-04'], ['经济强国', '教育领先', '政策完善', '私有制永久产权']],
    5: ['日本', 'jp', [18.2, 18.24, 18.3, 18.33, 18.5, 18.46, 18.7, 18.78, 18.7], ['15-08', '15-09', '15-10', '15-11', '15-12', '16-01', '16-02', '16-03', '16-04'], ['经济强国', '教育领先', '政策完善', '私有制永久产权']],
}
export default {
    data() {
        return {
            para: null,
            country: null,
            data: null,
            date: null,
            tips: null,
        }
    },
    mounted() {
        this.fetchData()
    },
    watch: {
        // 如果路由有变化，会执行该方法
        '$route': 'fetchData'
    },
    methods: {
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('main'))
            // 绘制图表
            myChart.setOption({
                title: { text: '近一年' + this.country + '整体房价涨幅' },
                tooltip: {},
                xAxis: {
                    data: this.date
                },
                yAxis: {},
                series: [{
                    type: 'line',
                    data: this.data
                }]
            });
        },
        fetchData() { //本页路由时，重新加载数据
            this.para = this.$route.params.country;
            this.country = strategies[this.$route.params.country][0];
            this.data = strategies[this.$route.params.country][2];
            this.date = strategies[this.$route.params.country][3];
            this.tips = strategies[this.$route.params.country][4];
            this.drawLine();
        },
    }
}
</script>
<style lang="scss" scoped>
@import "../static/scss/common";

/*common不要加.scss*/

.tips {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    padding: 10px;
    li {
        background: #ececec;
        margin: 5px 15px;
        padding: 1px 10px;
    }
}
</style>