<template>
    <div id="index">
        <logon-model @closebox="fclosebox" :isShow="isShow"></logon-model>
        <customer ></customer>      
        <select-city @inputCity="finputCity" @closeSelectCity="fcloseSelectCity" :cityShow="cityShow"></select-city>
        <appdl></appdl>
        <navi @nclosebox="fclosebox" @navigate="fnavigate"></navi>
        <router-view :city="myCity" @selectCity="fcloseSelectCity"></router-view>
    </div>
</template>
<script>
import logonModel from '../component/logonModel.vue'
import appdl from '../component/appDownLoad.vue'
import navi from '../component/nav.vue'
import VueRouter from 'vue-router'
import selectCity from '../component/selectCity.vue'
import customer from '../component/customer.vue'
export default {
    data() {
        return {
            isShow: false,
            cityShow: false,
            myCity: '',

        }
    },
    components: {
        logonModel,
        appdl,
        navi,
        selectCity,
        customer,
    },
    methods: {
        fclosebox(para) { //子组件调用父组件方法和传递参数
            this.isShow = para;
        },
        fnavigate(para) { //子组件调用父组件方法和传递参数
            this.$router.push(para)
        },
        finputCity(para) {
            this.myCity = para[0];
            this.cityShow = para[1];
            console.log('this.myCity为：' + this.myCity)
        },
        fcloseSelectCity(para) {
            console.log('取消' + para)
            this.cityShow = para;
        },
    },
}
</script>
<style lang="scss" scoped>

</style>