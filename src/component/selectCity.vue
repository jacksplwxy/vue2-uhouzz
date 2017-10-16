<template>
	<div class="select-city" v-if="cityShow">
		<ul class="lar" style='padding:10px;'>
			<li><img src='../static/imgs/find.jpg'></img>
			</li>
			<li style="width:60%;position:relative;">
				<input v-on:keyup='tips()' v-model="cityName" style='width:100%;outline:none;' placeholder='输入关键字搜索城市，如：niu' />
				<ul class='tips' v-if="seen">
					<li v-for="(relation,index) in relations" v-on:click="relationClick(relation.cityName)">{{relation.cityName}}</li>
				</ul>
			</li>
			<li @click='confirm()'>确定</li>
			<li @click='cancel()'>取消</li>
		</ul>

	</div>
</template>
<script>
export default {
	data() {
		return {
			seen: false,
			cityName: '',
			relations: '',
		}
	},
	props: {
		cityShow: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		tips() {
			var _this = this;
			if (!this.cityName) {
				console.log('city名为空！')
				_this.seen = false;
				return
			}
			_this.seen = true;
			this.$http.post('http://localhost:3030/selectCity.json', {
				'keyWords': _this.cityName
			}, { emulateJSON: true }).then((result) => {
				console.log(result.body)
				_this.relations = result.body;
			});
		},
		relationClick(city) {
			this.cityName = city;
			this.seen = false;
		},
		confirm() {
			var _this = this;
			this.$emit('inputCity', [_this.cityName, false]); //触发inputCity方法，'para'为向父组件传递的数据
		},
		cancel() {
			this.$emit('closeSelectCity', false);
		},
	}
}
</script>
<style lang="scss" scoped>
@import "../static/scss/common";

/*common不要加.scss*/

.select-city {
	font-size: 14px;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	background: #fff;
	.tips {
		position: absolute;
		top: 20px;
		background: #fff;
		border: 1px solid #ccc;
		padding: 5px 25px 5px 10px;
		cursor: pointer;
	}
	.tips li:hover {
		background: #ccc;
	}
}
</style>