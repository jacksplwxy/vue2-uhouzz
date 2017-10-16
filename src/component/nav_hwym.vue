<template>
	<div>
		<ul class="countries">
			<li v-for="arr in arrs">
				<img :src='arr.pic' />
				<div>{{arr.title}}</div>
				<p>移民类型：{{arr.type}}</p>
				<p>移民周期：{{arr.poried}}</p>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		return {
			arrs: []
		}
	},
	mounted: function() {
		var _this = this;
		this.$http.get('http://localhost:3030/nav_hwym.json').then(function(result) {
			_this.arrs = result.body;
			console.log(_this.arrs)
		});
	}
}
</script>
<style lang="scss" scoped>
@import "../static/scss/common";
.countries {
	padding: 5px;
	li {
		margin-bottom: 30px;
		div {
			margin: 5px 0;
		}
		p {
			color: #666;
			font-size: 14px;
		}
		img{
			width: 100%;
			height: 300px;
		}
	}
}
</style>