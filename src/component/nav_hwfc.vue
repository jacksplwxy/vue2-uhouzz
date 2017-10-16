<template>
    <div style="width: 80%;margin:20px auto;text-align: center;">
	<h3>您好，您想购买哪里的房产</h3>
	<ul class="countries">
		<li v-for="(arr,index) in arrs" @click='gotoDetail(index)'>
			<img :src='arr.pic'/>
			<div>{{arr.country}}</div>
		</li>
	</ul>
    </div>
</template>
<script>
    export default{
        data () {
            return {
                arrs:[]
            }
        },
        mounted:function(){
            var _this = this;
            this.$http.get('http://localhost:3030/nav_hwfc.json').then(function(result){
                    _this.arrs = result.body;
            });
		},
		methods:{
			gotoDetail(index){
				this.$router.push('/temp3/detail/'+index)	//动态路由匹配：index匹配router.js中的country，跳转后index作为参数
			}
		}
    }
</script>
<style lang="scss" scoped>
    @import "../static/scss/common";  /*common不要加.scss*/
	.countries{
		display:flex;
		flex-wrap:wrap;
		justify-content:space-around;
		li{
			width:30%;
			position:relative;
			img{
				width:100%;
				height:100px;
			}
			div{
				position:absolute;
				width:100%;
				text-align:center;
				top:30%;
				color:#fff;
			}
		}
	}
</style>