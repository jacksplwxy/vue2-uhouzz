<template>
    <div class="logon-model" v-if="isShow">

        <div class="content">
            <div class="close" v-on:click="close">X</div>
            <div>登录</div>
            <div>
                <select style="width: 20%">
                    <option value="+86">+86</option>
                    <option value="+87">+87</option>
                    <option value="+88">+88</option>
                </select>
                <input style="width: 70%" type="text" placeholder="请输入手机号" v-model="phone">
            </div>
            <div style="color:red;">{{attention}}</div>
            <div class="next" @click='check'>下一步</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            phone: '',
            attention: '',
        }
    },
    //props:["isShow"],
    props: {
        isShow: {
            type: Boolean,
            default: false  //默认为false，父组件可以改变为true
        }
    },
    methods: {
        close() {
            this.$emit('closebox', false); //触发closebox方法，'para'为向父组件传递的数据（参数，也就是父组件中的para)
        },
        check() {
            
            if (!this.phone) {
                this.attention = '号码不能为空!'
            } else if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone))) {
                this.attention = '请输入正确的手机号！'
            } else {
                 this.attention = '登录成功'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.logon-model {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #666;
    opacity: 0.95;
    z-index: 1000;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    text-align: center;
    padding: 35px 20px;
    width: 60%;
    height: 150px;
    background: white;
    position: relative;
    left: 15%;
    top: 200px;
    opacity: 1;
    border-radius: 5px;
}

.close {
    font-size: 22px;
    color: #666;
    position: absolute;
    left: 90%;
    top: 5%;
}

.next {
    width: 80px;
    height: 30px;
    line-height: 30px;
    background: #FF5A5F;
    text-align: center;
    border-radius: 3px;
    color: white;
    font-size: 14px;
    margin: 0 auto;
}
</style>