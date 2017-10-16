<template>
    <div v-if="isShow">
        <div class="down-load">
            <div>
                <img style="width: 50px;height: 50px;" src="../static/imgs/logoDownLoad.png" alt="">
                <div style="margin-left: 10px;">
                    <p style="font-weight: bold;">异乡好居APP</p>
                    留学生海外的家
                </div>
            </div>
            <div >
                <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.yxhjandroid.uhouzz" class="load-now">立即下载</a>
                <p class="close"  v-on:click="close">X</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'appdl',
        data () {
            return {
                isShow: true,
            }
        },
        methods:{
            close(){
                this.isShow=false;
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../static/scss/common";  /*common不要加.scss*/
    .down-load{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        background: #f6f6f6;
        padding: 10px;
        font-size: $fs;
    }
    .down-load>div{
        @extend .ltor;
        align-items:center;
    }
    .load-now{
        width: 80px;
        height: 35px;
        line-height: 35px;
        background:$cl;
        text-align: center;
        border-radius: 5px;
        color: white;
        font-size: 14px;
        text-decoration: none;
    }
    .close{
        font-size: 18px;
        color:$cl;
        margin-left: 10px;
    }
</style>