<template>
    <div style="background:#efefef;">
        <customer ></customer>  
        <div class="head">
            <p> <a href="http://localhost:8080/#/" style="text-decoration:none;"> *异乡好居*</a></p>
            <p class="position-father">
                <span @click="showContriesList">
                    {{country}}
                    <b :class="{'rotateTransition':isRotateTransition}">^</b>
                </span>
                <ul class="contries-list" :class="{'showContriesList':isShowContriesList}" @click='gotoOtherDetail'>
                    <li :class="{'selected':para==0}" data-index='0'>美国房产</li>
                    <li :class="{'selected':para==1}" data-index='1'>英国房产</li>
                    <li :class="{'selected':para==2}" data-index='2'>澳洲房产</li>
                    <li :class="{'selected':para==3}" data-index='3'>加拿大房产</li>
                    <li :class="{'selected':para==4}" data-index='4'>新西兰房产</li>
                    <li :class="{'selected':para==5}" data-index='5'>日本房产</li>
                </ul>
            </p>
            <p @click="openCustomer">*会话*</p>
        </div>
        <ul class='tbar' @click='gotoTBar'>
            <li :class="{'tbar-selected':'price'==nowTbar}" data-tbar='price'>价格走势</li>
            <li :class="{'tbar-selected':'case'==nowTbar}" data-tbar='case'>置业案例</li>
            <li :class="{'tbar-selected':'strategy'==nowTbar}" data-tbar='strategy'>购房攻略</li>
        </ul>
        <router-view></router-view>
        <div class="investDic">
            <div>
                <p>2017海外房产</p>
                <b>置业投资宝典</b>
            </div>
            <div class="search">免费搜索</div>
        </div>
        <div class="hotHouse">
            <h3>{{country}}热门楼盘</h3>
        </div>
    </div>
</template>
<script>
import customer from '../component/customer.vue'
import { mapState, mapMutations } from 'vuex';
let strategies = {
    0: ['美国', 'us'],
    1: ['英国', 'uk'],
    2: ['澳大利亚', 'au'],
    3: ['加拿大', 'ca'],
    4: ['新西兰', 'nz'],
    5: ['日本', 'jp'],
}
export default {
    data() {
        return {
            para: this.$route.params.country,
            country: strategies[this.$route.params.country][0],
            isShowContriesList: true,
            isRotateTransition: false,
            nowTbar: 'price',
        }
    },
    components: {
        customer,
    },
    created() {
        this.fetchData()
    },
    watch: {
        // 如果路由有变化，会执行该方法
        '$route': 'fetchData'
    },
    methods: {
        ...mapMutations([
            'openCustomer', 'closeCustomer'
        ]),
        showContriesList() {
            this.isShowContriesList = !this.isShowContriesList;
            this.isRotateTransition = !this.isRotateTransition;
        },
        gotoOtherDetail(e) {
            if (e.target.nodeName == 'UL') {
                return false;
            }
            //此处只是改变路由的参数，页面并不会改变，需添加watch监听路由变化，调用fetchData方法重新赋值渲染
            //https://router.vuejs.org/zh-cn/advanced/data-fetching.html
            this.$router.push('/temp3/detail/' + e.target.dataset.index);
            this.nowTbar='price';
        },
        fetchData() { //本页路由时，重新加载数据
            this.para = this.$route.params.country;
            this.country = strategies[this.$route.params.country][0];
            this.isShowContriesList = true;
            this.isRotateTransition = false;
            //this.$router.push( '/temp3/detail/' + this.para + '/' + this.nowTbar);
        },
        gotoTBar(e) { //点击走势图、案例和攻略
            if (e.target.nodeName == 'UL') {
                return false;
            }
            this.nowTbar = e.target.dataset.tbar;
            this.$router.push('/temp3/detail/' + this.para + '/' + e.target.dataset.tbar)
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../static/scss/common";
/*common不要加.scss*/
.head {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    text-align: center;
    padding: 15px;
    background: #fff;
    p {
        color: #FF5A5F;
        font-weight: bold;
    }
    .position-father {
        position: relative;
        color: #333;
        b {
            display: inline-block;
            transition: transform 0.2s linear;
        }
        .contries-list {
            list-style: none;
            width: 100px;
            text-align: center;
            position: absolute;
            left: -28px;
            top: 38px;
            z-index: 100;
            background: #fff;
            li {
                line-height: 40px;
                border-bottom: 1px solid #ccc;
            }
        }
    }
}

.selected {
    color: #FF5A5F;
}

.showContriesList {
    display: none;
}

.rotateTransition {
    transform: rotate(-180deg);
}

.tbar {
    display: flex;
    justify-content: space-around;
    text-align: center;
    border-bottom: 1px solid #ccc;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    background: #fff;
    .tbar-selected {
        border-bottom: 3px solid #FF5A5F;
    }
}

.investDic {
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    margin-top: 20px;
    .search {
        height: 35px;
        line-height: 35px;
        background: red;
        padding: 0 15px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        font-size: 15px;
    }
}

.hotHouse {
    background: #fff;
    margin-top: 20px;
    h3 {
        text-align: center;
        padding: 20px;
    }
}
</style>