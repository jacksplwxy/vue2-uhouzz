<template>
    <div style="width: 80%;margin:20px auto;text-align: center;">
        <h3>您好，您想租哪里的公寓</h3>
        <p>从超过{{obj.gongyu}}套房源中选择</p>
        <div @click='selCity()' style="border-bottom: 2px solid #999;width:90%;margin:10px auto;padding:10px;text-align: left;">
            <i class='triangle'></i>
            <input v-on:keyup='tips()' v-bind:value="city" style='width:80%;outline:none;' placeholder='选择城市' />
        </div>
        <div class="find-flat" v-bind:class="{findFlatStyle: city}"  @click='gotoSearch()'>
            搜索房源
        </div>
        <p class="help"> <a href="https://jinshuju.net/f/2CqvAw?code=041yick12f3ZkZ0yEol12lpXj12yickr">预约顾问帮您选房 ></a> </p>
        <div style="height:120px"></div>
        <lunboModel class="lunboModel"></lunboModel> 
    </div>
</template>
<script>
import lunboModel from '../component/lunboModel.vue'
export default {
    data() {
        return {
            obj: [],
        }
    },
    props: ["city"],
    methods: {
        selCity() {
            console.log('开始选择城市')
            this.$emit('selectCity', true);
        },
        gotoSearch(){
            console.log('开始搜索')
            location.href='https://m.uhouzz.com/us/ann-arbor/apartments'
        }
    },
    mounted: function() {
        var _this = this;
        this.$http.get('http://localhost:3030/nav_lxgy.json').then(function(result) {
            _this.obj = result.body;
        });
    },
    components: {
        lunboModel,
    },
}
</script>
<style lang="scss" scoped>
/*common不要加.scss*/

@import "../static/scss/common";
.triangle {
    display: inline-block;
    width: 0px;
    height: 0px;
    border: 10px solid transparent;
    border-left: 10px solid orange;
    vertical-align: sub;
}

.find-flat {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 17px;
    color: white;
    background: #eee;
    border-radius: 5px;
}

.help {
    text-align: center;
    color: red;
    font-size: 15px;
    margin: 10px 0;
    a{
       text-decoration:none;
    }
}

.findFlatStyle {
    background-color: #FF5A5F
}
</style>