<template>
    <div class="lcr">
        <div class="logon" v-on:click="logon"></div>
        <div class="nav">
            <div class="cage">
                <ul>
                    <li v-for="(relation,index) in relations" v-bind:class="{clicked:index==nowIndex}" v-on:click="relationClick(index,relation.path)">
                        {{relation.text}}
                    </li>
                    <li @click="gotoOuterWebsite">预约顾问</li>
                </ul>
            </div>
        </div>
        <div class="senssion" @click="openCustomer"></div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return {
            relations: [
                { text: '留学公寓', path: '/temp1' },
                { text: '海外租房', path: '/temp2' },
                { text: '海外房产', path: '/temp3' },
                { text: '定制服务', path: '/temp4' },
                { text: '海外移民', path: '/temp5' },
            ],
            nowIndex: 0,
        }
    },
    methods: {
        ...mapMutations([
            'openCustomer', 'closeCustomer'
        ]),
        logon() {    //调用父组件方法，改变兄弟组件nav状态
            this.$emit('nclosebox', true);
        },
        relationClick(index, path) {
            this.nowIndex = index;
            this.$emit('navigate', path);//调用父组件方法，改变兄弟组件nav状态
        },
        gotoOuterWebsite(){
            location.href='https://jinshuju.net/f/2CqvAw'
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../static/scss/common";

/*common不要加.scss*/

.lcr {
    display: flex;
    justify-content: space-around;
    padding: 5px 0;
}

.logon {
    width: 10%;
    height: 30px;
    background: url("../static/imgs/person.jpg") no-repeat center center;
    background-size: contain;
}

.nav {
    width: 70%;
    height: 60px;
    overflow-x: scroll;
}

.nav .cage {
    height: 41px;
    width: 500px;
    overflow: hidden;
}

.nav ul {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
}

.nav li {
    text-align: center;
    line-height: 40px;
}

.senssion {
    width: 10%;
    height: 30px;
    background: url("../static/imgs/session.jpg") no-repeat center center;
    background-size: contain;
}

.clicked {
    color: $cl;
    border-bottom: 1px solid $cl;
}
</style>