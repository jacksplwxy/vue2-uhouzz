<template>
    <div class="lcr">
        <i class="iconfont icon-people logon" v-on:click="logon"></i>
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
        <i class="iconfont icon-chat1 senssion"  @click="openCustomer"></i>
        
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      relations: [
        { text: "留学公寓", path: "/temp1" },
        { text: "海外租房", path: "/temp2" },
        { text: "海外房产", path: "/temp3" },
        { text: "定制服务", path: "/temp4" },
        { text: "海外移民", path: "/temp5" }
      ],
      nowIndex: 0
    };
  },
  methods: {
    ...mapMutations(["openCustomer", "closeCustomer"]),
    logon() {
      //调用父组件方法，改变兄弟组件nav状态
      this.$emit("nclosebox", true);
    },
    relationClick(index, path) {
      this.nowIndex = index;
      this.$emit("navigate", path); //调用父组件方法，改变兄弟组件nav状态
    },
    gotoOuterWebsite() {
      location.href = "https://jinshuju.net/f/2CqvAw";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../static/scss/common";
@import "../static/scss/font_icon/iconfont.css";
/*common不要加.scss*/

.lcr {
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
}

.logon {
  font-size: 35px;
  margin-top: 0px;
  color: #999;
  width: 5%;
}

.nav {
  width: 75%;
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
  font-size: 22px;
  margin-top: 10px;
  color: $cl;
}

.clicked {
  color: $cl;
  border-bottom: 1px solid $cl;
}
</style>